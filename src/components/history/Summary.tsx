import Image from "next/image";
import { ExternalLink, Briefcase, Calendar, Code } from "lucide-react";
import Link from "next/link";

import { type IHistory } from "./index";

export const Summary = ({
  companyName,
  endDate,
  flag,
  jobTitle,
  startDate,
  companyUrl,
  companyLogo,
}: Pick<
  IHistory,
  | "companyName"
  | "jobTitle"
  | "endDate"
  | "flag"
  | "startDate"
  | "companyUrl"
  | "companyLogo"
>) => {
  return (
    <div className="flex justify-between w-full items-center px-2">
      <div className="flex items-center gap-4 hover:underline">
        <div className="relative h-16 w-16 overflow-hidden rounded-md">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-xl">{companyName}</div>
          <div className="flex items-center gap-1 mt-1">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{jobTitle}</span>
          </div>
        </div>
      </div>
      <div>{flag}</div>
    </div>
  );
};
