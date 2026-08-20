export type CreatorRole = 'Artist' | 'Producer' | 'Songwriter' | 'Engineer' | 'DJ';
export type User = { id: string; displayName: string; username: string; avatar: string; banner: string; role: CreatorRole; verified?: boolean; location: string; bio: string; genres: string[]; followers: number; following: number; links: string[] };
export type Song = { id: string; userId: string; title: string; artist: string; coverArt: string; audioUrl?: string; duration: string; genre: string; description: string; tags: string[]; createdAt: string };
export type Post = { id: string; userId: string; body: string; type: 'text'|'music'|'triller'|'image'; createdAt: string; songId?: string; mediaUrl?: string; stats: { likes: number; comments: number; reposts: number; shares: number } };
export type FeatureListing = { id: string; userId: string; title: string; project: string; description: string; genre: string; price: string; paid: boolean; availability: string };
export type BeatListing = { id: string; userId: string; title: string; songId: string; bpm: number; musicalKey: string; price: string; licenseType: string; description: string };
export type FeedbackSubmission = { id: string; songId: string; userId: string; prompt: string; startSecond: number; requiredSeconds: number; responses: number; status: 'queued'|'reviewing'|'complete' };
