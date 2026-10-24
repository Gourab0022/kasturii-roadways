import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { db } from '@/lib/db';
export const { handlers, auth, signIn, signOut } = NextAuth({
 session:{strategy:'jwt'},pages:{signIn:'/admin/login'},providers:[Credentials({credentials:{email:{},password:{}},async authorize(raw){
 const parsed=z.object({email:z.email(),password:z.string().min(1)}).safeParse(raw);
 if(!parsed.success)return null;
 const user=await db.adminUser.findUnique({where:{email:parsed.data.email.toLowerCase()}});
 if(!user || !(await bcrypt.compare(parsed.data.password,user.passwordHash)))return null;
 return {id:user.id,email:user.email,name:user.name||'Administrator'};
 }})]
});
