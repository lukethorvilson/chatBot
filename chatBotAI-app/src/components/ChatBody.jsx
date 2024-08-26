function ChatBody({ chat, response, isGenerating, error }) {
  console.log(response, isGenerating, error);
  return (
    <>
      <div className="mx-auto h-[80%] w-[90%] overflow-auto rounded border-4 border-green-400">
        {!chat.length && (
          <div className="mt-8 block text-center text-lg opacity-35 md:text-xl">
            Begin chatting with ChatBot!
          </div>
        )}
        {chat.map((chatItem, i) => {
          if (chatItem.role === "user") {
            return (
              <div
                className="block px-2 h-fit w-full"
                key={i}
              >{`You: ${chatItem.content}`}</div>
            );
          }
          if (chatItem.role === "assistant") {
            return (
              <div
                className="block px-2 h-fit w-full"
                key={i}
              >{`🤖: ${chatItem.content}`}</div>
            );
          }
        })}
        {error && (
          <div className="block h-fit w-full">
            <span className="text-red-500">calculations failed</span>
          </div>
        )}
        {isGenerating && (
          <div className="block h-fit w-full">
            ...calculating bzzt-beep-boop🤖💭
          </div>
        )}
        {response && !isGenerating && (
          <div className="block px-2 h-fit w-full">🤖: {response.content}</div>
        )}
      </div>
    </>
  );
}

export default ChatBody;
