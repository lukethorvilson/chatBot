import ChatBody from "./ChatBody";
import Input from "./Input";

function ChatBox() {
  return (
    <div className="w-full h-[560px] bg-gray-200">
      <ChatBody/>
      <Input/>
    </div>
  );
}

export default ChatBox;
