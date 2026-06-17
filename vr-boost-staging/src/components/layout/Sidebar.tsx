import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Eye, Sofa, Video, Users, MessageCircle, X, Send, Menu } from "lucide-react";
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
            className="fixed bottom-16 right-4 w-72 md:w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col justify-between h-full py-4 px-3">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
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
    </div>
  );

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-5 left-4 z-[60] md:hidden bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-sm"
      >
        <Menu size={20} className="text-gray-700" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-[55] md:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white z-[60] md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
                <div className="flex flex-col leading-none">
                  <span className="text-lg tracking-tight text-gray-900">
                    <span className="font-extrabold">roche</span>
                    <span className="font-normal">bobois</span>
                  </span>
                  <span className="text-[8px] tracking-[0.35em] text-gray-500 uppercase mt-0.5">paris</span>
                </div>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-6 top-24 bottom-6 w-52 flex-col justify-between py-4 px-3 bg-white/30 backdrop-blur-sm rounded-2xl z-40">
        <SidebarContent />
      </aside>

      <ChatWidget />
    </>
  );
}