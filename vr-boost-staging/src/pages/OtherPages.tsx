import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { visits, teamMembers } from "../data/mockData";

export function VirtualVisits() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Virtual Visits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visits.map((visit) => (
          <div
            key={visit.id}
            onClick={() => navigate("/staging")}
            className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-4 cursor-pointer hover:shadow-md transition"
          >
            <img src={visit.image} className="w-full h-36 object-cover rounded-xl mb-3" />
            <p className="font-semibold text-gray-800">{visit.client}, {visit.type}</p>
            <p className="text-xs text-gray-400 mt-1">{visit.address}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function FurnitureCatalog() {
  const furniture = [
    { id: 1, name: "Canapé Milano", price: "2 400 €", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80" },
    { id: 2, name: "Table Basse Oslo", price: "890 €", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300&q=80" },
    { id: 3, name: "Fauteuil Barcelona", price: "1 200 €", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&q=80" },
    { id: 4, name: "Lampe Arco", price: "450 €", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&q=80" },
    { id: 5, name: "Étagère Stockholm", price: "680 €", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&q=80" },
    { id: 6, name: "Lit Zen", price: "3 100 €", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=300&q=80" },
    { id: 7, name: "Bureau Scandinave", price: "760 €", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80" },
    { id: 8, name: "Miroir Rond", price: "320 €", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=300&q=80" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Furniture Catalog <span className="text-gray-400 text-lg font-normal">654 items</span></h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {furniture.map((item) => (
          <div key={item.id} className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-3 cursor-pointer hover:shadow-md transition group">
            <img src={item.image} className="w-full h-32 object-cover rounded-xl mb-3" />
            <p className="font-medium text-gray-800 text-sm">{item.name}</p>
            <p className="text-blue-500 text-sm font-semibold mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-5 flex items-center gap-4">
            <img src={member.avatar} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">{member.name}</p>
              <p className="text-xs text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}