import MessageList from "../../components/messages/MessageList";

export default function Messages() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold serif">Inbox</h1>
        <p className="text-gray-500">Manage inquiries from your customers.</p>
      </header>
      <hr />

      <MessageList />
    </div>
  );
}
