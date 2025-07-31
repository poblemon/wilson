# Wilson - Educación Financiera

## Descripción
WealthWise es una aplicación web educativa enfocada en la educación financiera personal. Proporciona recursos, herramientas y planes para ayudar a los usuarios a mejorar su salud financiera, aprender sobre ahorro, inversión y planificación futura.

La aplicación cuenta con un frontend desarrollado en React y un backend en Node.js con Express y SQLite para gestionar suscripciones a un newsletter.

## Tecnologías utilizadas
- Frontend:
  - React 18
  - React Router DOM
  - Tailwind CSS
  - Recharts (gráficos)
  - Framer Motion (animaciones)
- Backend:
  - Node.js
  - Express
  - SQLite3
- Herramientas de desarrollo:
  - Vite (bundler)
  - ESLint
  - TypeScript

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd wealthwise-financial-education
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación en modo desarrollo (frontend y backend simultáneamente):
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

## Estructura del proyecto

- `/src`: Código fuente del frontend React, con componentes y páginas organizadas por funcionalidad.
- `/backend`: Código del servidor Express y base de datos SQLite para gestionar suscripciones.
- `package.json`: Configuración de dependencias y scripts.
- `vite.config.ts`: Configuración del bundler Vite.
- Archivos de configuración para ESLint, Tailwind, TypeScript, etc.

## Rutas principales del frontend

- `/` - Página de inicio con resumen y acceso a secciones.
- `/savings` - Página sobre ahorro.
- `/investing` - Página sobre inversión.
- `/future-plans` - Página para planes financieros futuros.
- `/resources` - Recursos y herramientas financieras.
- `/community` - Comunidad y newsletter.

## Backend

El backend expone un endpoint para suscripciones al newsletter:

- `POST /api/newsletter`: Recibe un JSON con `name`, `email` e `interests` (opcional) para registrar un nuevo suscriptor.

La base de datos SQLite almacena los suscriptores con nombre, email, intereses y fecha de suscripción.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerir mejoras o reportar problemas.

## Contacto

Para más información o soporte, contacta al equipo de desarrollo.
