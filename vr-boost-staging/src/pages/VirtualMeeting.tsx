import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { meetings } from "../data/mockData";

const tabs = ["Upcoming", "Past", "Live", "Canceled"];

export default function VirtualMeeting() {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [cancelModal, setCancelModal] = useState(false);

  const grouped = meetings.reduce((acc, m) => {
    if (!acc[m.group]) acc[m.group] = [];
    acc[m.group].push(m);
    return acc;
  }, {} as Record<string, typeof meetings>);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Virtual Meeting</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 text-sm font-medium text-gray-600 hover:bg-white transition">
            Availability
          </button>
          <button className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition">
            + New meeting
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white/50 rounded-xl p-1 w-fit mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Meetings grouped */}
      <AnimatePresence mode="wait">
        {activeTab === "Upcoming" && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            {Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{group}</h2>
                <div className="flex flex-col gap-3">
                  {items.map((meeting, i) => (
                    <motion.div
                      key={meeting.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-4 flex items-center gap-4"
                    >
                      {/* Date */}
                      <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl w-14 h-14 flex-shrink-0">
                        <Calendar size={16} className="text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500 text-center leading-tight">{meeting.date.split(",")[0]}</span>
                      </div>

                      {/* Image */}
                      <img src={meeting.image} className="w-16 h-14 rounded-xl object-cover flex-shrink-0" />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock size={13} className="text-gray-400" />
                          <span className="text-xs text-gray-400">{meeting.date} — {meeting.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-gray-400" />
                          <p className="text-sm font-medium text-gray-700 truncate">{meeting.address}</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{meeting.client} · {meeting.clientEmail}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => setCancelModal(true)}
                          className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-500 hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-500 hover:bg-gray-50 transition">
                          Reschedule
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition">
                          Join meeting
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab !== "Upcoming" && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center justify-center h-48 bg-white/40 rounded-2xl"
          >
            <p className="text-gray-400 text-sm">No {activeTab.toLowerCase()} meetings</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cancel Modal */}
      <AnimatePresence>
        {cancelModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setCancelModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-6 w-[400px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Cancel Meeting</h2>
                <button onClick={() => setCancelModal(false)}>
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-6">Are you sure you want to cancel this meeting? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setCancelModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
                >
                  Keep Meeting
                </button>
                <button
                  onClick={() => setCancelModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
                >
                  Cancel Meeting
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}