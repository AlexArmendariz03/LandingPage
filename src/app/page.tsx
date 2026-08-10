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

const primaryWhatsappHref =
    "https://wa.me/5216147464430?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.";

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
    { label: "+52 614 746 4430", href: primaryWhatsappHref },
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
        <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0b3f99] to-[#0c5ce6]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(243,153,46,0.12),transparent_28%)]" />
                <div className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-[#f3992e]/10 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                    <div className="max-w-3xl space-y-6" data-aos="fade-right">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dbeafe] shadow-md shadow-slate-950/10 backdrop-blur">
                            Hernández Impermeabilizaciones & Poliuretano
                        </span>
                        <div className="space-y-4">
                            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
                                Impermeabilizamos superficies con materiales de la más alta calidad para proteger tu hogar o negocio.
                            </h1>
                            <p className="max-w-2xl text-lg leading-relaxed text-blue-50/80">
                                Eliminamos filtraciones, mejoramos el aislamiento térmico y protegemos tus instalaciones para climas extremos.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3992e] px-6 py-3 font-bold text-slate-950 shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-[#ffad45]">
                                Agenda una visita
                                <FaPhoneAlt />
                            </a>
                            <a href="#servicios" className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
                                Ver servicios
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-2.5 pt-1">
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                                <FaCheckCircle className="text-[#f3992e]" />
                                <span className="text-sm text-blue-50/85">Mano de obra especializada</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                                <FaLeaf className="text-blue-200" />
                                <span className="text-sm text-blue-50/85">Materiales confiables con alto desempeño</span>
                            </div>
                            <Link href="/seguridad" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-sm font-semibold text-blue-100 transition hover:bg-slate-950/50">
                                <FaShieldAlt className="text-[#f3992e]" />
                                Validación antifraude disponible
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none" data-aos="fade-left">
                        <div className="absolute -inset-2 rounded-[2rem] bg-white/5 blur-xl" />
                        <HeroCarousel />
                    </div>
                </div>
            </section>

            <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end" data-aos="fade-up">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Nuestros servicios</p>
                        <h2 className="text-3xl font-bold md:text-4xl">Nuestros servicios</h2>
                        <p className="mt-4 text-blue-50/80">
                            Cada proyecto se define según el tipo de superficie, nivel de exposición al clima y objetivo principal del
                            cliente: corregir filtraciones, reducir temperatura o extender la vida útil de la cubierta.
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, index) => (
                        <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-[#f3992e]/40 hover:bg-slate-900" data-aos="zoom-in-up" data-aos-delay={index * 90}>
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0c5ce6] to-[#f3992e] opacity-70" />
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:bg-white/10">{s.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-blue-50/80">{s.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="beneficios" className="border-y border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-5 md:grid-cols-3">
                        {highlights.map((h, index) => (
                            <div key={h.title} className="rounded-2xl border border-[#0c5ce6]/20 bg-slate-950/80 p-5" data-aos="fade-up" data-aos-delay={index * 120}>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">{h.icon}</div>
                                <h3 className="font-semibold">{h.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-blue-50/80">{h.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="impacto" className="mx-auto max-w-6xl px-6 py-20">
                <div data-aos="fade-up" className="mb-8 max-w-3xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Información que genera valor para tu decisión</h2>
                    <p className="mt-4 text-blue-50/80">Una solución diseñada que reduce los costos causados por la humedad, mejora el aislamiento térmico y asegura que tus operaciones no se detengan.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {businessImpact.map((item, i) => (
                        <article key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5" data-aos="fade-up" data-aos-delay={i * 90}>
                            <div className="flex items-start gap-3"><FaClipboardCheck className="mt-1 text-[#f3992e]" /><p className="text-sm leading-relaxed text-blue-50/85">{item}</p></div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="proceso" className="mx-auto max-w-6xl px-6 py-20">
                <div data-aos="fade-up" className="mb-8 max-w-3xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Nuestro proceso</h2>
                    <p className="mt-4 text-blue-50/80">Seguimos un proceso claro para que tengas visibilidad del trabajo, los tiempos y los resultados.</p>
                </div>
                <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, i) => (
                        <li key={step} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5" data-aos="fade-up" data-aos-delay={i * 100}>
                            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0c5ce6]/20 font-bold text-[#f3992e]">{i + 1}</span>
                            <span className="text-sm leading-relaxed text-blue-50/80">{step}</span>
                        </li>
                    ))}
                </ol>
            </section>
            <section id="galeria" className="border-y border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end" data-aos="fade-up">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Galería de proyectos realizados</h2>
                            <p className="mt-4 text-blue-50/80">Conoce resultados reales de aplicación en campo. Cada imagen refleja acabados, protección y calidad
                            de ejecución en diferentes tipos de superficies.</p>
                        </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projectGallery.map((photo, index) => (
                            <article
                                key={photo.src}
                                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-0.5 hover:border-[#f3992e]/35 hover:shadow-xl hover:shadow-slate-950/30"
                                data-aos="zoom-in"
                                data-aos-delay={index * 90}
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                                    <span className="absolute bottom-4 left-4 rounded-full bg-[#f3992e] px-3 py-1 text-xs font-bold text-slate-950 shadow-md shadow-slate-950/20">{photo.label}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contacto" className="border-t border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-5xl px-6 py-20" data-aos="fade-up">
                    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b3f99] p-6 shadow-2xl shadow-slate-950/40 md:p-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold md:text-4xl">Contacto</h2>
                            <p className="mt-4 text-blue-50/80">Convierte tu problema en una solución duradera.
                                Te asesoramos sin compromiso y te damos una propuesta clara desde el primer contacto.</p>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {valueSection.map((item, index) => (
                                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <FaClipboardCheck className="mb-3 text-[#f3992e]" />
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-blue-50/75">{item.detail}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={100}>
                            <a href="mailto:impermeabilizaciones29@gmail.com" className="inline-flex items-center justify-center rounded-xl bg-[#f3992e] px-6 py-3 font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:scale-[1.01]">
                                impermeabilizaciones29@gmail.com
                            </a>
                        </div>

                        <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-400/10 p-4 text-left text-sm text-amber-100">
                            <p>Aviso de prevención: nunca solicitamos NIP, contraseñas, códigos OTP ni pagos a cuentas no verificadas. Antes de transferir, valida datos desde la sección de <Link className="underline" href="/seguridad">seguridad</Link>.</p>
                        </div>

                        <div className="mt-10 grid w-full grid-cols-1 gap-4 text-left md:grid-cols-3">
                            <a href="https://share.google/Wz59zQhGrAETbPFYA" target="_blank" rel="noopener noreferrer nofollow" className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:border-white/20 hover:bg-slate-950/55" data-aos="fade-up" data-aos-delay={100}>
                                <div className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15"><AiFillGoogleSquare className="text-2xl text-amber-300" /></span><div className="min-w-0"><p className="text-sm text-white/70">Google</p><p className="mt-1 font-semibold text-white">Encuéntranos en Maps</p><p className="mt-1 text-xs text-white/60">Ubicación y reseñas</p></div></div>
                            </a>
                            <div className="relative" data-aos="fade-up" data-aos-delay={150}>
                                <button type="button" onClick={() => setShowWhatsAppMenu((prev) => !prev)} className="group w-full rounded-xl border border-emerald-300/40 bg-emerald-500/20 px-5 py-4 transition hover:bg-emerald-500/30">
                                    <span className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15"><AiOutlineWhatsApp className="text-2xl text-emerald-300" /></span><span className="min-w-0 text-left"><span className="block text-sm text-emerald-100/80">WhatsApp</span><span className="mt-1 block font-semibold text-emerald-100">Solicita presupuesto</span><span className="mt-1 text-xs text-emerald-100/70 block">Elige un número</span></span></span>
                                </button>
                                {showWhatsAppMenu && (<div className="absolute left-1/2 z-10 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-white/15 bg-slate-900 shadow-xl">{whatsappOptions.map((option) => (<a key={option.label} href={option.href} target="_blank" rel="noopener noreferrer nofollow" className="block px-4 py-3 text-sm text-white/90 transition hover:bg-white/10">Solicitar presupuesto: {option.label}</a>))}</div>)}
                            </div>
                            <a href="https://www.facebook.com/profile.php?id=100064214340903&locale=af_ZA#" target="_blank" rel="noopener noreferrer nofollow" className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:border-white/20 hover:bg-slate-950/55" data-aos="fade-up" data-aos-delay={200}>
                                <div className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15"><AiOutlineFacebook className="text-2xl text-sky-300" /></span><div className="min-w-0"><p className="text-sm text-white/70">Facebook</p><p className="mt-1 font-semibold text-white">Ver trabajos y reseñas</p><p className="mt-1 text-xs text-white/60">Fotos de proyectos</p></div></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <a href={primaryWhatsappHref} target="_blank" rel="noopener noreferrer nofollow" className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-950/40 transition hover:scale-105 md:hidden">
                <AiOutlineWhatsApp className="text-xl" />
                Solicita presupuesto
            </a>

            <footer className="border-t border-white/10 bg-slate-950">
                <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-white/60">
                    <p>© {currentYear} Hernández Impermeabilizaciones &amp; Poliuretano. Todos los derechos reservados.</p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <Link href="/aviso-privacidad" className="rounded-full border border-white/20 px-3 py-1 transition hover:border-white/40 hover:text-white">Aviso de privacidad</Link>
                        <Link href="/seguridad" className="rounded-full border border-white/20 px-3 py-1 transition hover:border-white/40 hover:text-white">Seguridad</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
