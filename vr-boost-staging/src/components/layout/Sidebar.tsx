import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Eye, Sofa, Video, Users, MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Virtual visits", icon: Eye, path: "/virtual-visits" },
  { label: "Furniture Catalog", icon: Sofa, path: "/furniture" },
  { label: "Virtual Meeting", icon: Video, path: "/meetings", badge: 3 },
  { label: "Team", icon: Users, path: "/team" },
];

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
        >
          <MessageCircle size={20} className="text-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://i.pravatar.cc/32?img=11" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-white text-sm font-medium">Khadija Hraich</p>
                  <p className="text-green-400 text-xs">● Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={16} className="text-gray-400 hover:text-white" />
              </button>
            </div>
            <div className="p-4 h-48 flex flex-col justify-end gap-2">
              <div className="bg-gray-100 rounded-xl px-3 py-2 text-sm text-gray-700 self-start max-w-[80%]">
                Hi there! I'm Khadija, your go-to person for any support you need. What can I help you with?
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Can you help me?"
                className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-300"
              />
              <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Send size={14} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <aside className="fixed left-6 top-24 bottom-6 w-52 flex flex-col justify-between py-4 px-3 bg-white/30 backdrop-blur-sm rounded-2xl z-40">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition w-full text-left ${
                  active
                    ? "bg-white/80 text-gray-900 shadow-sm"
                    : "text-gray-500 hover:bg-white/50 hover:text-gray-700"
                }`}
              >
                <Icon size={18} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/60">
          <p className="text-xs text-gray-500 mb-3 leading-relaxed">
            Creating or adding new virtual visits couldn't be easier
          </p>
          <button className="w-full bg-gray-900 text-white text-sm font-medium py-2 rounded-xl hover:bg-gray-700 transition flex items-center justify-center gap-2">
            + New visit
          </button>
        </div>
      </aside>

      <ChatWidget />
    </>
  );
}