"use client";
import {
  FaCheckCircle,
  FaLeaf,
  FaPhoneAlt,
  FaShieldAlt,
  FaThermometerHalf,
  FaTools,
} from "react-icons/fa";
import { HeroCarousel } from "@/app/components/heroCarrusel";

const highlights = [
  {
    title: "Aislamiento térmico superior",
    description:
      "Espuma proyectada de celda cerrada que mantiene la temperatura estable y reduce el consumo energético hasta en un 40%.",
    icon: <FaThermometerHalf className="text-[#f3992e] text-2xl" />,
  },
  {
    title: "Durabilidad garantizada",
    description:
      "Recubrimientos resistentes a la humedad, rayos UV y abrasión para techos, muros y cámaras frigoríficas.",
    icon: <FaShieldAlt className="text-[#0c5ce6] text-2xl" />,
  },
  {
    title: "Aplicación limpia y rápida",
    description:
      "Equipos de última generación que aseguran una instalación segura, uniforme y sin desperdicios.",
    icon: <FaTools className="text-[#f3992e] text-2xl" />,
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
      "Soluciones de alto rendimiento para mantener la cadena de frío con espesores calibrados.",
  },
  {
    title: "Aislamiento acústico",
    detail:
      "Capas de poliuretano que reducen el ruido exterior y mejoran el confort interior.",
  },
];

const steps = [
  "Diagnóstico técnico gratuito en tu sitio",
  "Propuesta detallada con espesores y rendimiento esperado",
  "Aplicación profesional certificada",
  "Garantía escrita y seguimiento postservicio",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c5ce6] via-[#0b3f99] to-slate-950">
        <div className="relative max-w-6xl mx-auto px-6 py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#cfe4ff]">
              Hernández Impermeabilizaciones & Poliuretano
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              Impermeabilizamos, aislamos y sellamos con poliuretano espreado de alta densidad.            </h1>
            <p className="text-lg text-blue-50/80">
              Eliminamos filtraciones, reducimos consumo energético y prolongamos la vida útil de tus instalaciones.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f3992e] px-6 py-3 text-slate-950 font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                Agenda una visita
                <FaPhoneAlt />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Ver servicios
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f3992e]" />
                <span className="text-sm text-blue-50/80">Instaladores certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf className="text-blue-200" />
                <span className="text-sm text-blue-50/80">Materiales ecológicos</span>
              </div>
            </div>
          </div>

          <HeroCarousel/>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Nuestros servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-900/80 border border-[#0c5ce6]/20 p-6">
              <FaShieldAlt className="text-[#f3992e] text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-blue-50/80 text-sm">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="bg-slate-900/60 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 grid gap-6 md:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-4 bg-slate-950/80 p-4 rounded-xl border border-[#0c5ce6]/20">
              {h.icon}
              <div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="text-sm text-blue-50/80">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Nuestro proceso</h2>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-[#0c5ce6]/20 text-[#f3992e] flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="text-blue-50/80">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-slate-900/60 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">Agenda tu proyecto</h2>
          <p className="text-blue-50/80">
            Envíanos los datos de tu proyecto y recibe una propuesta técnica clara.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@hernandezimper.com"
              className="rounded-lg bg-[#f3992e] px-6 py-3 font-semibold text-slate-950"
            >
              contacto@hernandezimper.com
            </a>
            <a
              href="tel:+5215512345678"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold"
            >
              +52 1 55 1234 5678
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
