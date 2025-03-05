import { EarthScene } from "./EarthScene";
import { TrueFocus } from "./../react-bites/TrueFocus";

export const HeroSection = () => {
  return (
    <section className="flex my-4 gap-10 flex-col md:flex-row">
      <EarthScene
        size={400}
        spinSpeed={0.0005}
        className="flex w-full md:w-auto"
      />
      <TrueFocus
        sentences={["From LATAM", "to the World"]}
        manualMode={false}
        blurAmount={10}
        borderColor="#305979"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </section>
  );
};
