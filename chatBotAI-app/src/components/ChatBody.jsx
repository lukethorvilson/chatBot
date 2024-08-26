function ChatBody({ chat, response, isGenerating, error }) {
  console.log(response, isGenerating, error);
  return (
    <>
      <div className="h-[80%] mx-auto w-[90%] overflow-auto rounded border-4 border-green-400">
        {chat.map((chatItem, i) => (
          <div className="block h-fit w-full" key={i}>
            {chatItem.role === "user"
              ? `You: ${chatItem.content}`
              : `🤖: ${chatItem.content}`}
          </div>
        ))}
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
          <div className="block h-fit w-full">🤖: {response.content}</div>
        )}
      </div>
    </>
  );
}

export default ChatBody;
