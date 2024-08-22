/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { openai } from "../api/OpenAI";

function useChatAI(input) {
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(function () {
    async function main() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
      setResponse(completion.choices[0]);
    }
    main();
  }, []);
  return [response];
}

export default useChatAI;
