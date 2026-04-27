import type { LandingPageContent } from "@/modules/landing/domain/entities/landing";
import type { LandingContentRepository } from "@/modules/landing/domain/ports/landingContentRepository";

const landingContent: LandingPageContent = {
  highlights: [
    {
      title: "Aislamiento térmico superior",
      description:
        "Espuma proyectada de celda cerrada que mejora el aislamiento en techos y muros, ayudando a mantener una temperatura interior más estable.",
      icon: "thermometer",
    },
    {
      title: "Durabilidad garantizada",
      description:
        "Recubrimientos de alta resistencia a humedad, rayos UV y abrasión para prolongar la vida útil de cubiertas y superficies expuestas.",
      icon: "shield",
    },
    {
      title: "Aplicación limpia y rápida",
      description:
        "Aplicación técnica con equipo especializado para lograr acabados uniformes, seguros y con menor desperdicio de material.",
      icon: "tools",
    },
  ],
  services: [
    {
      title: "Poliuretano",
      detail:
        "Aislamiento y sellado continuo para controlar filtraciones y mejorar el confort térmico. Recomendado para techos, naves industriales, comercios y cámaras de refrigeración.",
    },
    {
      title: "Sistema prefabricado",
      detail:
        "Sistema para cubiertas con instalación eficiente y espesores controlados. Brinda impermeabilidad confiable, menor mantenimiento y mayor durabilidad en superficies amplias.",
    },
    {
      title: "Aplicación de chapopote",
      detail:
        "Impermeabilización asfáltica de alta adherencia para proteger contra humedad, lluvia y encharcamientos. Ideal para azoteas, losas y zonas con filtración recurrente.",
    },
  ],
  steps: [
    "Diagnóstico técnico en sitio para identificar filtraciones, humedad y puntos críticos de pérdida térmica.",
    "Propuesta detallada con alcance del trabajo, sistema recomendado, tiempos de ejecución y garantía.",
    "Preparación de superficie y aplicación profesional con personal capacitado y proceso controlado.",
    "Entrega final con garantía por escrito y seguimiento postservicio para validar el desempeño del sistema.",
  ],
  valueSection: [
    {
      title: "Cotización técnica clara",
      detail:
        "Recibes una propuesta clara con alcance, materiales recomendados, tiempos estimados y garantía para decidir con confianza.",
    },
    {
      title: "Acompañamiento de principio a fin",
      detail:
        "Te acompañamos antes, durante y después de la aplicación para asegurar que el sistema se ejecute como fue planeado.",
    },
    {
      title: "Enfoque en ahorro y durabilidad",
      detail:
        "Nos enfocamos en reducir filtraciones, bajar costos de mantenimiento y extender la vida útil de tu cubierta.",
    },
  ],
  projectGallery: [
    {
      src: "/brand/aplicador.png",
      alt: "Aplicación profesional de impermeabilizante en techo",
      label: "Aplicación técnica en techo residencial",
    },
    {
      src: "/brand/aplicadorBodega.png",
      alt: "Aplicación de recubrimiento en bodega industrial",
      label: "Proyecto en bodega con acabado uniforme",
    },
    {
      src: "/brand/pinturaPoli.png",
      alt: "Recubrimiento de poliuretano terminado en cubierta",
      label: "Sistema de poliuretano finalizado",
    },
    {
      src: "/brand/techoBlanco.png",
      alt: "Techo impermeabilizado con acabado blanco reflectivo",
      label: "Acabado reflectivo para control térmico",
    },
    {
      src: "/brand/techo2.png",
      alt: "Cubierta protegida después de mantenimiento preventivo",
      label: "Mantenimiento preventivo y sellado",
    },
    {
      src: "/brand/roof-application.svg",
      alt: "Representación de trabajo de impermeabilización en cubierta",
      label: "Cobertura completa de superficie",
    },
  ],
  businessImpact: [
    "Menor costo por mantenimientos correctivos al reducir filtraciones recurrentes.",
    "Mejor confort térmico y potencial reducción de carga en sistemas de climatización.",
    "Mayor continuidad operativa en bodegas y comercios al disminuir riesgo de daño por humedad.",
    "Bitácora técnica del servicio para facilitar auditorías y decisiones de mantenimiento futuro.",
  ],
  heroSlides: [
    { src: "/brand/Hernandez.png", alt: "Logo Hernández Impermeabilizaciones & Poliuretano" },
    { src: "/brand/aplicador.png", alt: "Impermeabilización profesional de techos" },
    { src: "/brand/pinturaPoli.png", alt: "Impermeabilización y pintura de techos" },
    { src: "/brand/aplicadorBodega.png", alt: "Impermeabilización y pintura en bodega" },
  ],
  navLinks: [
    { label: "Servicios", href: "#servicios" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Valor", href: "#impacto" },
    { label: "Diferenciales", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export class StaticLandingContentRepository implements LandingContentRepository {
  getLandingPageContent(): LandingPageContent {
    return landingContent;
  }

  getNavigationLinks() {
    return landingContent.navLinks;
  }
}
