import { useState } from "react";
import ChatBody from "./ChatBody";
import Input from "./Input";
import useChatAI from "../hooks/useChatAI";

function ChatBox() {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse, isGenerating, error] = useChatAI(chat, setChat);

  function handleSubmitUserInput(e) {
    e.preventDefault();
    // if theres no response must be the first message of the chat so dont include an empty string
    if (response) {
      setChat((prev) => [
        ...prev,
        response,
        { role: "user", content: userInput },
      ]);
      setResponse("")
    } else {
      setChat((prev) => [...prev, { role: "user", content: userInput }]);
    }
    
    setUserInput("");
  }
  return (
    <div className="h-[90svh] w-full bg-gray-200 pt-3">
      <ChatBody
        chat={chat}
        response={response}
        isGenerating={isGenerating}
        error={error}
      />
      <Input
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmitUserInput}
      />
    </div>
  );
}

export default ChatBox;
