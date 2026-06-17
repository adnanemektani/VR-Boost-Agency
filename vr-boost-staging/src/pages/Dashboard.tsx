import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Sofa, Calendar, MapPin, MoreHorizontal, ExternalLink } from "lucide-react";
import { visits } from "../data/mockData";

const statsCards = [
  { label: "Approved Visits", value: 3, icon: CheckCircle, path: "/virtual-visits?filter=completed" },
  { label: "Active virtual visits", value: 12, icon: Briefcase, path: "/virtual-visits?filter=active" },
  { label: "Furniture catalog", value: 654, icon: Sofa, path: "/furniture" },
  { label: "Upcoming meetings", value: 12, icon: Calendar, path: "/meetings" },
];

const statusConfig = {
  "not-started": { label: "Not Started", color: "bg-gray-100 text-gray-500", dot: "bg-gray-400" },
  "pending": { label: "Pending", color: "bg-orange-100 text-orange-500", dot: "bg-orange-400" },
  "completed": { label: "Completed", color: "bg-green-100 text-green-600", dot: "bg-green-500" },
};

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Welcome */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome Back !</h1>
        <p className="text-sm text-gray-400 mt-1">
          Let's make your customers' dream homes a reality, one 3D visualization at a time.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {statsCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(card.path)}
              className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-2 cursor-pointer hover:shadow-md hover:bg-white/90 transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 font-medium">{card.label}</span>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-gray-500 transition" />
              </div>
              <div className="flex items-center gap-3">
                <Icon size={24} className="text-gray-700" />
                <span className="text-3xl font-bold text-gray-800">{card.value}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Latest Visits */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">My latest Visits</h2>
        <div className="flex flex-col gap-3">
          {visits.map((visit, i) => {
            const status = statusConfig[visit.status];
            return (
              <motion.div
                key={visit.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => navigate("/staging")}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/60 cursor-pointer transition group"
              >
                {/* Image */}
                <img
                  src={visit.image}
                  alt={visit.client}
                  className="w-16 h-14 rounded-xl object-cover flex-shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm">
                    {visit.client}, {visit.type}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={11} className="text-gray-400 flex-shrink-0" />
                    <p className="text-xs text-gray-400 truncate">{visit.address}</p>
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5">{visit.rooms.join(", ")}</p>
                </div>

                {/* Status */}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${status.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                  {status.label}
                </div>

                {/* Avatars */}
                <div className="flex -space-x-2">
                  {visit.avatars.map((avatar, j) => (
                    <img key={j} src={avatar} className="w-7 h-7 rounded-full border-2 border-white" />
                  ))}
                </div>

                {/* More */}
                <button className="p-1.5 rounded-lg hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}