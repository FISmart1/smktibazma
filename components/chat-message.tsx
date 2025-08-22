import React from "react";
import { Avatar } from "@nextui-org/react";
import { IconSend2 } from "@tabler/icons-react";
import { P } from "framer-motion/dist/types.d-Cjd591yU";

interface ChatMessageProps {
  message: {
    type: "user" | "ai";
    content: string;
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
      className={`flex items-start gap-3 mb-4 ${
        message.type === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.type === "ai" && (
        <p className="border border-blue-500 p-3 text-blue rounded-lg max-w-[70%]">
          BZM
        </p>
      )}
      <div
        className={`p-3 rounded-lg max-w-[70%] ${
          message.type === "user" ? "bg-primary text-background" : "bg-content2"
        }`}
      >
        {message.content}
      </div>
      {message.type === "user" && (
        <p className="border border-blue-500 p-3 text-blue rounded-lg max-w-[70%]">
          Kamu
        </p>
      )}
    </div>
  );
};
