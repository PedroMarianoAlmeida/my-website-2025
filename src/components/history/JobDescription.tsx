import { type IHistory } from "./historyData";
import { ExternalLink, Briefcase, Calendar, Code } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const JobDescription = ({
  activities,
  companySummary,
  jobSummary,
  startDate,
  endDate,
  techStack,
  jobTitle,
}: IHistory) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex items-center gap-2">
        <Briefcase className="h-4 w-4" />
        <span className="text-xl">{jobTitle}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span className="text-xl">
          {startDate} - {endDate}
        </span>
      </div>
      <div className="flex gap-1">
        <div className="font-bold">Company:</div>
        <div>{companySummary}</div>
      </div>
      <div className="flex gap-1">
        <div className="font-bold">Job:</div>
        <div>{jobSummary}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold">Activities:</div>
        <ul className="list-disc list-inside space-y-1">
          {activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-bold">Complete Stack:</span>
        <div className="flex items-center gap-1 flex-wrap">
          {techStack.map((el) => (
            <Badge variant="secondary" key={el} className="rounded-4xl">
              {el}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
