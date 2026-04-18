# Landing Page Comercial

Landing page comercial construida con **Next.js** para captar clientes y mostrar propuesta de valor, servicios, proceso, galería y formulario de contacto.

> Sugerencia para GitHub: usa como descripción corta “Landing page comercial para captación de clientes y generación de contactos”.

## Funcionalidades

- Hero principal con propuesta de valor y llamados a la acción.
- Sección de servicios y beneficios.
- Proceso de trabajo explicado por pasos.
- Galería visual de trabajos.
- Formulario de contacto para cotizaciones.

## Requisitos

- Node.js 20.x
- npm

## Configuración de entorno

1. Crea un archivo `.env` en la raíz del proyecto.
2. Copia el contenido de `.env.example` y completa tus valores reales.

```bash
cp .env.example .env
```

Variable requerida:

- `DATABASE_URL` (si usas funcionalidades con PostgreSQL/Prisma)

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción.
- `npm run start`: correr build de producción.
- `npm run lint`: linting.
- `npm test`: tests con Jest.

## Seguridad

- No subas `.env` al repositorio.
- Si una credencial se publicó por error, **rótala inmediatamente** en el proveedor correspondiente.
