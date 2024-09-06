function ChatBody({ chat, response, isGenerating, error }) {
  console.log(response, isGenerating, error);
  return (
    <>
      <div className="font-body mx-auto h-[80%] w-[90%] overflow-auto rounded border-4 border-green-400 p-2">
        {!chat.length && (
          <div className="mt-8 block text-center text-lg opacity-35 md:text-xl">
            Begin chatting with ChatBot!
          </div>
        )}
        {chat.map((chatItem, i) => {
          if (chatItem.role === "user") {
            return (
              <div
                className="block h-fit w-full px-2 text-2xl font-semibold sm:text-xl mb-1"
                key={i}
              >
                <span className="mr-3 font-bold">You:</span>
                {`${chatItem.content}`}
              </div>
            );
          }
          if (chatItem.role === "assistant") {
            return (
              <div
                className="block h-fit w-full px-2 text-2xl sm:text-xl font-semibold mb-1"
                key={i}
              >🤖: {chatItem.content}</div>
            );
          }
        })}
        {error && (
          <div className="block h-fit w-full">
            <span className="text-red-500">calculations failed</span>
          </div>
        )}
        {isGenerating && (
          <div className="block h-fit w-full font-medium text-xl sm:text-2xl mb-1">
            ...calculating--bzzt-beep-boop 🤖💭
          </div>
        )}
        {response && !isGenerating && (
          <div className="block h-fit w-full px-2 text-2xl sm:text-xl font-semibold mb-1"><span className="mr-2">🤖:</span> {response.content}</div>
        )}
      </div>
    </>
  );
}

export default ChatBody;
