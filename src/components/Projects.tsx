import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

// Datos de ejemplo - puedes reemplazar con tus proyectos reales
const projects = [
  {
    id: 1,
    title: "CEPPA - Plataforma Integral",
    description:
      "Diseño completo de plataforma web y mobile para el Centro de Psicoterapias. Incluye sitio institucional con múltiples páginas (Home, Equipo, Revista, Cursos), sistema de gestión administrativa, reproductor multimedia y versión responsive completa.",
    category: "Web & Mobile Design",
    image: "/ceppa.png",
    figmaUrl:
      "https://www.figma.com/design/IMF0TX81fyEBhVfUtARBms/CEPPA-Psicolog%C3%ADa?node-id=0-1&t=fkBMqYGSr0QaIl9Z-1",
    websiteUrl: "https://ceppa.com.ar",
  },
  {
    id: 2,
    title: "Mia - Invitaciones Digitales",
    description:
      "Diseño UX/UI completo para aplicación móvil de gestión de eventos especiales. Incluye invitaciones digitales, galería multimedia, registro de regalos, mapas integrados y sistema RSVP.",
    category: "Mobile App Design",
    image: "/mia.png",
    figmaUrl:
      "https://www.figma.com/design/2DEdvhwJBNQ8RdCY96mEiQ/Invitaci%C3%B3n-de-15?node-id=0-1&t=mTH3ItqdT9rKlV1E-1",
    websiteUrl: "https://mia-xv.vercel.app/",
  },
  {
    id: 3,
    title: "Sistema de Gestión de Citas",
    description:
      "Plataforma completa de gestión de citas con app móvil y panel administrativo web. Branding moderno con tema oscuro, acentos azules vibrantes y diseño minimalista. Incluye calendario interactivo, sistema de reservas, gestión de clientes y servicios con interfaces optimizadas para usuario final y administrador.",
    category: "App & Dashboard Design",
    image: "/barberia.png",
    figmaUrl:
      "https://www.figma.com/design/wbWjZJPCE1RmK1ehpjCnGx/Gestionador-de-Citas-Barberia?node-id=0-1&p=f&t=RWtoda1MvCF6p5F4-0",
  },

  {
    id: 5,
    title: "Grow Shop - E-commerce Platform",
    description:
      "Plataforma integral de e-commerce con branding distintivo de tema oscuro y acentos verdes vibrantes. Incluye sitio institucional completo, sistema de usuarios con registro, login, favoritos y carrito de compras. Panel administrativo robusto para gestión de productos, categorías, banners y ventas con dashboard de métricas. Experiencia optimizada desde la navegación de productos hasta la confirmación de pedidos.",
    category: "E-commerce & Admin Design",
    image: "/grow.png",
    figmaUrl:
      "https://www.figma.com/design/FgAZO7uKOJzxM7KCjKAnCE/Market-Place-Grow-Shop?node-id=1-3&p=f&t=HOT1U1IYj7U5TflE-0",
  },
  {
    id: 5,
    title: "Kiosco Buji - Gestión de Caja",
    description:
      "App móvil administrativa para gestión de cierres de caja en kioscos. Branding distintivo con rojo oscuro y amarillo vibrante, logo de perro para identidad amigable. Incluye login seguro, dashboard con métricas de cierres y gastos, formularios completos para registro de ventas, observaciones y comprobantes. Sistema de notificaciones y gestión por usuario con interface optimizada para operaciones diarias.",
    category: "Mobile Admin App Design",
    image: "/buji.png",
    websiteUrl: "https://kiosco-buji.vercel.app",
  },
  {
    id: 6,
    title: "Invitaciones Digitales",
    description:
      "Diseño completo de invitaciones digitales para eventos especiales. Branding moderno con tema oscuro y acentos azules vibrantes. Incluye sistema de registro de asistencia, galería multimedia, mapas integrados y sistema RSVP. Interfaces optimizadas para usuario final y administrador.",
    category: "Web Design",
    image: "/boda.png",
    figmaUrl:
      "https://www.figma.com/design/voRBdKLbb0IpDxGmQNpFIW/Invitaciones-Digitales?node-id=0-1&p=f&t=ypAKEJZmFUiqRaOL-0",
    websiteUrl: "https://bodacrisyflor.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Nuestros <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trabajos realizados con excelencia y atención al detalle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/80 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="default"
                      className="flex-1"
                      onClick={() =>
                        window.open(project?.figmaUrl || "", "_blank")
                      }
                    >
                      <Figma size={16} className="mr-2" />
                      Ver en Figma
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        window.open(project?.websiteUrl || "", "_blank")
                      }
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
