import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
const schema=z.object({from:z.string().trim().min(1).max(100),to:z.string().trim().min(1).max(100),date:z.iso.date(),passengers:z.coerce.number().int().min(1).max(6).default(1)});
export async function GET(request:NextRequest){
 const q=Object.fromEntries(request.nextUrl.searchParams);const parsed=schema.safeParse(q);if(!parsed.success)return NextResponse.json({error:'Invalid journey search'},{status:400});
 const {from,to,date,passengers}=parsed.data;const day=new Date(date+'T12:00:00Z');if(day.toISOString().slice(0,10)!==date)return NextResponse.json({error:'Invalid date'},{status:400});
 const today=new Date().toISOString().slice(0,10);if(date<today||day.getTime()>Date.now()+180*86400000)return NextResponse.json({error:'Journey date out of range'},{status:400});
 const schedules=await db.schedule.findMany({where:{published:true,route:{published:true,origin:{name:{equals:from,mode:'insensitive'}},destination:{name:{equals:to,mode:'insensitive'}}}},include:{route:{include:{origin:true,destination:true}},coach:true},take:200});
 const dow=['sun','mon','tue','wed','thu','fri','sat'][day.getUTCDay()];
 const data=schedules.filter(s=>(!s.validFrom||s.validFrom<=day)&&(!s.validUntil||s.validUntil>=day)).filter(s=>{try{const days=JSON.parse(s.operatingDays);return !Array.isArray(days)||days.length===0||days.includes(dow)}catch{return false}}).map(s=>({id:s.id,from:s.route.origin.name,to:s.route.destination.name,departure:s.departure,arrival:s.arrival,startingFare:s.fare,coach:s.coach?.name||null}));
 return NextResponse.json({data,meta:{date,passengers,availabilityType:'published_schedules_only',liveSeats:false}});
}
