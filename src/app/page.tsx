import { HeroSection } from "@/components/hero-section/index";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
