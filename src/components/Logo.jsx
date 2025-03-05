import Link from "next/link";
import { FuzzyText } from "./react-bites/FuzzyText";
export const Logo = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/pedroprogrammer/"
      target="__blank"
      rel="noopener noreferrer"
    >
      <div className="w-full fixed top-0 md:top-4 left-1/2 -translate-x-1/2 flex md:justify-start justify-center items-center h-8">
        <div className="w-72 h-8 bg-black flex justify-center items-center">
          <FuzzyText
            enableHover={false}
            baseIntensity={1.5}
            animationDuration={400}
            idleDuration={2000}
          >
            {"< "}Pedro Programmer{" />"}
          </FuzzyText>
        </div>
      </div>
      <div className="h-8 md:hidden block w-full " />
    </Link>
  );
};
