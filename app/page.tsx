import HeroSection from '@/components/sections/HeroSection';
import MemoryTimeline from '@/components/sections/MemoryTimeline';
import CourtSection from '@/components/sections/CourtSection';
import PadrinosSection from '@/components/sections/PadrinosSection';
import ProgramSection from '@/components/sections/ProgramSection';
import ClosingScene from '@/components/sections/ClosingScene';
import ParentsSection from '@/components/sections/ParentsSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MemoryTimeline />
      <CourtSection />
      <ParentsSection />
      <PadrinosSection />
      <ProgramSection />
      <ClosingScene />
      <Footer />
    </main>
  );
}
