"use client";
import { useEffect, useState, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserRound } from "lucide-react";

import {
  messageParsed,
  extractThinkingAndRegularMessage,
} from "@/utils/aiMessagesUtils";

export const Chat = () => {
  const [messageId, setMessageId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, reload } = useChat({
    streamProtocol: "text",
    body: { messageId },
  });

  useEffect(() => {
    const now = new Date();
    setMessageId(now.toString());
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Card className="w-full max-w-3xl h-[80vh]">
        <CardHeader className="border-b">
          <CardTitle className="text-xl">Questions about my career?</CardTitle>
        </CardHeader>

        <CardContent className="p-4 h-110">
          <ScrollArea className="h-full">
            <div className="space-y-4">
              {messages.map((message) => {
                let messageTreated: { isValid: boolean; content: string };
                if (message.role === "user")
                  messageTreated = { isValid: true, content: message.content };
                else {
                  const messageWithThinking = messageParsed(message.content);
                  const { message: aiMessage } =
                    extractThinkingAndRegularMessage(
                      messageWithThinking.content
                    );
                  messageTreated = {
                    isValid: true,
                    content: aiMessage,
                  };
                }

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex gap-3 max-w-[80%] items-center ${
                        message.role === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      <Avatar className="h-8 w-8">
                        {message.role === "assistant" ? (
                          <AvatarFallback>🤖</AvatarFallback>
                        ) : (
                          <AvatarFallback>
                            <UserRound />
                          </AvatarFallback>
                        )}
                      </Avatar>

                      <div
                        className={`rounded-lg p-3 whitespace-pre-line flex gap-2 items-center ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        } ${messageTreated.isValid ? "" : "text-destructive"}`}
                      >
                        {messageTreated.content}
                        {!messageTreated.isValid && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => reload()}
                          >
                            Retry
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="border-t p-4 h-20">
          <form className="flex w-full gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
};
