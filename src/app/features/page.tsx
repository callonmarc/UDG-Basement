import { TopBar } from '@/components/AppShell'; import { FeatureCard } from '@/components/Marketplace'; import { features } from '@/lib/mock-data';
export default function Features(){return <><TopBar title="Features" subtitle="Open verses, collab calls, and paid/free feature opportunities."/><div className="grid gap-4 lg:grid-cols-2">{features.map(f=><FeatureCard key={f.id} item={f}/>)}</div></>}
