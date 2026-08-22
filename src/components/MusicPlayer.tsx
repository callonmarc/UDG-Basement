import { Play } from 'lucide-react';
import type { Song } from '@/lib/types';

export function MusicPlayer({song, compact = false}:{song:Song;compact?:boolean}) {
  return <div className={`muted-surface ${compact ? 'p-3' : 'p-3.5'} border-l-2 border-l-[#d6f24a]`}>
    <div className="flex min-w-0 items-center gap-3">
      <img src={song.coverArt} alt={`${song.title} cover art`} className={`${compact ? 'h-12 w-12' : 'h-14 w-14 sm:h-16 sm:w-16'} shrink-0 border border-[#4a4b43] object-cover`} />
      <button className="grid h-10 w-10 shrink-0 place-items-center bg-neon text-black transition hover:scale-105" aria-label={`Play ${song.title}`}><Play size={18} fill="currentColor" /></button>
      <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-zinc-100">{song.title}</p><p className="mt-0.5 truncate text-xs text-zinc-500">{song.artist} <span aria-hidden="true">·</span> {song.genre}</p><div className="mt-2.5 flex items-center gap-2"><div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-[#303239]"><div className="h-full w-2/5 rounded-full bg-neon" /></div><span className="shrink-0 text-[11px] tabular-nums text-zinc-500">{song.duration}</span></div></div>
    </div>
  </div>;
}
