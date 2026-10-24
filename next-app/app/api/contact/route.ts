import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
const schema=z.object({name:z.string().trim().min(2).max(120),mobile:z.string().trim().regex(/^\\+?[0-9 ()-]{10,20}$/),email:z.email().max(254),subject:z.enum(['booking','cancellation','amenities','feedback','business','other']),message:z.string().trim().min(10).max(5000),website:z.string().optional()}).strict();
export async function POST(request:NextRequest){
 const type=request.headers.get('content-type')||'';if(!type.includes('application/json'))return NextResponse.json({error:'JSON required'},{status:415});
 let raw;try{raw=await request.json()}catch{return NextResponse.json({error:'Invalid JSON'},{status:400})}
 const parsed=schema.safeParse(raw);if(!parsed.success)return NextResponse.json({error:'Invalid contact details'},{status:400});
 const data=parsed.data;if(data.website)return NextResponse.json({received:true},{status:202});
 const recent=await db.contactSubmission.count({where:{email:data.email.toLowerCase(),createdAt:{gte:new Date(Date.now()-3600000)}}});
 if(recent>=3)return NextResponse.json({error:'Too many submissions. Please try later.'},{status:429});
 await db.contactSubmission.create({data:{name:data.name,mobile:data.mobile,email:data.email.toLowerCase(),subject:data.subject,message:data.message}});
 return NextResponse.json({received:true},{status:201});
}
