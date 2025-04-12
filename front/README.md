# Finca Cheona - Guía de Desarrollo Local

## Requisitos Previos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Visual Studio Code

## Pasos de Instalación

1. Clona el repositorio en tu máquina local
2. Abre el proyecto en Visual Studio Code
3. Abre una terminal en VS Code (Ctrl + `)
4. Instala las dependencias:
```bash
npm install
```
5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Extensiones Recomendadas para VS Code

- Tailwind CSS IntelliSense
- ESLint
- Prettier
- PostCSS Language Support

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Ejecuta la versión construida
- `npm run lint`: Ejecuta el linter

## Estructura del Proyecto

```
finca-cheona/
├── app/                # Páginas y rutas de Next.js
├── components/         # Componentes reutilizables
├── lib/               # Utilidades y funciones auxiliares
├── public/            # Archivos estáticos
└── styles/            # Estilos globales
```