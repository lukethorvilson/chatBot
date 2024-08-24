/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { openai } from "../api/OpenAI";

function useChatAI(chat, setChat) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState("");
  const [isTimedOut, setIsTimedOut] = useState(false);
  useEffect(
    function () {
      let timeoutId;
      async function generateCompletion() {
        // so not too many requests are made in development
        if (!isTimedOut && chat.length) {
          try {
            setIsGenerating(true);
            setIsTimedOut(true);
            console.log("Chat timeout started");
            timeoutId = setTimeout(() => {
              setIsTimedOut(false);
              console.log("Chat timeout ended.");
            }, 10000);
            const completion = await openai.chat.completions.create({
              messages: chat,
              model: "gpt-3.5-turbo",
            });
            setResponse(completion.choices[0].message);
            setIsGenerating(false);
          } catch (err) {
            setIsGenerating(false);
            setError(`Chatbot Error: ${err.message}`);
          }
        }
      }
      if (chat.length > 0 && chat[chat.length - 1]?.role === "user") {
        generateCompletion();
      }
      return () => {
        if(timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    },
    [chat],
  );
  return [response,setResponse, isGenerating, error];
}

export default useChatAI;
