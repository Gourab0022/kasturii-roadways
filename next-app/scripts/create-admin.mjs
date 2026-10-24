import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createInterface } from 'node:readline/promises';
import { stdin,stdout } from 'node:process';
const rl=createInterface({input:stdin,output:stdout});const db=new PrismaClient();
try{const email=(await rl.question('Admin email: ')).trim().toLowerCase();const password=await rl.question('New admin password (min 14 characters): ');if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)||password.length<14)throw Error('Invalid email or password shorter than 14 characters');const exists=await db.adminUser.count();if(exists>0)throw Error('An admin already exists. Use a secured account-management process to add more.');await db.adminUser.create({data:{email,passwordHash:await bcrypt.hash(password,12)}});stdout.write('Admin created.\\n')}catch(err){console.error(err.message);process.exitCode=1}finally{rl.close();await db.$disconnect()}
