import { HeroSection } from "@/components/hero-section/index";
import { Stack } from "@/components/stack/index";
import { Numbers } from "@/components/Numbers";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <Stack />
      <Numbers />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
