import { streamText, type CoreMessage, generateObject } from "ai";
import { groq } from "@ai-sdk/groq";
import { z } from "zod";

import { asyncWrapper } from "@/utils/asyncWrapper";
import { getLastMessage } from "@/utils/aiMessagesUtils";
import { chatSystemPrompt, validQuestionPrompt } from "@/db/professional-data";

export const checkQuestionSchema = z.object({ isValid: z.boolean() });
type CheckQuestion = z.infer<typeof checkQuestionSchema>;

const checkQuestion = (question: string) => {
  return asyncWrapper(async () => {
    const res = await generateObject({
      model: groq("llama3-8b-8192"),
      schema: checkQuestionSchema,
      system: validQuestionPrompt,
      prompt: question,
    });
    const resTreated: CheckQuestion = res.object;
    return resTreated.isValid;
  });
};

export const chatAi = async ({ messages }: { messages: CoreMessage[] }) => {
  return asyncWrapper(async () => {
    const lastMessage = getLastMessage(messages);

    const isValidQuestion = await checkQuestion(lastMessage);
    if (!isValidQuestion.success) throw Error("Error checking question");
    if (!isValidQuestion.result) {
      throw Error("Invalid question");
    }

    return streamText({
      model: groq("llama3-8b-8192"),
      system: chatSystemPrompt,
      messages,
    });
  });
};
