import Image from "next/image";
import { ExternalLink, Briefcase, Calendar, Code } from "lucide-react";
import Link from "next/link";
import { ShinyText } from "@/components/react-bites/ShinyText";
import { Badge } from "@/components/ui/badge";

import { type IHistory } from "./index";

export const Summary = ({
  companyName,
  endDate,
  flag,
  jobTitle,
  startDate,
  companyUrl,
  companyLogo,
  techStack,
}: Pick<
  IHistory,
  | "companyName"
  | "jobTitle"
  | "endDate"
  | "flag"
  | "startDate"
  | "companyUrl"
  | "companyLogo"
  | "techStack"
>) => {
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
          <div className="flex items-center gap-1 mt-1">
            {techStack.map((el, index) => (
              // <Badge key={el} variant="secondary">
                <ShinyText key={el} text={el} />
              // </Badge>
            ))}
          </div>
        </div>
      </div>
      <div>{flag}</div>
    </div>
  );
};
