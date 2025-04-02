import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  // Create the animation string based on props.
  const animation = disabled ? "none" : `shine ${speed}s linear infinite`;

  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }
        `}
      </style>
      <div
        className={`text-[#b5b5b5a4] bg-clip-text inline-block ${className}`}
        style={{
          backgroundImage: `
                linear-gradient(120deg,
                rgba(255, 255, 255, 0) 40%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(255, 255, 255, 0) 60%)
            `,

          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animation: animation,
        }}
      >
        {text}
      </div>
    </>
  );
};
