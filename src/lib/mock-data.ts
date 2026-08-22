import type { BeatListing, FeatureListing, FeedbackSubmission, Post, Song, User } from './types';
export const users: User[] = [
 {id:'u1',displayName:'Maya Sol',username:'mayasol',avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',banner:'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&h=400&fit=crop',role:'Artist',verified:true,location:'Atlanta, GA',bio:'Alt-R&B vocals, late-night hooks, building songs from voice notes and basslines.',genres:['R&B','Alt Pop','Soul'],followers:12840,following:418,links:['mayasol.fm','instagram.com/mayasol']},
 {id:'u2',displayName:'Noah Circuit',username:'circuitnoah',avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',banner:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=400&fit=crop',role:'Producer',location:'Brooklyn, NY',bio:'Producer making dusty drums, shiny chords, and room for honest verses.',genres:['Hip-Hop','Neo Soul','Trap'],followers:8200,following:650,links:['beatstore.local/circuit']},
 {id:'u3',displayName:'Juno Vale',username:'junovale',avatar:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',banner:'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=400&fit=crop',role:'Songwriter',location:'Los Angeles, CA',bio:'Topline writer. I help turn loops into choruses people remember.',genres:['Pop','Dance','Indie'],followers:5401,following:320,links:['junowrites.co']},
 {id:'u4',displayName:'Kofi Wave',username:'kofiwave',avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',banner:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop',role:'DJ',location:'Chicago, IL',bio:'DJ, curator, and connector. Send records that move a room.',genres:['Afrobeats','House','Amapiano'],followers:23100,following:912,links:['mixcloud.com/kofiwave']},
 {id:'u5',displayName:'Eden Afterhours',username:'eden_afterhours_longform',avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',banner:'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&h=400&fit=crop',role:'Engineer',location:'London, UK',bio:'Mix engineer for dense arrangements, strange transitions, and vocals that need a little air.',genres:['Electronic','R&B','Ambient'],followers:1930,following:286,links:['edenafterhours.audio']}
];
export const songs: Song[] = [
 {id:'s1',userId:'u1',title:'Velvet Exit',artist:'Maya Sol',coverArt:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',duration:'2:48',genre:'Alt R&B',description:'A hook-first demo with warm guitars and heavy pocket.',tags:['demo','hook','rnb'],createdAt:'2026-08-18'},
 {id:'s2',userId:'u2',title:'Subway Bloom',artist:'Noah Circuit',coverArt:'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',duration:'3:12',genre:'Hip-Hop',description:'Boom-bap bounce with a bright bridge section.',tags:['beat','90bpm','soul'],createdAt:'2026-08-17'},
 {id:'s3',userId:'u3',title:'Static Hearts',artist:'Juno Vale',coverArt:'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',duration:'2:21',genre:'Pop',description:'Topline idea for a late summer chorus.',tags:['topline','pop'],createdAt:'2026-08-16'},
 {id:'s4',userId:'u5',title:'Notes Left on the Studio Floor at 4:17 AM',artist:'Eden Afterhours',coverArt:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',duration:'4:07',genre:'Electronic soul',description:'A deliberately long title for responsive music metadata testing.',tags:['mix','ambient'],createdAt:'2026-08-15'}
];
export const posts: Post[] = [
 {id:'p1',userId:'u1',body:'new snippet 👀 trying to decide if the bridge should stay stripped or bring the drums back early.',type:'music',songId:'s1',createdAt:'12m',stats:{likes:342,comments:48,reposts:21,shares:14}},
 {id:'p2',userId:'u2',body:'who wants to collab? left 16 bars open after the second hook. melodic rappers + spoken word people welcome.',type:'triller',songId:'s2',mediaUrl:'studio clip',createdAt:'38m',stats:{likes:205,comments:31,reposts:44,shares:9}},
 {id:'p3',userId:'u4',body:'Building a Friday playlist for independent dance records. Drop your cleanest mix — I’m looking for bounce, not algorithms.',type:'text',createdAt:'1h',stats:{likes:501,comments:83,reposts:67,shares:22}},
 {id:'p4',userId:'u5',body:'Long-form layout check: I spent all night tightening the low end on a song that moves from a whispered verse into a huge chorus. Producers and writers: when a demo has a great feeling but the arrangement is crowded, what is the first thing you remove?',type:'music',songId:'s4',createdAt:'2h',stats:{likes:94,comments:19,reposts:8,shares:6}}
];
export const features: FeatureListing[] = [
 {id:'f1',userId:'u1',title:'Looking for a melodic feature',project:'Velvet Exit remix',description:'Need a contrasting second verse with airy harmonies. Remote session is fine.',genre:'Alt R&B',price:'$150–$300',paid:true,availability:'Open this week'},
 {id:'f2',userId:'u3',title:'Open verse available',project:'Static Hearts',description:'Pop writer seeking rapper for a 24-second bridge response.',genre:'Pop/Rap',price:'Free split discussion',paid:false,availability:'2 slots'}
];
export const beats: BeatListing[] = [
 {id:'b1',userId:'u2',title:'Subway Bloom',songId:'s2',bpm:92,musicalKey:'F minor',price:'$75 lease',licenseType:'MP3/WAV lease',description:'Dusty drums, Rhodes chords, hook pocket already carved out.'}
];
export const feedback: FeedbackSubmission[] = [
 {id:'fb1',songId:'s3',userId:'u3',prompt:'Does the chorus lift enough after the pre? Be honest about the first 20 seconds.',startSecond:42,requiredSeconds:20,responses:18,status:'reviewing'},
 {id:'fb2',songId:'s1',userId:'u1',prompt:'Need notes on vocal tone and whether the intro feels too long.',startSecond:12,requiredSeconds:20,responses:27,status:'queued'}
];
export const getUser=(id:string)=>users.find(u=>u.id===id)!; export const getSong=(id?:string)=>songs.find(s=>s.id===id);
