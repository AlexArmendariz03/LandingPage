# Revisión SOLID y Clean Architecture

Fecha: 24 de abril de 2026.

## Resumen ejecutivo

El proyecto tiene una buena base visual y está bien orientado a objetivo de negocio (captación), pero la capa de presentación concentra demasiadas responsabilidades en `src/app/page.tsx`.

Estado general:
- **SOLID:** cumplimiento **parcial** (fortalezas en composición, debilidades en SRP/OCP por acoplamiento de contenido + UI).
- **Clean Architecture:** cumplimiento **básico** (estructura por framework, no por capas de dominio/casos de uso).

## Hallazgos por principio SOLID

### S — Single Responsibility Principle (SRP)
- **Antes:** `page.tsx` contenía contenido estático, mapeo visual y comportamiento de animaciones en un mismo archivo.
- **Mejora aplicada:** el contenido de negocio/marketing se movió a `src/app/content/landingContent.ts`.
- **Impacto:** separa “qué se muestra” de “cómo se renderiza”.

### O — Open/Closed Principle (OCP)
- **Riesgo actual:** para agregar nuevas secciones o variar textos, había que editar directamente la vista principal.
- **Mejora aplicada:** ahora gran parte de cambios de contenido se resuelve modificando `landingContent.ts`.

### L — Liskov Substitution Principle (LSP)
- No se observan jerarquías de herencia relevantes; principio no aplicable de forma directa en el estado actual.

### I — Interface Segregation Principle (ISP)
- Se usan tipos concretos ligeros (`Highlight`, `Service`, etc.) sin interfaces sobredimensionadas.
- Oportunidad: formalizar contratos para futuros orígenes de datos (CMS/API).

### D — Dependency Inversion Principle (DIP)
- `page.tsx` sigue dependiendo de detalles de librerías (`AOS`) y de assets directos.
- Recomendación: introducir una capa de adaptadores para proveedores externos si el proyecto escala.

## Hallazgos de Clean Architecture

### Lo positivo
- Componentes reutilizables aislados (`heroCarrusel`, `navBar`).
- Separación inicial de datos estáticos en módulo de contenido.

### Brechas
- No existe capa de dominio explícita (entidades, reglas, casos de uso).
- No existe capa de aplicación para orquestar acciones (por ejemplo, envío/validación de contacto).
- Acoplamiento fuerte a Next.js en capa de entrada.

## Plan sugerido por etapas

1. **Corto plazo**
   - Mantener contenido en módulos `content/*`.
   - Extraer hooks de comportamiento (p. ej. `useAosConfig`).

2. **Mediano plazo**
   - Crear `src/domain`, `src/application`, `src/infrastructure`.
   - Definir casos de uso (ej. `RequestQuoteUseCase`).

3. **Escalamiento**
   - Introducir puertos y adaptadores (repo de leads, proveedor de analytics, proveedor de correo).
   - Añadir pruebas de casos de uso desacopladas del framework.

## Criterio de aceptación para la siguiente iteración

- `page.tsx` reducido a composición de secciones.
- Casos de uso con pruebas unitarias independientes de Next.js.
- Fuentes externas consumidas por adaptadores y no desde los componentes.
