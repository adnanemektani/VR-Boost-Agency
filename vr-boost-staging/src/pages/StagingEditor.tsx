import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, MessageSquare, Hand, Undo2, Redo2, Trash2, Share2, Play, X, Copy, Check } from "lucide-react";

const rooms = ["Living Room", "Bedroom", "Kitchen", "Bathroom"];

const furniture = [
  { id: 1, name: "Canapé Milano", price: "2 400 €", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80" },
  { id: 2, name: "Table Basse Oslo", price: "890 €", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=200&q=80" },
  { id: 3, name: "Fauteuil Barcelona", price: "1 200 €", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80" },
  { id: 4, name: "Lampe Arco", price: "450 €", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&q=80" },
];

const colors = ["#1a1a2e", "#16213e", "#e8d5b7", "#a8c5da", "#d4a5a5", "#b5d5c5"];

export default function StagingEditor() {
  const navigate = useNavigate();
  const [activeRoom, setActiveRoom] = useState("Living Room");
  const [activeTool, setActiveTool] = useState("pan");
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [showHubModal, setShowHubModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [hubLoading, setHubLoading] = useState(false);
  const [, setHubJoined] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleHubClick = () => {
    setShowHubModal(true);
    setHubLoading(true);
    setHubJoined(false);
    setTimeout(() => {
      setHubLoading(false);
      setHubJoined(true);
    }, 2500);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tools = [
    { id: "add", icon: Plus, label: "Add" },
    { id: "comment", icon: MessageSquare, label: "Comment" },
    { id: "pan", icon: Hand, label: "Pan" },
    { id: "undo", icon: Undo2, label: "Undo" },
    { id: "redo", icon: Redo2, label: "Redo" },
  ];

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-hidden">
      {/* Background 3D Room */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Toolbar */}
      // bdel le top toolbar div:
<div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
  
  {/* Back */}
  <button onClick={() => navigate("/")} className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white transition shadow-sm">
    <ArrowLeft size={16} />
    <span className="hidden sm:inline">Back to home</span>
  </button>

  {/* Tools — hidden f mobile, visible f sm+ */}
  <div className="hidden sm:flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-sm">
    {tools.map((tool) => {
      const Icon = tool.icon;
      return (
        <button key={tool.id} onClick={() => setActiveTool(tool.id)}
          className={`p-2 rounded-lg transition ${activeTool === tool.id ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
          <Icon size={16} />
        </button>
      );
    })}
    <div className="w-px h-6 bg-gray-200 mx-1" />
    {colors.map((color) => (
      <button key={color} onClick={() => setActiveColor(color)}
        className={`w-5 h-5 rounded-full border-2 transition ${activeColor === color ? "border-blue-500 scale-110" : "border-transparent"}`}
        style={{ backgroundColor: color }} />
    ))}
    <div className="w-px h-6 bg-gray-200 mx-1" />
    <button className="p-2 rounded-lg text-red-400 hover:bg-red-50 transition"><Trash2 size={16} /></button>
  </div>

  {/* Share + Play */}
  <div className="flex items-center gap-2">
    <button onClick={() => setShowShareModal(true)}
      className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white transition shadow-sm">
      <Share2 size={16} />
      <span className="hidden sm:inline">Partager le projet</span>
    </button>
    <button className="flex items-center gap-2 bg-gray-900 rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 transition shadow-sm">
      <Play size={16} />
      <span className="hidden sm:inline">Play</span>
    </button>
  </div>
</div>

      {/* Room Tabs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-xl p-1 shadow-sm">
          {rooms.map((room) => (
            <button
              key={room}
              onClick={() => setActiveRoom(room)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                activeRoom === room
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-white"
              }`}
            >
              {room}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel: Furniture */}
      <div className="absolute right-2 top-32 bottom-24 w-40 md:w-52 z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-3 flex flex-col gap-3 h-full overflow-y-auto">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Furniture</p>
          {furniture.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition group">
              <img src={item.image} className="w-full h-24 object-cover" />
              <div className="p-2">
                <p className="text-xs font-medium text-gray-800 leading-tight">{item.name}</p>
                <p className="text-xs text-blue-500 font-semibold mt-0.5">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Hub & Avatar Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={handleHubClick}
          className="flex items-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-2xl text-sm font-medium hover:bg-gray-700 transition shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Rejoindre la visite Hub & Avatar
        </button>
      </div>

      {/* Hub & Avatar Modal */}
      <AnimatePresence>
        {showHubModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 w-[400px] text-center"
            >
              {hubLoading ? (
                <>
                  <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Connexion en cours...</h2>
                  <p className="text-sm text-gray-400">Chargement de la visite Hub & Avatar</p>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check size={36} className="text-white" />
                  </motion.div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Visite lancée !</h2>
                  <p className="text-sm text-gray-400 mb-6">Vous avez rejoint la visite Hub & Avatar avec succès.</p>
                  <button
                    onClick={() => { setShowHubModal(false); setHubJoined(false); }}
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-700 transition"
                  >
                    Fermer
                  </button>
                </>
              )}

              {hubLoading && (
                <button
                  onClick={() => setShowHubModal(false)}
                  className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition"
                >
                  Annuler
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-6 w-[440px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Partager le projet</h2>
                <button onClick={() => setShowShareModal(false)}>
                  <X size={20} className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-4">Partagez ce lien avec votre client pour accéder à la visite virtuelle.</p>

              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 mb-6">
                <span className="flex-1 text-sm text-gray-600 truncate">
                  https://rochebobois.vercel.app/staging?project=la-paix-rabat
                </span>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    copied ? "bg-green-500 text-white" : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "Copié!" : "Copier"}
                </button>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                  Envoyer par email
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition">
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}