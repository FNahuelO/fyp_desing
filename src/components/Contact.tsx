import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
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
            Trabajemos <span className="gradient-text">Juntos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría escucharte y ayudarte a
            hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-blue rounded-lg p-3">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:fypdesing@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors block"
                    >
                      fypdesing@gmail.com
                    </a>
                    <a
                      href="mailto:frannahuelosorio@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors block"
                    >
                      frannahuelosorio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-blue rounded-lg p-3">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <a
                      href="tel:+541126162278"
                      className="text-gray-400 hover:text-blue-400 transition-colors block"
                    >
                      +54 11 26162278
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-blue rounded-lg p-3">
                    <WhatsappIcon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/5411261622278"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors block"
                    >
                      +54 11 26162278
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-blue rounded-lg p-3">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                    <p className="text-gray-400">Buenos Aires, Argentina</p>
                    <p className="text-gray-400">
                      Disponible para proyectos remotos
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <h3 className="font-semibold text-lg mb-4">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-400">Sábados: 10:00 - 14:00</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      defaultValue="Hola, estoy interesado en trabajar con ustedes. Me gustaría discutir un proyecto que tengo en mente."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send size={20} className="mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
