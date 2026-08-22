import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/AppShell';
export const metadata: Metadata = { title: 'UDG Basement — underground music community', description: 'A social platform for independent music creators.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><AppShell>{children}</AppShell></body></html>; }
