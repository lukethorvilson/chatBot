function ChatBody({ chat, response, isGenerating, error }) {
  console.log(response, isGenerating, error)
  return (
    <>
      <div className="grid h-fit w-full grid-cols-1">
        {chat.map((chatItem, i) => <div key={i}>{chatItem.role === "user" ? `You: ${chatItem.content}` : `🤖: ${chatItem.content}`}</div>)}
        {error && <div><span className="text-red-500">calculations failed</span></div>}
        {isGenerating && <div>...calculating bzzt-beep-boop🤖💭</div>}
        {response && !isGenerating && <div>🤖: {response.content}</div>}
      </div>
    </>
  );
}

export default ChatBody;
