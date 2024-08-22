import { useState } from "react";

const placeholders = [
  "Whats the date today?",
  "How many days until New Years?",
  "What programming language is the most popular?",
  "Hi Chatbot!",
];

function Input() {
  const [userInput, setUserInput] = useState("");
  function randomPlaceholder() {
    const random = Math.floor(Math.random() * 4);
    return placeholders[random];
  }
  return (
    <>
      <div className="flex h-16 w-full content-center gap-4 bg-gray-200 py-2 pl-6">
        <input
          className="h-[80%] w-[85%] rounded-3xl border-2 border-green-700 bg-gray-200 px-4 text-[14px] focus:border-2 focus:border-green-700 focus:ring-4 focus:ring-green-500"
          placeholder={randomPlaceholder()}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button className="h-[70%] w-[8%] rounded-3xl bg-green-500 text-white transition-colors hover:bg-green-600">
          Send
        </button>
      </div>
    </>
  );
}

export default Input;
