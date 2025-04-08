import { type CoreMessage } from "ai";

export const messageParsed = (message: string) => {
  // Split the incoming stream message into lines
  const lines = message.split("\n");

  // Look for an error line that starts with "3:".
  const errorLine = lines.find((line) => line.startsWith("3:"));
  if (errorLine) {
    return {
      isValid: false,
      // Remove the prefix and clean the string from unwanted characters.
      content: errorLine.slice(2).replace(/[^\w\s.,!?'-]/g, ""),
    };
  }

  // Filter and process all lines that start with "0"
  const rawParts = lines
    .filter((line) => line.startsWith("0"))
    .map((line) => {
      // If the token is in the original (old) format "0:"
      if (line.startsWith("0:")) {
        return line.slice(2); // remove "0:"
      }
      // Otherwise, if it starts with "0" but not "0:" assume it's the new format
      return line.slice(1); // remove just the "0"
    });

  // Try to parse each part from JSON (assuming each token is a JSON string)
  // If JSON.parse fails, fallback to using the plain string.
  const parsedParts = rawParts.map((part) => {
    try {
      return JSON.parse(part);
    } catch {
      // You can either return the part raw or include an error flag/message here.
      return part;
    }
  });

  // Join all pieces into a full text message
  const fullText = parsedParts.join("");

  // Optionally, clean up any unwanted characters if needed.
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
