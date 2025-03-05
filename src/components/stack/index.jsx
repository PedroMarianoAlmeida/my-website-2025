import { RotatingText } from "./../react-bites/RotatingText";
import { stackArray } from "./stackArray";

export const Stack = () => {
  return (
    <section>
      <div className="flex gap-2 items-center text-2xl">
        I am{" "}
        <b className="font-mono">
          {"<"}Pedro Almeida{"/>"}
        </b>
        , and I work with{" "}
        <RotatingText
          texts={stackArray}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[#66ccff] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-60"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </section>
  );
};
