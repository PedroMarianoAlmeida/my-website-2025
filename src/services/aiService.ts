import { streamText, type CoreMessage } from "ai";
import { groq } from "@ai-sdk/groq";

import { asyncWrapper } from "@/utils/asyncWrapper";
import { systemPrompt } from "@/db/professional-data";

export const chatAboutTheBook = async ({
  messages,
}: {
  messages: CoreMessage[];
}) => {
  return asyncWrapper(async () => {
    // TODO: Add message on DB after finished
    return streamText({
      model: groq("llama3-8b-8192"),
      system: systemPrompt,
      messages,
    });
  });
};
