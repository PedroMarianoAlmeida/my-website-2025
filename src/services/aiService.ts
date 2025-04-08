import { streamText, type CoreMessage, generateObject } from "ai";
import { groq } from "@ai-sdk/groq";
import { z } from "zod";

import { asyncWrapper } from "@/utils/asyncWrapper";
import { getLastMessage } from "@/utils/aiMessagesUtils";
import { chatSystemPrompt } from "@/db/professional-data";

export const checkQuestionSchema = z.object({ isValid: z.boolean() });

export const chatAi = async ({ messages }: { messages: CoreMessage[] }) => {
  return asyncWrapper(async () => {
    const lastMessage = getLastMessage(messages);

    return streamText({
      model: groq("qwen-qwq-32b"),
      system: chatSystemPrompt,
      messages,
    });
  });
};
