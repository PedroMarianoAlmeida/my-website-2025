import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Summary } from "./Summary";
export interface IHistory {
  companyName: string;
  flag: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  companyUrl: string;
  companyLogo: string;
}
const history: IHistory[] = [
  {
    companyName: "Solutions Medias 360",
    flag: "🇨🇦",
    jobTitle: "Software Engineer (Frontend)",
    startDate: "Feb 2024",
    endDate: "Present",
    companyUrl: "https://www.linkedin.com/company/solutions-medias-360/",
    companyLogo: "/history/sm360.jpeg",
  },
];

export const History = () => {
  return (
    <section className="container">
      <h2 className="text-center text-5xl">History</h2>

      <Accordion type="single" collapsible className="">
        {history.map(
          ({
            companyName,
            companyUrl,
            endDate,
            flag,
            jobTitle,
            startDate,
            companyLogo,
          }) => (
            <AccordionItem value="item-1" key={companyName}>
              <AccordionTrigger className="text-xl hover:no-underline">
                <Summary
                  companyName={companyName}
                  companyUrl={companyUrl}
                  endDate={endDate}
                  flag={flag}
                  jobTitle={jobTitle}
                  startDate={startDate}
                  companyLogo={companyLogo}
                />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </section>
  );
};
