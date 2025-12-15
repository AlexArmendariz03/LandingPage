"use client";
import { FaCheckCircle, FaLeaf, FaPhoneAlt, FaShieldAlt, FaThermometerHalf, FaTools } from "react-icons/fa";
import Image from "next/image";

const highlights = [
  {
    title: "Aislamiento térmico superior",
    description:
      "Espuma proyectada de celda cerrada que mantiene la temperatura estable y reduce el consumo energético hasta en un 40%.",
    icon: <FaThermometerHalf className="text-[#f3992e] text-2xl" />,
    icon: <FaThermometerHalf className="text-emerald-500 text-2xl" />,
  },
  {
    title: "Durabilidad garantizada",
    description:
      "Recubrimientos resistentes a la humedad, rayos UV y abrasión para techos, muros y cámaras frigoríficas.",
    icon: <FaShieldAlt className="text-[#0c5ce6] text-2xl" />,
    icon: <FaShieldAlt className="text-emerald-500 text-2xl" />,
  },
  {
    title: "Aplicación limpia y rápida",
    description:
      "Equipos de dosificación de última generación que aseguran una instalación segura, uniforme y sin desperdicios.",
    icon: <FaTools className="text-[#f3992e] text-2xl" />,
    icon: <FaTools className="text-emerald-500 text-2xl" />,
  },
];

const services = [
  {
    title: "Impermeabilización de techos",
    detail:
      "Sellado continuo que elimina filtraciones y refuerza la estructura. Ideal para naves industriales y comercios.",
  },
  {
    title: "Cámaras de refrigeración",
    detail:
      "Soluciones de alto rendimiento para mantener la cadena de frío con espesores calibrados según tu operación.",
  },
  {
    title: "Aislamiento acústico",
    detail:
      "Capas de poliuretano con densidad controlada que reducen el ruido exterior y mejoran el confort interior.",
  },
];

const steps = [
  "Diagnóstico técnico gratuito en tu sitio",
  "Propuesta detallada con espesores y rendimiento esperado",
  "Aplicación profesional certificada y limpieza del área",
  "Garantía escrita y seguimiento postservicio",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c5ce6] via-[#0b3f99] to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="absolute right-0 top-12 hidden lg:block opacity-80">
          <Image src="/brand/roof-application.svg" alt="Aplicación de poliuretano" width={620} height={380} priority />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#cfe4ff]">
              Hernández Impermeabilizaciones &amp; Poliuretano
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sellamos y aislamos tus techos con espuma de poliuretano de alta densidad.
            </h1>
            <p className="text-lg text-blue-50/90">
              Soluciones de aplicación proyectada que eliminan filtraciones, estabilizan la temperatura y prolongan la vida útil
              de naves industriales, comercios y proyectos residenciales.
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-50">
              Soluciones de Poliuretano Profesional
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Aísla, protege y optimiza tu infraestructura con espuma de poliuretano premium.
            </h1>
            <p className="text-lg text-emerald-50/90">
              Atendemos industrias, comercios y proyectos residenciales con sistemas de espuma proyectada y recubrimientos
              especializados que elevan la eficiencia energética y prolongan la vida útil de cada superficie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f3992e] px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-emerald-900/40 hover:scale-[1.02] transition"
              >
                Agenda una visita técnica
                <FaPhoneAlt />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Conoce nuestros servicios
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f3992e] text-xl" />
                <span className="text-blue-50/80">Instaladores certificados</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLeaf className="text-blue-200 text-xl" />
                <span className="text-blue-50/80">Formulaciones ecológicas</span>
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span className="text-emerald-50/80">Instaladores certificados</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLeaf className="text-emerald-300 text-xl" />
                <span className="text-emerald-50/80">Formulaciones ecológicas</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-[#0c5ce6]/30 bg-slate-900/60 p-6 backdrop-blur shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-50/70">Ahorro energético promedio</p>
                    <p className="text-4xl font-bold text-white">35%</p>
                  </div>
                  <div className="rounded-full bg-[#0c5ce6]/20 px-4 py-2 text-sm font-semibold text-[#cfe4ff]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-50/70">Ahorro energético promedio</p>
                    <p className="text-4xl font-bold text-white">35%</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-50">
                    ROI en 12-18 meses
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10">
                    <p className="text-sm text-blue-50/70">Proyectos entregados</p>
                    <p className="text-3xl font-bold">+120</p>
                    <p className="text-xs text-blue-50/60">Industria, retail y residencial</p>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10">
                    <p className="text-sm text-blue-50/70">Cobertura</p>
                    <p className="text-3xl font-bold">Centro-Norte</p>
                    <p className="text-xs text-blue-50/60">Respuesta en 48 horas</p>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10">
                  <p className="text-sm text-blue-50/70">Certificaciones</p>
                  <p className="text-lg font-semibold">ASTM E84 | ISO 9001 | FM Approvals</p>
                  <p className="text-sm text-blue-50/60 mt-2">
                  <div className="rounded-xl bg-slate-900/60 p-4 border border-white/10">
                    <p className="text-sm text-emerald-50/70">Proyectos entregados</p>
                    <p className="text-3xl font-bold">+120</p>
                    <p className="text-xs text-emerald-50/60">Industria, retail y residencial</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/60 p-4 border border-white/10">
                    <p className="text-sm text-emerald-50/70">Cobertura</p>
                    <p className="text-3xl font-bold">Nacional</p>
                    <p className="text-xs text-emerald-50/60">Respuesta en 48 horas</p>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-900/60 p-4 border border-white/10">
                  <p className="text-sm text-emerald-50/70">Certificaciones</p>
                  <p className="text-lg font-semibold">ASTM E84 | ISO 9001 | FM Approvals</p>
                  <p className="text-sm text-emerald-50/60 mt-2">
                    Cumplimos con normativas de seguridad contra fuego y calidad en procesos de aplicación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:max-w-xl space-y-4">
            <p className="text-[#f3992e] font-semibold uppercase tracking-wide">Servicios clave</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Diseñados para proteger cada espacio</h2>
            <p className="text-blue-50/80">
              Combinamos equipos de alta presión, químicos certificados y un equipo técnico que dimensiona el espesor y la
              densidad exacta para tu proyecto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 w-full">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-slate-900/80 border border-[#0c5ce6]/15 p-6 shadow-lg shadow-blue-900/20">
                <div className="h-12 w-12 rounded-full bg-[#0c5ce6]/15 text-[#f3992e] flex items-center justify-center mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-blue-50/80 text-sm leading-relaxed">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-slate-900/60 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-[#f3992e] font-semibold uppercase tracking-wide">¿Por qué Poliuretano?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios que se sienten desde el primer día</h2>
            <p className="text-blue-50/80">
              La espuma de poliuretano forma una capa monolítica que elimina puentes térmicos, evita filtraciones y reduce la
              transferencia de ruido. Cada aplicación es personalizada para lograr el equilibrio perfecto entre desempeño y
              presupuesto.
            </p>
          </div>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl bg-slate-950/80 border border-[#0c5ce6]/20 p-4 items-start">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-blue-50/80 leading-relaxed">{item.description}</p>
                </div>

      <section id="servicios" className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:max-w-xl space-y-4">
            <p className="text-emerald-400 font-semibold uppercase tracking-wide">Servicios clave</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Diseñados para proteger cada espacio</h2>
            <p className="text-emerald-50/80">
              Combinamos equipos Graco de alta presión, químicos con certificación y un equipo de ingeniería dedicado a
              dimensionar la solución exacta para tu proyecto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 w-full">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-slate-900/80 border border-white/5 p-6 shadow-lg shadow-emerald-900/20">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-emerald-50/80 text-sm leading-relaxed">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4">
          <p className="text-[#f3992e] font-semibold uppercase tracking-wide">Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Instalación transparente y con seguimiento</h2>
          <p className="text-blue-50/80">
            Nuestro equipo acompaña cada fase para asegurar una aplicación segura, limpia y con resultados medibles.
          </p>
          <ol className="space-y-3 text-blue-50/80">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 h-8 w-8 rounded-full bg-[#0c5ce6]/20 text-[#f3992e] flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#0c5ce6]/25 to-slate-900/80 border border-[#0c5ce6]/20 p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-[#f3992e]">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-blue-50/70">Respuesta inmediata</p>
              <p className="text-xl font-semibold text-white">Habla con un especialista</p>
            </div>
          </div>
          <p className="text-sm text-blue-50/80 mb-6">
            Te asesoramos para elegir la densidad, el espesor y el sistema de aplicación que mejor se adapte a tu industria.
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-blue-50/70">Diagnóstico y cotización</span>
              <span className="font-semibold text-white">Sin costo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-50/70">Visita técnica</span>
              <span className="font-semibold text-white">48 horas</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-50/70">Garantía de aplicación</span>
              <span className="font-semibold text-white">5 años</span>
            </div>
      <section id="beneficios" className="bg-slate-900/60 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-emerald-400 font-semibold uppercase tracking-wide">¿Por qué Poliuretano?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios que se sienten desde el primer día</h2>
            <p className="text-emerald-50/80">
              La espuma de poliuretano forma una capa monolítica que elimina puentes térmicos, evita filtraciones y reduce la
              transferencia de ruido. Cada aplicación es personalizada para lograr el equilibrio perfecto entre desempeño y
              presupuesto.
            </p>
          </div>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl bg-slate-950/80 border border-white/5 p-4 items-start">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-emerald-50/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-slate-950 border-y border-[#0c5ce6]/15">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div className="space-y-2">
              <p className="text-[#f3992e] font-semibold uppercase tracking-wide">Galería</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Aplicaciones recientes</h2>
              <p className="text-blue-50/80 max-w-2xl">
                Visuales basados en nuestra paleta para mostrar la calidad del sellado, la continuidad de la espuma y el cuidado en la
                preparación de superficies metálicas y de lámina.
              </p>
            </div>
            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-blue-50/70 border border-white/10">
              Colores basados en el logo oficial de la marca
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#0c5ce6]/20 bg-slate-900/60">
              <Image src="/brand/roof-application.svg" alt="Sellado de techos con espuma" width={1200} height={700} className="object-cover w-full h-full" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                <p className="text-sm text-blue-50/70">Aplicación proyectada</p>
                <p className="font-semibold text-white">Sellado continuo en cubiertas</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#0c5ce6]/20 bg-slate-900/60">
              <Image src="/brand/warehouse-prep.svg" alt="Preparación de nave industrial" width={1200} height={700} className="object-cover w-full h-full" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                <p className="text-sm text-blue-50/70">Protección duradera</p>
                <p className="font-semibold text-white">Impermeabilización integral de naves</p>
              </div>
      <section id="proceso" className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4">
          <p className="text-emerald-400 font-semibold uppercase tracking-wide">Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Instalación transparente y con seguimiento</h2>
          <p className="text-emerald-50/80">
            Nuestro equipo acompaña cada fase para asegurar una aplicación segura, limpia y con resultados medibles.
          </p>
          <ol className="space-y-3 text-emerald-50/80">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-200 flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600/30 to-slate-900/80 border border-white/5 p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-200">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-emerald-50/70">Respuesta inmediata</p>
              <p className="text-xl font-semibold text-white">Habla con un especialista</p>
            </div>
          </div>
          <p className="text-sm text-emerald-50/80 mb-6">
            Te asesoramos para elegir la densidad, el espesor y el sistema de aplicación que mejor se adapte a tu industria.
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-emerald-50/70">Diagnóstico y cotización</span>
              <span className="font-semibold text-white">Sin costo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-50/70">Visita técnica</span>
              <span className="font-semibold text-white">48 horas</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-50/70">Garantía de aplicación</span>
              <span className="font-semibold text-white">5 años</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-900/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20 text-center space-y-6">
          <p className="text-[#f3992e] font-semibold uppercase tracking-wide">Agenda tu proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Listos para diseñar la solución ideal en poliuretano</h2>
          <p className="text-blue-50/80 max-w-3xl mx-auto">
          <p className="text-emerald-400 font-semibold uppercase tracking-wide">Agenda tu proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Listos para diseñar la solución ideal en poliuretano</h2>
          <p className="text-emerald-50/80 max-w-3xl mx-auto">
            Envíanos los metros cuadrados, uso del espacio y fecha objetivo. Nuestro equipo técnico te responderá con una
            propuesta clara de tiempos, materiales y garantías.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@hernandezimper.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f3992e] px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
            >
              contacto@hernandezimper.com
            </a>
            <a
              href="tel:+5215512345678"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0c5ce6]/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              href="mailto:contacto@polyuprotect.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] transition"
            >
              contacto@polyuprotect.com
            </a>
            <a
              href="tel:+5215512345678"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              +52 1 55 1234 5678
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
