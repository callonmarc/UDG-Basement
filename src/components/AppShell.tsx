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
    return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={mobile ? `flex min-w-0 flex-col items-center gap-1 rounded-lg py-1.5 text-[10px] font-medium transition ${active ? 'text-neon' : 'text-zinc-500'}` : `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? 'bg-[#22242a] text-neon shadow-sm' : 'text-zinc-400 hover:bg-[#191a1e] hover:text-zinc-100'}`}><Icon size={mobile ? 20 : 19} strokeWidth={active ? 2.4 : 2}/><span className="truncate">{label}</span></Link>;
  })}</>;
}

export function AppShell({children}:{children:React.ReactNode}) {
  return <div className="app-background mobile-safe-bottom min-h-screen">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-[#24262c] bg-[#0c0d10] px-4 py-5 md:flex md:flex-col">
      <Link href="/" className="mb-8 flex items-center gap-3 px-2" aria-label="UDG Basement home"><span className="grid h-10 w-10 place-items-center rounded-xl bg-neon text-black"><Music2 size={21}/></span><span className="leading-none"><span className="block text-lg font-black tracking-tight text-white">UDG</span><span className="block text-[11px] font-bold uppercase tracking-[.2em] text-zinc-500">Basement</span></span></Link>
      <nav className="space-y-1" aria-label="Primary navigation"><NavLinks/></nav>
      <button className="accent-button mt-6 min-h-11 rounded-xl px-4 text-sm font-black">Post a drop</button>
      <div className="mt-auto rounded-xl border border-[#292b31] bg-[#121317] p-4"><p className="eyebrow">Tonight in the scene</p><p className="mt-2 text-sm font-semibold leading-5 text-zinc-200">14 feedback reviews unlocked</p><p className="mt-1 text-xs leading-5 text-zinc-500">8 open verses · 23 new beats</p></div>
    </aside>
    <main className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-4 md:ml-64 md:grid-cols-[minmax(0,720px)] md:justify-center md:px-6 lg:grid-cols-[minmax(0,720px)_288px] lg:justify-start lg:gap-8 xl:ml-[calc(50%-720px)]">
      <section className="min-w-0 py-5 md:py-7">{children}</section>
      <aside className="sticky top-0 hidden h-screen py-7 lg:block"><div className="surface rounded-2xl p-4"><label className="flex items-center gap-2 rounded-lg border border-[#2b2d34] bg-[#0c0d10] px-3 py-2.5 text-sm text-zinc-500"><Search size={17}/><span>Search the scene</span></label><div className="mt-6 flex items-center justify-between"><h2 className="text-base font-black">Trending rooms</h2><span className="eyebrow">Live</span></div><div className="mt-3 space-y-1">{rooms.map((room, index) => <Link href="/discover" key={room} className="block rounded-lg px-3 py-3 transition hover:bg-[#1a1b20]"><span className="text-xs text-zinc-600">0{index + 1} · room</span><p className="mt-0.5 text-sm font-semibold text-zinc-200">#{room}</p></Link>)}</div></div></aside>
    </main>
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-[#292b31] bg-[#101115]/[.97] px-1 pb-[max(.45rem,env(safe-area-inset-bottom))] pt-1 backdrop-blur md:hidden" aria-label="Mobile navigation"><NavLinks mobile/></nav>
  </div>;
}

export function TopBar({title,subtitle}:{title:string;subtitle:string}) { return <header className="mb-6 flex items-start justify-between gap-4"><div className="min-w-0"><p className="eyebrow mb-1">UDG Basement</p><h1 className="text-3xl font-black tracking-[-.04em] text-white md:text-4xl">{title}</h1><p className="mt-1.5 max-w-xl text-sm leading-6 text-zinc-400 md:text-base">{subtitle}</p></div><div className="hidden shrink-0 gap-2 pt-1 sm:flex"><button className="icon-button" aria-label="View notifications"><Bell size={19}/></button><button className="icon-button" aria-label="View messages"><Mail size={19}/></button></div></header>; }
