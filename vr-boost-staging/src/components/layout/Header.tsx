import { useState } from "react";
import { Mail, Bell, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { messages, notifications } from "../../data/mockData";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAppearanceModal, setShowAppearanceModal] = useState(false);

  const toggle = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-4">
  <header className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm px-4 md:px-6 h-16 flex items-center justify-between pl-14 md:pl-6">
  {/* Logo — centered f mobile */}
  <div className="flex-1 flex justify-center md:justify-start">
    <div className="flex flex-col items-center md:items-start leading-none">
      <div className="text-xl tracking-tight text-gray-900">
        <span className="font-extrabold">roche</span>
        <span className="font-normal">bobois</span>
      </div>
      <span className="text-[8px] tracking-[0.35em] text-gray-500 uppercase mt-0.5 pl-4">paris</span>
    </div>
  </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 relative">

            {/* Mail */}
            <div className="relative">
              <button onClick={() => toggle("mail")} className="p-2 rounded-xl hover:bg-gray-100 transition">
                <Mail size={20} className="text-gray-400" strokeWidth={1.5}/>
              </button>
              <AnimatePresence>
                {openDropdown === "mail" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden" animate="visible" exit="exit"
                    className="absolute right-0 top-11 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 z-50"
                  >
                    <p className="font-semibold text-gray-800 mb-3">Messages</p>
                    {messages.map((m) => (
                      <div key={m.id} className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-xl px-2 cursor-pointer">
                        <img src={m.avatar} className="w-8 h-8 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800">{m.sender}</p>
                          <p className="text-xs text-gray-400 truncate">{m.preview}</p>
                        </div>
                        <span className="text-xs text-gray-400">{m.time}</span>
                        {m.unread && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bell */}
            <div className="relative">
              <button onClick={() => toggle("bell")} className="p-2 rounded-xl hover:bg-gray-100 transition relative">
                <Bell size={20} className="text-gray-400" strokeWidth={1.5} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
              </button>
              <AnimatePresence>
                {openDropdown === "bell" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden" animate="visible" exit="exit"
                    className="absolute right-0 top-11 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 z-50"
                  >
                    <p className="font-semibold text-gray-800 mb-3">Notifications</p>
                    {notifications.map((n) => (
                      <div key={n.id} className="flex items-start gap-3 py-2 px-2 rounded-xl cursor-pointer hover:bg-gray-50">
                        <img src={n.image} className="w-8 h-8 rounded-full mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">{n.text}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                        </div>
                        {n.unread && <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Avatar */}
            <div className="relative">
              <button onClick={() => toggle("account")} className="flex items-center gap-1.5 px-2 py-1 rounded-xl hover:bg-gray-100 transition">
  <img src="https://i.pravatar.cc/32?img=7" className="w-8 h-8 rounded-full" />
  <div className="text-left hidden sm:block">
    <p className="text-sm font-semibold text-gray-800 leading-tight">Ali Hraich</p>
    <p className="text-xs text-gray-400">Admin</p>
  </div>
  <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
</button>
              <AnimatePresence>
                {openDropdown === "account" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden" animate="visible" exit="exit"
                    className="absolute right-0 top-12 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-2 z-50"
                  >
                    {["Manage subscription", "Statistics", "Appearance", "Settings", "Help"].map((item) => (
                      <button
                        key={item}
                        onClick={() => item === "Appearance" && setShowAppearanceModal(true)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition"
                      >
                        {item}
                      </button>
                    ))}
                    <hr className="my-1 border-gray-100" />
                    <button className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition">
                      Log out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </header>
      </div>

      {/* Appearance Modal */}
      <AnimatePresence>
        {showAppearanceModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setShowAppearanceModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-6 w-[480px] max-w-[90vw]"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Appearance</h2>
                <button onClick={() => setShowAppearanceModal(false)}>
                  <X size={20} className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Brand Logo</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center text-sm text-gray-400 cursor-pointer hover:border-blue-300 transition">
                    Click to upload logo
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 block mb-1">Primary Color</label>
                    <input type="color" defaultValue="#111827" className="w-full h-10 rounded-lg cursor-pointer border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 block mb-1">Secondary Color</label>
                    <input type="color" defaultValue="#3B82F6" className="w-full h-10 rounded-lg cursor-pointer border border-gray-200" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Font</label>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700">
                    <option>Poppins</option>
                    <option>Inter</option>
                    <option>Roboto</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Website Domain</label>
                  <input type="text" placeholder="yoursite.com" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400" />
                </div>
              </div>
              <button className="mt-6 w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition">
                Save Changes
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}