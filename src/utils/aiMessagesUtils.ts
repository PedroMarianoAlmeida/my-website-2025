import { type CoreMessage } from "ai";

export const messageParsed = (message: string) => {
  const lines = message.split("\n");
  const errorLine = lines.find((line) => line.startsWith("3:"));
  if (errorLine)
    return {
      isValid: false,
      content: errorLine.slice(2).replace(/[^\w\s.,!?'-]/g, ""),
    };

  const rawParts = lines
    .filter((line) => line.startsWith("0:"))
    .map((line) => line.slice(2)); // remove '0:'

  const parsedParts = rawParts.map((part) => {
    try {
      return JSON.parse(part);
    } catch {
      return { isValid: false, content: "Error parsing the response" };
    }
  });
  const fullText = parsedParts.join("");
  const cleanText = fullText.replace(/[^\w\s.,!?'"-]/g, "");
  return { isValid: true, content: cleanText };
};

export const getLastUserMessages = (messages: CoreMessage[]): string[] => {
  const lastUserMessages: string[] = [];

  // Iterate from the last element backward
  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i];

    if (message.role !== "user") break;

    if (typeof message.content === "string") {
      lastUserMessages.unshift(message.content);
    }
  }

  return lastUserMessages;
};

export const getLastMessage = (messages: CoreMessage[]) => {
  const { role, content } = messages[messages.length - 1];
  if (role !== "user" || typeof content !== "string")
    throw Error("Not user message");
  return content;
};
