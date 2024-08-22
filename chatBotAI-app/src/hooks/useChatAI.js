/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { openai } from "../api/OpenAI";

function useChatAI(chat, setChat) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {

      async function main() {
        try {
          setIsGenerating(true);
          const completion = await openai.chat.completions.create({
            messages: chat,
            model: "gpt-3.5-turbo",
          });
          ///////// TO DO ///////////////////////
          //what we can do here is create a response state that holds the most recent
          //response until another chat is sent then push the response to the chat, clear it, and then push the chat as well
          //so the ai will be updated by the most recent system responses 
          setChat(prev => [...prev, completion.choices[0].message]);
          setIsGenerating(false);
        } catch (err) {
          setIsGenerating(false);
          setError(`Chatbot Error: ${err.message}`);
        }
      }
      if (chat[chat.length-1]?.role === "user" || chat.length) {
        main();
      }
    },
    [chat, setChat],
  );
  return [isGenerating, error];
}

export default useChatAI;
