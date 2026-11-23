# Taller Andino Sur

Sitio web multipágina de muestra para el curso **Hojas de Estilo en Cascada Avanzado**, Universidad Tecnológica del Perú (UTP), Grupo 01. La marca y los perfiles artesanos son ficticios y se crearon con fines académicos.

## Estructura

- `*.html`: 15 páginas semánticas con navegación compartida.
- `src/css/base.css`: estilos base, tipografía, tablas, formularios y componentes.
- `src/less/main.less`: variables, anidación y detalles temáticos LESS.
- `src/scss/`: entrada SCSS y parciales de variables, mixins y componentes.
- `src/input.css` y `tailwind.config.js`: utilidades, animación y estilos responsivos Tailwind.
- `assets/img/`, `assets/audio/`, `assets/video/`, `assets/docs/`, `assets/js/`: recursos locales del sitio.
- `tools/build-pages.mjs`: genera las páginas HTML desde una fuente común para mantener navegación y estructura coherentes.
- `dist/`: salida compilada para publicación; se crea con el build.

Los nombres de las variables propias en CSS, LESS y SCSS están en español para facilitar su identificación (`--color-arcilla`, `@color-papel`, `$radio-borde`). Cada hoja fuente incluye comentarios breves que indican qué tecnología y recursos utiliza. Las clases y directivas propias de Tailwind conservan su sintaxis oficial.

## Requisitos

Node.js 18 o posterior y npm. La tipografía se carga desde Google Fonts; el resto de la interfaz, las ilustraciones y el audio/video de muestra son locales. Los mapas requieren conexión a internet.

## Comandos

```bash
npm install
npm run build
npm run watch
npm run dev
```

- `npm run build` compila CSS y genera `dist/` con las 15 páginas y los recursos.
- `npm run watch` vigila los archivos LESS, SCSS y Tailwind.
- `npm run dev` vuelve a compilar y sirve la salida `dist/` localmente.

Para abrir las páginas fuente directamente desde la raíz, ejecuta primero `npm run build`: sus hojas enlazan a `dist/css/`. La salida publicable en `dist/` usa rutas relativas propias (`css/` y `assets/`).

## Publicación

### GitHub Pages

1. Sube el proyecto a un repositorio GitHub.
2. Ejecuta `npm install` y `npm run build` antes de publicar.
3. En **Settings → Pages**, selecciona GitHub Actions o publica el contenido de `dist/` como carpeta del sitio.
4. Si usas un flujo de despliegue, configura el paso de build para ejecutar `npm ci && npm run build` y publica `dist/`.

### Vercel

Importa el repositorio en Vercel, configura **Build Command** como `npm run build` y **Output Directory** como `dist`. No se necesita framework ni ruta de API.

## Páginas

Inicio, Alfarería, Cerámicas, Ebanistería, Hilados y tejidos, Mueblería rústica, Catálogo y precios, Galería multimedia, Blog, Artesanos, Clientes, Libro de reclamaciones, Contacto, Proceso del taller y Nosotros.

Los formularios son demostrativos y no envían ni almacenan datos. Precios, dirección y perfiles son contenido de muestra; confirma los datos antes de usar el sitio en un contexto comercial.
