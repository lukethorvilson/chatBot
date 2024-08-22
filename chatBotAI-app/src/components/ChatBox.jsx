import { useState } from "react";
import ChatBody from "./ChatBody";
import Input from "./Input";
import useChatAI from "../hooks/useChatAI";

function ChatBox() {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isGenerating, error] = useChatAI(chat, setChat);
  function handleSubmitUserInput(e) {
    e.preventDefault();
    setChat((prev) => [...prev, { role: "user", content: userInput }]);
    setUserInput("");
  }
  return (
    <div className="h-[90svh] w-full pl-5 pt-3 bg-gray-200">
      <ChatBody chat={chat} />
      <Input
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmitUserInput}
      />
    </div>
  );
}

export default ChatBox;
