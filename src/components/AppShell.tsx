'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Compass, Disc3, Home, Mail, Mic2, Music2, Radio, Search, User } from 'lucide-react';

const nav = [['/','Home',Home],['/discover','Discover',Compass],['/feedback','Feedback',Radio],['/features','Features',Mic2],['/beats','Beats',Disc3],['/profile/mayasol','Profile',User]] as const;
const rooms = ['Alt-R&B hooks', 'Producers trading loops', 'Feedback', 'Amapiano edits'];

function NavLinks({mobile = false}:{mobile?:boolean}) {
  const pathname = usePathname();
  return <>{nav.map(([href, label, Icon]) => {
    const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={mobile ? `flex min-w-0 flex-col items-center gap-1 py-1.5 text-[10px] font-bold uppercase tracking-wide transition ${active ? 'text-neon' : 'text-zinc-500'}` : `nav-link ${active ? 'nav-link-active' : ''}`}><Icon size={mobile ? 20 : 19} strokeWidth={active ? 2.4 : 2}/><span className="truncate">{label}</span></Link>;
  })}</>;
}

export function AppShell({children}:{children:React.ReactNode}) {
  return <div className="app-background mobile-safe-bottom min-h-screen">
    <div className="site-grid">
    <aside className="left-rail hidden md:flex md:flex-col">
      <Link href="/" className="brand-mark mb-9 flex items-center gap-3" aria-label="UDG Basement home"><span className="grid h-10 w-10 place-items-center border-2 border-neon bg-neon text-black"><Music2 size={21}/></span><span className="leading-none"><span className="brand-type block text-xl text-white">UDG</span><span className="block text-[10px] font-black uppercase tracking-[.28em] text-zinc-500">Basement</span></span></Link>
      <nav className="space-y-1" aria-label="Primary navigation"><NavLinks/></nav>
      <button className="accent-button mt-6 min-h-11 px-4 text-sm font-black uppercase tracking-wide">Post a drop</button>
      <div className="scene-note mt-auto"><p className="eyebrow">Tonight in the scene</p><p className="mt-2 text-sm font-bold leading-5 text-zinc-200">14 feedback reviews unlocked</p><p className="mt-1 text-xs leading-5 text-zinc-500">8 open verses · 23 new beats</p></div>
    </aside>
    <main className="main-column min-w-0 py-5 md:py-7">{children}</main>
    <aside className="right-rail hidden min-w-0"><div className="right-rail-inner surface p-4"><label className="flex items-center gap-2 border border-[#35362f] bg-[#0a0b0b] px-3 py-2.5 text-sm text-zinc-500"><Search size={17}/><span>Search the scene</span></label><div className="mt-6 flex items-center justify-between"><h2 className="display-heading text-lg text-white">Trending rooms</h2><span className="eyebrow text-neon">Live</span></div><div className="mt-3 divide-y divide-[#2a2b29]">{rooms.map((room, index) => <Link href="/discover" key={room} className="block py-3 transition hover:pl-1"><span className="text-xs text-zinc-600">0{index + 1} · room</span><p className="mt-0.5 text-sm font-bold text-zinc-200">#{room}</p></Link>)}</div></div></aside>
    </div>
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-[#34352f] bg-[#10110f] px-1 pb-[max(.45rem,env(safe-area-inset-bottom))] pt-1 md:hidden" aria-label="Mobile navigation"><NavLinks mobile/></nav>
  </div>;
}

export function TopBar({title,subtitle}:{title:string;subtitle:string}) { return <header className="mb-7 flex items-start justify-between gap-4"><div className="min-w-0"><p className="eyebrow mb-1">UDG Basement / community board</p><h1 className="display-heading text-4xl text-white md:text-5xl">{title}</h1><p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 md:text-base">{subtitle}</p></div><div className="hidden shrink-0 gap-2 pt-1 sm:flex"><button className="icon-button" aria-label="View notifications"><Bell size={19}/></button><button className="icon-button" aria-label="View messages"><Mail size={19}/></button></div></header>; }
