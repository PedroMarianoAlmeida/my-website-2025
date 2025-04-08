import { streamText, type CoreMessage } from "ai";
import { groq } from "@ai-sdk/groq";
import { z } from "zod";

import { asyncWrapper } from "@/utils/asyncWrapper";
import { chatSystemPrompt } from "@/db/professional-data";

export const checkQuestionSchema = z.object({ isValid: z.boolean() });

export const chatAi = async ({ messages }: { messages: CoreMessage[] }) => {
  return asyncWrapper(async () => {
    return streamText({
      model: groq("qwen-qwq-32b"),
      system: chatSystemPrompt,
      messages,
    });
  });
};
