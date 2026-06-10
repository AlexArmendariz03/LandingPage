"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaCheckCircle,
    FaClipboardCheck,
    FaLeaf,
    FaPhoneAlt,
    FaPaintRoller,
    FaRulerCombined,
    FaLayerGroup,
    FaShieldAlt,
    FaTint,
    FaTools,
} from "react-icons/fa";
import { MdRoofing } from "react-icons/md";
import { HeroCarousel } from "@/app/components/heroCarrusel";
import { AiFillGoogleSquare, AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
    {
        title: "Durabilidad garantizada",
        description:
            "Recubrimientos de alta resistencia a humedad, rayos UV y abrasión para prolongar la vida útil de cubiertas y superficies expuestas.",
        icon: <FaShieldAlt className="text-[#0c5ce6] text-2xl" />,
    },
    {
        title: "Aplicación limpia y rápida",
        description:
            "Aplicación técnica con equipo especializado para lograr acabados uniformes, seguros y con menor desperdicio de material.",
        icon: <FaTools className="text-[#f3992e] text-2xl" />,
    },
];

const services = [
    {
        title: "Poliuretano",
        detail:
            "Aislamiento y sellado continuo para controlar filtraciones y mejorar el confort térmico. Recomendadas para naves industriales, casa habitación, locales comerciales, negocios y cuartos fríos. Material recomendado para techos, paredes y pisos con superficies planas o curvas.",
        icon: <FaTools className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Papel prefabricado",
        detail:
            "Sistema de instalación eficiente de grosor controlado que brinda impermeabilidad confiable, duradera  y de menor mantenimiento en superficies lisas.",
        icon: <FaLayerGroup className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Aplicación de chapopote",
        detail:
            "Impermeabilización asfáltica de alta adherencia para proteger contra humedad y lluvia. Ideal para superficies lisas.",
        icon: <FaTint className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Pintura elastomérica con malla reforzada",
        detail:
            "Sistema de aplicación de pintura elastomérica con malla reforzada ideal para superficies lisas o curvas",
        icon: <FaPaintRoller className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Mantenimiento preventivo",
        detail:
            "Aplicación de pintura elastomérica para prevenir daños en materiales aplicados como poliuretano, papel prefabricado y chapopote. Recomendado para techos, paredes y pisos con superficies lisas y curvas.",
        icon: <MdRoofing className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Nivelación de techos y lagunas",
        detail:
            "Nivelación de superficies con problemas de caída y encharcamientos. Recomendado para techos de loza y madera.",
        icon: <FaRulerCombined className="text-[#f3992e] text-xl" />,
    },
];

const whatsappOptions = [
    { label: "+52 614 746 4430", href: "https://wa.me/5216147464430?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n." },
    { label: "+52 614 131 4603", href: "https://wa.me/5216141314603?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n." },
];

const steps = [
    "Diagnóstico técnico para identificar filtraciones, humedad y puntos críticos.",
    "Medición de superficies.",
    "Entrega de presupuesto claro con recomendación estratégica de materiales para maximizar resultados.",
    "Aprobación del proyecto y solicitud de anticipo para programar e iniciar la obra.",
    "Ejecución del sistema de impermeabilización conforme a especificaciones técnicas.",
    "Entrega final con garantía por escrito y liquidación del presupuesto.",
];

const valueSection = [
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
            "Nos enfocamos en reducir filtraciones, bajar costos de mantenimiento y extender la vida útil de la cubierta.",
    },
];


const projectGallery = [
    {
        src: "/trabajos/galeriaPoluretano.jpeg",
        alt: "Aplicación profesional de impermeabilizante en techo",
        label: "Poliuretano",
    },
    {
        src: "/trabajos/galeriaPapel.jpeg",
        alt: "Aplicación de recubrimiento en bodega industrial",
        label: "Papel prefabricado",
    },
    {
        src: "/trabajos/galeriaChapopote.jpeg",
        alt: "Recubrimiento de poliuretano terminado en cubierta",
        label: "Aplicación de chapopote",
    },
    {
        src: "/trabajos/galeriaElastomerica.jpeg",
        alt: "Techo impermeabilizado con acabado blanco reflectivo",
        label: "Pintura elastomérica con malla reforzada",
    },
    {
        src: "/trabajos/galeriaMantenimineto.jpeg",
        alt: "Mantenimiento preventivo",
        label: "Mantenimiento preventivo y sellado",
    },
    {
        src: "/trabajos/galeriaNivelacion.jpeg",
        alt: "Representación de trabajo de impermeabilización en cubierta",
        label: "Nivelación de techos y lagunas",
    },
];

const businessImpact = [
    "Elimina gastos innecesarios al detener filtraciones de forma definitiva.",
    "Ahorra energía con un mejor aislamiento térmico en tus espacios.",
    "Evita pérdidas y paros operativos causados por humedad.",
    "Trabajo con mano de obra garantizada por escrito.",
];

export default function LandingPage() {
    const currentYear = new Date().getFullYear();
    const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-quart",
            offset: 80,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0c5ce6] via-[#0b3f99] to-slate-950">
                <div className="relative max-w-6xl mx-auto px-6 py-20 grid gap-10 lg:grid-cols-2 items-center">
                    <div className="space-y-6" data-aos="fade-right">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#cfe4ff]">
              Hernández Impermeabilizaciones & Poliuretano
            </span>
                        <h1 className="text-2xl md:text-4xl font-extrabold">
                            Impermeabilizamos superficies con materiales de la más alta calidad para proteger tu hogar o negocio.
                        </h1>
                        <p className="text-lg text-blue-50/80">
                            Eliminamos filtraciones, mejoramos el aislamiento térmico y protegemos tus instalaciones para climas extremos.
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

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#f3992e]" />
                                <span className="text-sm text-blue-50/80">Mano de obra especializada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLeaf className="text-blue-200" />
                                <span className="text-sm text-blue-50/80">
                  Materiales confiables con alto desempeño
                </span>
                            </div>
                            <Link
                                href="/seguridad"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/35 px-3 py-1 text-xs font-semibold text-blue-100 hover:bg-slate-900/60 transition"
                            >
                                <FaShieldAlt className="text-[#f3992e]" />
                                Validación antifraude disponible
                            </Link>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <HeroCarousel />
                    </div>
                </div>
            </section>

            <section id="servicios" className="max-w-6xl mx-auto px-6 py-20">
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-4">Nuestros servicios</h2>
                    <p className="text-blue-50/80 mb-8">
                        Cada proyecto se define según el tipo de superficie, nivel de exposición al clima y objetivo principal del
                        cliente: corregir filtraciones, reducir temperatura o extender la vida útil de la cubierta.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {services.map((s, index) => (
                        <div
                            key={s.title}
                            className="h-full rounded-2xl bg-slate-900/80 border border-[#0c5ce6]/20 p-5 flex items-start gap-3"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                        >
                            <span className="shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                {s.icon}
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold mb-1.5 leading-tight">{s.title}</h3>
                                <p className="text-blue-50/80 text-sm leading-relaxed">{s.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="beneficios" className="bg-slate-900/60 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-20 grid gap-6 md:grid-cols-2">
                    {highlights.map((h, index) => (
                        <div
                            key={h.title}
                            className="flex gap-4 bg-slate-950/80 p-4 rounded-xl border border-[#0c5ce6]/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            {h.icon}
                            <div>
                                <h3 className="font-semibold">{h.title}</h3>
                                <p className="text-sm text-blue-50/80">{h.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="impacto" className="max-w-6xl mx-auto px-6 py-20">
                <div data-aos="fade-up" className="mb-8">
                    <h2 className="text-3xl font-bold mb-3">Información que genera valor para tu decisión</h2>
                    <p className="text-blue-50/80">
                        Una solución diseñada que reduce los costos causados por la humedad, mejora el aislamiento térmico y asegura que tus operaciones no se detengan.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {businessImpact.map((item, i) => (
                        <article
                            key={item}
                            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                            data-aos="fade-up"
                            data-aos-delay={i * 90}
                        >
                            <div className="flex items-start gap-3">
                                <FaClipboardCheck className="mt-1 text-[#f3992e]" />
                                <p className="text-blue-50/85 text-sm leading-relaxed">{item}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="proceso" className="max-w-6xl mx-auto px-6 py-20">
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-6">Nuestro proceso</h2>
                    <p className="text-blue-50/80 mb-6">
                        Seguimos un proceso claro para que tengas visibilidad del trabajo, los tiempos y los resultados.
                    </p>
                </div>

                <ol className="space-y-4">
                    {steps.map((step, i) => (
                        <li
                            key={step}
                            className="flex gap-3"
                            data-aos="fade-up"
                            data-aos-delay={i * 120}
                        >
              <span className="h-8 w-8 rounded-full bg-[#0c5ce6]/20 text-[#f3992e] flex items-center justify-center font-bold">
                {i + 1}
              </span>
                            <span className="text-blue-50/80">{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="galeria" className="bg-slate-900/60 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-3">Galería de proyectos realizados</h2>
                        <p className="text-blue-50/80 mb-10">
                            Conoce resultados reales de aplicación en campo. Cada imagen refleja acabados, protección y calidad
                            de ejecución en diferentes tipos de superficies.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                        {projectGallery.map((photo, index) => (
                            <article
                                key={photo.src}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70"
                                data-aos="zoom-in"
                                data-aos-delay={index * 90}
                            >
                                <div className="relative h-52 w-full">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="border-t border-white/10 px-4 py-3 text-sm text-blue-50/85">{photo.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contacto" className="bg-slate-900/60 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold">Contacto</h2>
                    <p className="mt-3 text-blue-50/80">
                        Convierte tu problema en una solución duradera.
                        Te asesoramos sin compromiso y te damos una propuesta clara desde el primer contacto.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay={100}>
                        <a
                            href="mailto:impermeabilizaciones29@gmail.com"
                            className="rounded-lg bg-[#f3992e] px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition"
                        >
                            impermeabilizaciones29@gmail.com
                        </a>
                    </div>

                    <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-400/10 p-4 text-left text-sm text-amber-100">
                        <p>
                            Aviso de prevención: nunca solicitamos NIP, contraseñas, códigos OTP ni pagos a cuentas no verificadas.
                            Antes de transferir, valida datos desde la sección de <Link className="underline" href="/seguridad">seguridad</Link>.
                        </p>
                    </div>

                    <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        <a
                            href="https://share.google/Wz59zQhGrAETbPFYA"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 hover:bg-slate-950/55 hover:border-white/20 transition"
                            data-aos="fade-up"
                            data-aos-delay={100}
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
                        <div className="relative" data-aos="fade-up" data-aos-delay={150}>
                            <button
                                type="button"
                                onClick={() => setShowWhatsAppMenu((prev) => !prev)}
                                className="group w-full rounded-xl border border-emerald-300/40 bg-emerald-500/20 px-5 py-4 hover:bg-emerald-500/30 transition"
                            >
                                <span className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
                                        <AiOutlineWhatsApp className="text-2xl text-emerald-300" />
                                    </span>
                                    <span className="min-w-0 text-left">
                                        <span className="text-sm text-emerald-100/80 block">WhatsApp</span>
                                        <span className="mt-1 font-semibold text-emerald-100 block">Solicita presupuesto</span>
                                        <span className="mt-1 text-xs text-emerald-100/70 block">Elige un número</span>
                                    </span>
                                </span>
                            </button>
                            {showWhatsAppMenu && (
                                <div className="absolute left-1/2 z-10 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-white/15 bg-slate-900 shadow-xl">
                                    {whatsappOptions.map((option) => (
                                        <a
                                            key={option.label}
                                            href={option.href}
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                            className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition"
                                        >
                                            Solicitar presupuesto: {option.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a
                            href="https://www.facebook.com/profile.php?id=100064214340903&locale=af_ZA#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 hover:bg-slate-950/55 hover:border-white/20 transition"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
                                  <AiOutlineFacebook className="text-2xl text-sky-300" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-sm text-white/70">Facebook</p>
                                    <p className="mt-1 font-semibold text-white">Ver trabajos y reseñas</p>
                                    <p className="mt-1 text-xs text-white/60">Fotos de proyectos</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/10 bg-slate-950">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-white/60">
                    <p>
                        © {currentYear} Hernández Impermeabilizaciones &amp; Poliuretano. Todos los derechos reservados.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <Link href="/aviso-privacidad" className="rounded-full border border-white/20 px-3 py-1 hover:text-white hover:border-white/40 transition">Aviso de privacidad</Link>
                        <Link href="/seguridad" className="rounded-full border border-white/20 px-3 py-1 hover:text-white hover:border-white/40 transition">Seguridad</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
