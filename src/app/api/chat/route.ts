import { chatAi } from "@/services/aiService";
import { messageParsed, getLastUserMessages } from "@/utils/aiMessagesUtils";
import { saveChat } from "@/services/dbService";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, messageId } = await req.json();
  const chat = await chatAi({ messages });
  if (!chat.success) {
    if (chat.message === "Invalid question") {
      const lastMessages = getLastUserMessages(messages);
      const lastMessage = lastMessages[lastMessages.length - 1];
      saveChat({
        id: messageId,
        messages: [`Invalid - ${lastMessage}`],
      });
    }
    return new Response(
      JSON.stringify({ error: chat.message || "Something went wrong" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Get the underlying ReadableStream from the Response.
  const originalResponse = chat.result.toDataStreamResponse({
    sendUsage: false,
  });
  const originalStream = originalResponse.body;
  if (!originalStream) {
    return new Response("No stream available", { status: 500 });
  }

  // Split the stream into two: one for the client and one for capturing the data.
  const [clientStream, bufferStream] = originalStream.tee();

  // Consume the buffer stream in the background to accumulate all chunks.
  (async () => {
    const reader = bufferStream.getReader();
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    // Combine all chunks into a single Uint8Array.
    const fullArray = chunks.reduce((acc, chunk) => {
      const combined = new Uint8Array(acc.length + chunk.length);
      combined.set(acc);
      combined.set(chunk, acc.length);
      return combined;
    }, new Uint8Array());
    const fullResponse = new TextDecoder().decode(fullArray);
    const newUserMessages = getLastUserMessages(messages);
    const newSystemMessageTreated = messageParsed(fullResponse).content;
    saveChat({
      id: messageId,
      messages: [...newUserMessages, newSystemMessageTreated],
    });
  })();

  // Return the response using the client branch of the stream.
  return new Response(clientStream, {
    headers: { "Content-Type": "application/json" },
  });
}
