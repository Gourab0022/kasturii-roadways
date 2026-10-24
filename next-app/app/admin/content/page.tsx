import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import ContentEditor from './content-editor';
export default async function ContentPage(){const session=await auth();if(!session?.user?.email)redirect('/admin/login');return <ContentEditor/>}
