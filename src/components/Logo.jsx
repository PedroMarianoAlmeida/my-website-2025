import Link from "next/link";
import { FuzzyText } from "./react-bites/FuzzyText";
export const Logo = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/pedroprogrammer/"
      target="__blank"
      rel="noopener noreferrer"
    >
      <div className="w-72 fixed top-4 left-4">
        <FuzzyText
          enableHover={false}
          baseIntensity={1.5}
          animationDuration={400}
          idleDuration={2000}
        >
          {"< "}Pedro Programmer{" />"}
        </FuzzyText>
      </div>
    </Link>
  );
};
