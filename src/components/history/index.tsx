import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Summary } from "./Summary";
import { JobDescription } from "./JobDescription";
import { history } from "./historyData";

export const History = () => {
  return (
    <section className="container">
      <h2 className="text-center text-5xl">History</h2>

      <Accordion type="single" defaultValue={history[0].companyName}>
        {history.map((jobItem) => (
          <AccordionItem value={jobItem.companyName} key={jobItem.companyName}>
            <AccordionTrigger className="text-xl hover:no-underline">
              <Summary {...jobItem} />
            </AccordionTrigger>
            <AccordionContent>
              <JobDescription {...jobItem} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
