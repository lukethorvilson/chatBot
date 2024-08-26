/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { openai } from "../api/OpenAI";

const tools = [
  {
    type: "function",
    function: {
      name: "get_date",
      description:
        "Get the current date for the user. Call this whenever you need to know the current date of today, for example when the user asks, 'What is the date today?'",
      parameters: {},
    },
  },
];

const getDate = function () {
  return new Date();
};

function useChatAI(chat) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState("");
  console.log(chat)
  useEffect(
    function () {
      async function generateCompletion() {
        try {
          setIsGenerating(true);
          const completion = await openai.chat.completions.create({
            messages: chat,
            model: "gpt-3.5-turbo",
            tools: tools,
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
