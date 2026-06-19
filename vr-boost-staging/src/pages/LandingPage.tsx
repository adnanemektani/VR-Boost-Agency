import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Eye, Users, ArrowRight, Star, Building2, Sofa } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-['Poppins']" style={{
      background: "linear-gradient(135deg, #589fef 0%, #bbb0e7 45%, #daacc6 100%)"
    }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
        <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 px-6 h-16 flex items-center justify-between shadow-sm">
          <div className="flex flex-col leading-none">
            <span className="text-xl tracking-tight text-gray-900">
              <span className="font-extrabold">roche</span>
              <span className="font-normal">bobois</span>
            </span>
            <span className="text-[8px] tracking-[0.35em] text-gray-500 uppercase mt-0.5 pl-4">paris</span>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-gray-700 transition"
          >
            Accéder au Dashboard →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/40 backdrop-blur-sm text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/50">
               Home Staging Virtuel × Hub & Avatar
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transformez chaque bien en{" "}
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
              }}>
                expérience immersive
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Visualisez, meublez et partagez des espaces en 3D. Accompagnez vos clients à distance grâce au Hub & Avatar — la nouvelle ère du staging virtuel premium.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition shadow-lg"
              >
                Démarrer maintenant <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/staging")}
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition border border-white/50"
              >
                <Eye size={18} /> Voir la démo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-3 border border-white/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                className="w-full h-72 object-cover rounded-2xl"
                alt="Home Staging"
              />
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Star size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Visite complétée</p>
                    <p className="text-sm font-semibold text-gray-800">Villa Marrakesh 40000</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Une solution complète</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Du staging virtuel à la visite immersive en temps réel — tout en un.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Home Staging Virtuel",
                desc: "Meublez et décorez des espaces vides en quelques clics. Choisissez parmi 654+ meubles premium.",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Eye,
                title: "Visite 3D Interactive",
                desc: "Naviguez dans chaque pièce en temps réel. Partagez un lien et invitez vos clients à explorer.",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Users,
                title: "Hub & Avatar",
                desc: "Rejoignez la visite avec votre client à distance via avatars. Une expérience immersive inédite.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
                color: "bg-pink-100 text-pink-600"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={feature.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target clients */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conçu pour les professionnels</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sofa,
                title: "Enseignes de mobilier",
                desc: "Présentez vos collections dans des espaces réels. Augmentez les conversions avec la visualisation 3D.",
                img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80"
              },
              {
                icon: Building2,
                title: "Agences immobilières",
                desc: "Transformez des biens vides en espaces vendeurs. Accélérez les ventes avec le staging virtuel.",
                img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
              },
              {
                icon: Users,
                title: "Promoteurs",
                desc: "Visualisez des appartements sur plan avant la livraison. Vendez sur plan avec confiance.",
                img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 p-6 flex gap-4 items-start hover:shadow-lg transition"
                >
                  <img src={item.img} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-gray-500" />
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre expérience client?
            </h2>
            <p className="text-gray-500 mb-8">
              Rejoignez les enseignes premium qui utilisent déjà la solution Home Staging + Hub & Avatar.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-700 transition shadow-lg mx-auto text-lg"
            >
              Accéder au Dashboard <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}