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
import React from "react";
import {AiFillFacebook, AiFillGoogleSquare, AiOutlineFacebook, AiOutlineWhatsApp} from "react-icons/ai";

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
    title: "Poliuretano",
    detail:
        "Aislamiento y sellado continuo que elimina filtraciones y mejora el rendimiento térmico. Ideal para techos, naves industriales y comercios.",
  },
  {
    title: "Papel prefabricado",
    detail:
        "Sistema prefabricado de alto desempeño para cubiertas: instalación rápida, excelente impermeabilidad y mayor durabilidad con espesores controlados.",
  },
  {
    title: "Aplicación de chapopote",
    detail:
        "Impermeabilización asfáltica de alta adherencia que protege contra humedad y lluvia. Recomendado para azoteas y superficies.",
  },
];

const steps = [
  "Diagnóstico técnico gratuito en tu sitio",
  "Propuesta detallada con espesores y rendimiento esperado",
  "Aplicación profesional",
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
                Impermeabilizamos, aislamos y sellamos con poliuretano espreado de alta densidad. </h1>
              <p className="text-lg text-blue-50/80">
                Eliminamos filtraciones, reducimos consumo energético y prolongamos la vida útil de tus instalaciones.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#f3992e] px-6 py-3 text-slate-950 font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Agenda una visita
                  <FaPhoneAlt/>
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
                  <FaCheckCircle className="text-[#f3992e]"/>
                  <span className="text-sm text-blue-50/80">Instaladores certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaLeaf className="text-blue-200"/>
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
                  <FaShieldAlt className="text-[#f3992e] text-2xl mb-4"/>
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
              <span
                  className="h-8 w-8 rounded-full bg-[#0c5ce6]/20 text-[#f3992e] flex items-center justify-center font-bold">
                {i + 1}
              </span>
                  <span className="text-blue-50/80">{step}</span>
                </li>
            ))}
          </ol>
        </section>

        {/* CONTACTO */}
          {/* CONTACTO */}
          <section id="contacto" className="bg-slate-900/60 border-t border-white/5">
              <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                  <h2 className="text-3xl font-bold">Contacto</h2>
                  <p className="mt-3 text-blue-50/80">
                      Cuéntanos qué necesitas y te enviamos una propuesta técnica clara, con tiempos y materiales recomendados.
                  </p>

                  {/* CTA principal */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                          href="mailto:contacto@hernandezimper.com"
                          className="rounded-lg bg-[#f3992e] px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition"
                      >
                          contacto@hernandezimper.com
                      </a>

                      <a
                          href="tel:+526141314603"
                          className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white/90 hover:border-white/50 hover:text-white transition"
                      >
                          +52 614 131 4603
                      </a>
                  </div>

                  {/* Redes / Acciones */}

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                      {/* WhatsApp */}
                      <a
                          href="https://wa.me/5216141314603?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n."
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 hover:bg-slate-950/55 hover:border-white/20 transition"
                      >
                          <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
            <AiOutlineWhatsApp className="text-2xl text-emerald-300" />
          </span>

                              <div className="min-w-0">
                                  <p className="text-sm text-white/70">WhatsApp</p>
                                  <p className="mt-1 font-semibold text-white">Cotiza por mensaje</p>
                                  <p className="mt-1 text-xs text-white/60">Respuesta rápida</p>
                              </div>
                          </div>
                      </a>

                      {/* Google */}
                      <a
                          href="https://share.google/Wz59zQhGrAETbPFYA"
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 hover:bg-slate-950/55 hover:border-white/20 transition"
                      >
                          <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
            <AiFillGoogleSquare className="text-2xl text-amber-300" />
          </span>

                              <div className="min-w-0">
                                  <p className="text-sm text-white/70">Google</p>
                                  <p className="mt-1 font-semibold text-white">Encuéntranos en Maps</p>
                                  <p className="mt-1 text-xs text-white/60">Ubicación y reseñas</p>
                              </div>
                          </div>
                      </a>

                      {/* Facebook */}
                      <a
                          href="https://www.facebook.com/profile.php?id=100064214340903&locale=af_ZA#"
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 hover:bg-slate-950/55 hover:border-white/20 transition"
                      >
                          <div className="flex items-start gap-3">
                               <span
                                   className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
                                   <AiOutlineFacebook className="text-2xl text-sky-300"/>
                               </span>

                              <div className="min-w-0">
                                  <p className="text-sm text-white/70">Facebook</p>
                                  <p className="mt-1 font-semibold text-white">Ver trabajos y reseñas</p>
                                  <p className="mt-1 text-xs text-white/60">Fotos de proyectos</p>
                              </div>
                          </div>
                      </a>
                  </div>

                  {/* Microcopy */}
                  <p className="mt-8 text-xs text-white/50">
                      Horario sugerido: Lun–Sáb · Respuesta el mismo día en la mayoría de casos.
                  </p>
              </div>
          </section>


      </main>
  );
}
