//import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1 h-8 gradient-blue rounded"></div>
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">F&P</span>
                <span className="text-gray-400"> Desing Studio</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos ideas en experiencias digitales excepcionales.
              Diseño corporativo profesional que impulsa tu marca.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nosotros"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-900 hover:bg-blue-500 p-3 rounded-lg transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-blue-500 p-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-blue-500 p-3 rounded-lg transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-blue-500 p-3 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-400">
          <p>&copy; 2025 F&P Desing Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
