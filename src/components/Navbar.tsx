import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/FPDesing.png"
              alt="F&P Desing Studio"
              className="h-10 translate-y-1.5 cursor-pointer"
              onClick={() => scrollToSection("inicio")}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4"
          >
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Contacto
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
