# 📝 Guía de Personalización

Este archivo te ayudará a personalizar el portfolio con tus datos reales.

## 🎨 Cambiar Colores (si lo necesitas)

Los colores están en `src/index.css`:

```css
:root {
  --primary: 200 100% 50%; /* Azul - puedes ajustar */
  --background: 0 0% 0%; /* Negro */
  --secondary: 0 0% 25%; /* Gris oscuro */
}
```

## 📂 Añadir tus Proyectos

Edita `src/components/Projects.tsx` y modifica el array `projects`:

```typescript
const projects = [
  {
    id: 1,
    title: "Nombre de tu Proyecto",
    description: "Descripción del proyecto...",
    category: "Categoría",
    image: "URL_de_la_imagen", // Usa URLs de tus imágenes o guárdalas en /public
    figmaUrl: "https://figma.com/...", // Tu enlace de Figma
  },
  // Añade más proyectos aquí
];
```

### Imágenes de Proyectos

Opción 1: Guardar en `/public/images/` y usar `image: '/images/proyecto1.jpg'`
Opción 2: Usar URLs externas como Unsplash o tu hosting
Opción 3: Exportar previews desde Figma

## 📞 Información de Contacto

Edita `src/components/Contact.tsx`:

```typescript
// Línea ~28
<p className="text-gray-400">tu-email@real.com</p>

// Línea ~40
<p className="text-gray-400">+54 11 TU-NUMERO</p>

// Línea ~52
<p className="text-gray-400">Tu Ciudad, País</p>
```

## 🏢 Sobre Nosotros

Edita `src/components/About.tsx`:

1. **Estadísticas** (líneas 5-10): Cambia los números por tus datos reales
2. **Descripción** (líneas 60-80): Escribe sobre tu empresa
3. **Servicios** (líneas 85-110): Ajusta los servicios que ofreces

## 🔗 Redes Sociales

Edita `src/components/Footer.tsx` (líneas 40-60):

```typescript
<a href="https://instagram.com/tu-usuario">
  <Instagram size={20} />
</a>
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube el código a GitHub
2. Conecta tu repositorio en vercel.com
3. ¡Listo! Se despliega automáticamente

### Netlify

1. Arrastra la carpeta `dist` después de ejecutar `npm run build`
2. O conecta con Git como Vercel

### GitHub Pages

```bash
npm install -D gh-pages
# Añade en package.json:
# "homepage": "https://tu-usuario.github.io/fp-portfolio"
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

## 📱 Responsive

El sitio es completamente responsive. Pruébalo en:

- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

## ⚡ Optimización

- Las imágenes deberían ser WebP o JPEG optimizados
- Tamaño recomendado para proyectos: 800x600px
- Usa lazy loading para muchas imágenes
- Comprime imágenes con TinyPNG o Squoosh

## 🎭 Animaciones

Las animaciones están configuradas con Framer Motion. Para ajustarlas:

```typescript
// En cualquier componente
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 📧 Formulario de Contacto

El formulario actual es solo visual. Para hacerlo funcional:

### Opción 1: EmailJS (Gratis)

```bash
npm install @emailjs/browser
```

Ver: https://www.emailjs.com/

### Opción 2: Formspree (Gratis)

Simplemente cambia el action del form:

```html
<form action="https://formspree.io/f/tu-id"></form>
```

### Opción 3: API propia

Crea un endpoint en tu backend y conéctalo

## 🆘 Ayuda

Si tienes problemas:

1. Verifica que Node.js esté instalado: `node -v`
2. Borra `node_modules` y ejecuta `npm install` de nuevo
3. Limpia la caché: `npm run build -- --force`

## ✨ Mejoras Futuras

Ideas para expandir el portfolio:

- [ ] Blog integrado
- [ ] Modo claro/oscuro
- [ ] Múltiples idiomas (i18n)
- [ ] Filtros de proyectos por categoría
- [ ] Animaciones de cursor personalizadas
- [ ] Integración con CMS (Sanity, Contentful)
- [ ] Analytics (Google Analytics, Plausible)
