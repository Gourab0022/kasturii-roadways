import { auth } from '@/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
export async function GET(){const session=await auth();if(!session?.user?.email)return NextResponse.json({error:'Unauthorized'},{status:401});const data=await db.contactSubmission.findMany({orderBy:{createdAt:'desc'},take:100});return NextResponse.json({data})}
