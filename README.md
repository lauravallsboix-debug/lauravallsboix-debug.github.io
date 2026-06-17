# Laura Valls Boix — Portfolio

Portfolio personal de Laura Valls Boix, diseñadora de producto y gráfica. Muestra proyectos de branding, UX/UI, diseño editorial y diseño de producto con animaciones de transición y páginas de detalle individuales por proyecto.

## Stack

- **React 19** + **TypeScript**
- **Vite** — bundler y dev server
- **Tailwind CSS v4** — estilos
- **Framer Motion** — animaciones y transiciones de página
- **React Router v7** (HashRouter) — navegación compatible con GitHub Pages

## Estructura de proyectos

Cada proyecto tiene su propia página de detalle en `src/components/projects/`. Los datos centralizados están en `src/data/projects.ts`.

Las imágenes y assets de cada proyecto viven en `public/projects/<nombre-proyecto>/`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build

```bash
npm run build
```

El output se genera en `dist/`.

## Deploy

El proyecto se despliega automáticamente en **GitHub Pages** al hacer push a `main`, mediante GitHub Actions.
