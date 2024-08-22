function ChatBody({ chat }) {
  console.log(chat);
  const chatStyles = {
    width: "90%",
    height: "fit-content",
    marginLeft: "5",
    fontFamily: "system-ui",
  };
  return (
    <>
      <div className="grid h-fit w-full grid-cols-1">
        <div style={chatStyles}>Some new chat value</div>
        <div style={chatStyles}>Another chat value</div>
      </div>
    </>
  );
}

export default ChatBody;
