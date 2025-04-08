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

export const extractThinkingAndRegularMessage = (str: string) => {
  const openingTag = "think";
  const closingTag = "think";

  // Find the opening tag
  const startIndex = str.indexOf(openingTag);
  if (startIndex === -1) {
    // If the opening tag doesn't exist, you can decide how to handle this case.
    return { thinking: "", message: str };
  }

  // Calculate where the text inside <think> starts
  const textStart = startIndex + openingTag.length;

  // Look for the closing tag after the opening tag
  const endIndex = str.indexOf(closingTag, textStart);

  let thinking = "";
  let message = "";

  if (endIndex !== -1) {
    // If the closing tag is found, extract the inner text as "thinking"
    thinking = str.substring(textStart, endIndex);
    // And everything after the closing tag as "message"
    message = str.substring(endIndex + closingTag.length);
  } else {
    // If no closing tag is found, take all the content after the opening tag as "thinking"
    thinking = str.substring(textStart);
  }

  // Optionally trim extra whitespace from the results
  return {
    thinking: thinking.trim(),
    message: message.trim(),
  };
};
