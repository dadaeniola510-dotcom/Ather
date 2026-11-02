import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Aether — Your home, intelligently alive',description:'Premium smart-home design and installation in Lagos, Abuja and Port Harcourt. Lighting, climate, security, sound and energy—working as one.',openGraph:{title:'Aether — Your home, intelligently alive',description:'A considered home, beautifully in sync.',type:'website'}, metadataBase:new URL('https://aether.ng')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
