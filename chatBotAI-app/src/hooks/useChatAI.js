/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { openai } from "../api/OpenAI";

function useChatAI(chat) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState("");
  console.log(chat)
  console.log(response)
  useEffect(
    function () {
      async function generateCompletion() {
        try {
          setIsGenerating(true);
          const completion = await openai.chat.completions.create({
            messages: chat,
            model: "gpt-3.5-turbo",
          });
          // set response to display to the user
          setResponse(completion.choices[0].message);
          setIsGenerating(false);
        } catch (err) {
          setIsGenerating(false);
          setError(`Chatbot Error: ${err.message}`);
        }
      }
      // handle if the effect should be ran again based on if the chat was a tool response or user and is not empty chat
      if (chat.length > 0 && chat[chat.length - 1]?.role === "user") {
        generateCompletion();
      }
    },
    [chat],
  );
  return [response, setResponse, isGenerating, error];
}

export default useChatAI;
