import React from "react";
import { Input, Button, Card, CardBody, ScrollShadow } from "@nextui-org/react";

import { IconSend2 } from "@tabler/icons-react";
import { ChatMessage } from "./chat-message";
import { useSchoolAI } from "../app/hooks/use-school-ai";

export default function App() {
  const [input, setInput] = React.useState("");
  const { messages, sendMessage } = useSchoolAI();

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-3xl h-[580px] flex flex-col p-5">
        <CardBody className="flex flex-col h-full">
          <h1 className="text-xl font-bold mb-6 text-center">Tanya ke Bazma Ai</h1>
          <ScrollShadow className="flex-grow mb-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </ScrollShadow>
          <div className="flex gap-2">
            <Input
              fullWidth
              placeholder="Tanya bazma Ai..."
              value={input}
              onChange={(e) => setInput(e.target.value)} // ✅ benar
              onKeyDown={(e) => e.key === "Enter" && handleSend()} // pakai onKeyDown biar lebih aman
            />

            <Button color="primary" isIconOnly onClick={handleSend}>
              <IconSend2 size={20} />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
