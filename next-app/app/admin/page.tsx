import { auth,signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
export default async function Admin(){const session=await auth();if(!session?.user?.email)redirect('/admin/login');const [routes,coaches,enquiries]=await Promise.all([db.route.count(),db.coach.count(),db.contactSubmission.count()]);return <main style={{padding:40,maxWidth:900,margin:'auto'}}><h1>Kasturii Roadways Admin</h1><p>Signed in as {session.user.email}</p><p>Routes: {routes} · Coaches: {coaches} · Enquiries: {enquiries}</p><p><a href="/admin/content">Manage cities, coaches, amenities and FAQs</a></p><form action={async()=>{'use server';await signOut({redirectTo:'/admin/login'})}}><button>Sign out</button></form></main>}
