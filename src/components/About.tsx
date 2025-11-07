import { motion } from "framer-motion";
import { Award, Zap, Target, Brain } from "lucide-react";

const stats = [
  { icon: Zap, value: "3+", label: "Años de Experiencia" },
  { icon: Target, value: "100%", label: "Compromiso" },
  { icon: Award, value: "100%", label: "Calidad" },
  { icon: Brain, value: "100%", label: "Creatividad" },
];

export const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Sobre <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Somos un estudio de diseño enfocado en crear experiencias digitales
            que combinan estética profesional con funcionalidad excepcional.
          </p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="gradient-blue rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Descripción detallada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">
              Diseño que impulsa resultados
            </h3>
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              En F&P Desing Studio, creemos que el diseño va más allá de lo
              visual. Cada proyecto es una oportunidad para crear soluciones que
              generen impacto real en los negocios de nuestros clientes.
            </p>
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              Nuestro enfoque corporativo combina creatividad con estrategia,
              asegurando que cada diseño no solo se vea profesional, sino que
              también cumpla objetivos de negocio específicos.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Trabajamos con las últimas tecnologías y metodologías de diseño
              para entregar productos digitales de la más alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-white mb-2">
                UX/UI Design
              </h4>
              <p className="text-gray-400">
                Interfaces intuitivas y atractivas
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-white mb-2">Branding</h4>
              <p className="text-gray-400">Identidades visuales memorables</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-white mb-2">Web Design</h4>
              <p className="text-gray-400">Sitios web modernos y responsivos</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-white mb-2">Prototipos</h4>
              <p className="text-gray-400">Validación rápida de ideas</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg col-span-2"
            >
              <h4 className="text-xl font-bold text-white mb-2">
                Desarrollo Móvil
              </h4>
              <p className="text-gray-400">
                Aplicaciones nativas multiplataforma para iOS y Android
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
