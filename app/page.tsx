import HeroSection from '@/components/sections/HeroSection';
import MemoryTimeline from '@/components/sections/MemoryTimeline';
import CourtSection from '@/components/sections/CourtSection';
import PadrinosSection from '@/components/sections/PadrinosSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MemoryTimeline />
      <CourtSection />
      <PadrinosSection />
      {/* ProgramSection   — coming soon */}
      {/* ClosingScene     — coming soon */}
    </main>
  );
}
