import ChatBody from "./ChatBody";
import Input from "./Input";

function ChatBox() {
  return (
    <div className="w-full h-[80svh] bg-gray-200">
      <ChatBody/>
      <Input/>
    </div>
  );
}

export default ChatBox;
