import { useAuth } from "../../assets/contexts/AuthContext";
import { useContact } from "../../assets/contexts/ContactContext";
import { useProduct } from "../../assets/contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const { messages } = useContact();
  const { products } = useProduct();
  const unreadMessages = messages.filter((message) => !message.read).length;

  const stats = [
    {
      label: "Total Products",
      value: products.length,
      icon: "👗",
      color: "bg-blue-50",
    },
    {
      label: "New Messages",
      value: unreadMessages,
      icon: "✉️",
      color: "bg-green-50",
    },
    { label: "Store Status", value: "Open", icon: "🏪", color: "bg-yellow-50" },
    {
      label: "Monthly Traffic",
      value: "1.2k",
      icon: "📈",
      color: "bg-purple-50",
    },
  ];

  const quickActions = [
    { icon: "➕", label: "New Product", path: "/admin/products" },
    { icon: "📁", label: "Collections", path: "/admin/collections" },
    { icon: "🏷️", label: "Discounts", path: "/admin/products" },
    { icon: "✉️", label: "Messages", path: "/admin/messages" },
  ];

  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold serif">
          Welcome back, {user?.name.split(" ")[0]}
        </h1>
        <p className="text-gray-500">
          Here's what's happening at Luna Thread today.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} p-6 rounded-sm border border-gray-100 flex items-center gap-6`}
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 border border-gray-100 rounded-sm">
          <h2 className="text-xl font-bold serif mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: "New product added",
                time: "2 hours ago",
                detail: "Silk Midnight Slip",
              },
              {
                action: "Message received",
                time: "5 hours ago",
                detail: "From: Jane Doe",
              },
              {
                action: "Collection updated",
                time: "Yesterday",
                detail: "Summer 2025",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="text-sm font-semibold">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.detail}</p>
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-100 rounded-sm">
          <h2 className="text-xl font-bold serif mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <button
                onClick={() => navigate(action.path)}
                className="p-4 border border-gray-100 rounded-sm hover:bg-gray-50 text-left transition-colors"
              >
                <span className="block text-lg mb-2">{action.icon}</span>
                <span className="text-sm font-bold">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
