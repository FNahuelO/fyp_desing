# F&P Desing Studio - Portfolio

Portfolio profesional corporativo para F&P Desing Studio, construido con las últimas tecnologías web.

## 🚀 Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **shadcn/ui** - Componentes de UI profesionales
- **Lucide React** - Iconos modernos

## 🎨 Características

- ✨ Diseño corporativo profesional
- 🎭 Animaciones suaves y elegantes
- 📱 Completamente responsivo
- ⚡ Carga ultra-rápida
- 🎯 Paleta de colores de marca (Negro, Azul gradiente, Gris oscuro)
- 🧩 Componentes reutilizables
- 📊 Sección de proyectos con galería
- 💼 Información sobre la empresa
- 📞 Formulario de contacto

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
fp-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/            # Componentes base de shadcn/ui
│   │   ├── Navbar.tsx     # Barra de navegación
│   │   ├── Hero.tsx       # Sección hero principal
│   │   ├── Projects.tsx   # Galería de proyectos
│   │   ├── About.tsx      # Sobre nosotros
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   └── Footer.tsx     # Pie de página
│   ├── lib/
│   │   └── utils.ts       # Utilidades
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `src/index.css`:

- **Negro**: Fondo principal
- **Azul gradiente**: Acento principal (de #3b9fff a #1a7acc)
- **Gris oscuro**: Texto secundario

### Proyectos

Edita el array `projects` en `src/components/Projects.tsx` para añadir tus proyectos reales.

### Información de Contacto

Modifica los datos de contacto en `src/components/Contact.tsx`.

## 📱 Secciones

1. **Hero**: Presentación principal con logo y llamado a la acción
2. **Proyectos**: Galería de trabajos realizados con enlaces a Figma
3. **Sobre Nosotros**: Información de la empresa y servicios
4. **Contacto**: Formulario de contacto e información de ubicación
5. **Footer**: Enlaces rápidos y redes sociales

## 🌐 Despliegue

El proyecto está listo para ser desplegado en:

- **Vercel** (recomendado para Vite/React)
- **Netlify**
- **GitHub Pages**
- **Cualquier hosting estático**

```bash
# Build para producción
npm run build

# La carpeta dist/ contendrá los archivos estáticos
```

## 📄 Licencia

© 2025 F&P Desing Studio. Todos los derechos reservados.

## 👨‍💻 Desarrollo

Creado con ❤️ por F&P Desing Studio
