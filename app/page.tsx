import HeroSection from '@/components/sections/HeroSection';
import MemoryTimeline from '@/components/sections/MemoryTimeline';
import CourtSection from '@/components/sections/CourtSection';
import PadrinosSection from '@/components/sections/PadrinosSection';
import ProgramSection from '@/components/sections/ProgramSection';
import ClosingScene from '@/components/sections/ClosingScene';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MemoryTimeline />
      <CourtSection />
      <PadrinosSection />
      <ProgramSection />
      <ClosingScene />
    </main>
  );
}
