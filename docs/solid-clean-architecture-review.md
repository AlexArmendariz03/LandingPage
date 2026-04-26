# Revisión SOLID y Arquitectura Hexagonal

Fecha: 26 de abril de 2026.

## Resultado de la mejora aplicada

Se reorganizó el módulo de landing a una estructura con separación por capas (dominio, aplicación, infraestructura y UI) para acercar el proyecto a principios SOLID y arquitectura hexagonal.

## Estructura propuesta (implementada)

```text
src/modules/landing
├── domain
│   ├── entities/landing.ts
│   └── ports/landingContentRepository.ts
├── application
│   └── use-cases
│       ├── getLandingPageContent.ts
│       └── getNavigationLinks.ts
├── infrastructure
│   └── repositories/staticLandingContentRepository.ts
└── ui
    ├── components
    │   ├── HeroCarousel.tsx
    │   └── Navbar.tsx
    └── config/highlightIcons.tsx
```

## Cómo esta estructura mejora SOLID

- **S (Single Responsibility):**
  - Dominio define modelos y contratos.
  - Aplicación orquesta casos de uso.
  - Infraestructura resuelve origen de datos estáticos.
  - UI solo renderiza.

- **O (Open/Closed):**
  - Puedes crear otro repositorio (CMS/API) implementando el puerto `LandingContentRepository` sin modificar la UI.

- **L / I:**
  - Los contratos son pequeños y específicos (`getLandingPageContent`, `getNavigationLinks`).

- **D (Dependency Inversion):**
  - La aplicación depende de un puerto de dominio, no de datos embebidos en el componente.

## Próximos pasos recomendados

1. Inyectar repositorios por fábrica/DI para evitar instanciación directa en casos de uso.
2. Agregar tests unitarios por capa (dominio/aplicación) sin React.
3. Extender patrón a formularios/contacto y analítica.
