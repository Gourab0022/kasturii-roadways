import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Kasturii Roadways | Luxury Night Coach', description:'Premium intercity night-coach journeys across Odisha.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body style={{margin:0,fontFamily:'system-ui, sans-serif'}}>{children}</body></html>}
