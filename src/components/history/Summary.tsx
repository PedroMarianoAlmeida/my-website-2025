import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { type IHistory } from "./historyData";

export const Summary = ({
  companyName,
  flag,
  companyLogo,
  techStack,
}: IHistory) => {
  return (
    <div className="flex justify-between w-full items-center px-2">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-md">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-xl hover:underline">{companyName}</div>
          <div className="flex items-center gap-1 mt-1 flex-wrap">
            {techStack.slice(0, 3).map((el) => (
              <Badge variant="secondary" key={el} className="rounded-4xl">
                {el}
              </Badge>
            ))}
            <Badge variant="secondary" className="rounded-4xl">
              ... and more
            </Badge>
          </div>
        </div>
      </div>
      <div>{flag}</div>
    </div>
  );
};
