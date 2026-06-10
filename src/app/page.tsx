"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaAward,
    FaBolt,
    FaCalendarCheck,
    FaCheckCircle,
    FaClipboardCheck,
    FaClock,
    FaLeaf,
    FaMapMarkerAlt,
    FaPaintRoller,
    FaRulerCombined,
    FaLayerGroup,
    FaShieldAlt,
    FaStar,
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
    "https://wa.me/5216147464430?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.%20Te%20comparto%20fotos%20y%20medidas%20para%20agendar%20una%20visita.";

const highlights = [
    {
        title: "Garantía por escrito",
        description:
            "Entregamos el proyecto con garantía documentada y recomendaciones de mantenimiento para cuidar tu inversión.",
        icon: <FaShieldAlt className="text-[#0c5ce6] text-2xl" />,
    },
    {
        title: "Diagnóstico técnico",
        description:
            "Revisamos filtraciones, pendientes, humedad y puntos críticos antes de recomendar el sistema correcto.",
        icon: <FaClipboardCheck className="text-[#f3992e] text-2xl" />,
    },
    {
        title: "Respuesta ágil",
        description:
            "Atendemos cotizaciones por WhatsApp, correo y visita técnica para que avances sin vueltas innecesarias.",
        icon: <FaBolt className="text-emerald-300 text-2xl" />,
    },
];

const trustStats = [
    { value: "6", label: "sistemas de impermeabilización" },
    { value: "24 h", label: "para iniciar tu diagnóstico" },
    { value: "100%", label: "cotización clara y por escrito" },
];

const services = [
    {
        title: "Poliuretano",
        detail:
            "Aislamiento y sellado continuo para controlar filtraciones y mejorar el confort térmico. Recomendado para naves industriales, casa habitación, locales comerciales, negocios y cuartos fríos.",
        badge: "Ahorro térmico",
        icon: <FaTools className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Papel prefabricado",
        detail:
            "Sistema de grosor controlado que brinda impermeabilidad confiable, duradera y de menor mantenimiento en superficies lisas.",
        badge: "Alta durabilidad",
        icon: <FaLayerGroup className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Aplicación de chapopote",
        detail:
            "Impermeabilización asfáltica de alta adherencia para proteger contra humedad y lluvia en superficies lisas.",
        badge: "Protección asfáltica",
        icon: <FaTint className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Pintura elastomérica con malla reforzada",
        detail:
            "Sistema reforzado ideal para superficies lisas o curvas que requieren flexibilidad, sellado y acabado reflectivo.",
        badge: "Acabado reflectivo",
        icon: <FaPaintRoller className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Mantenimiento preventivo",
        detail:
            "Aplicación de pintura elastomérica para prevenir daños en poliuretano, papel prefabricado y chapopote.",
        badge: "Evita reparaciones",
        icon: <MdRoofing className="text-[#f3992e] text-xl" />,
    },
    {
        title: "Nivelación de techos y lagunas",
        detail:
            "Corrección de superficies con problemas de caída y encharcamientos. Recomendado para techos de loza y madera.",
        badge: "Corrige encharcamientos",
        icon: <FaRulerCombined className="text-[#f3992e] text-xl" />,
    },
];

const whatsappOptions = [
    { label: "+52 614 746 4430", href: primaryWhatsappHref },
    { label: "+52 614 131 4603", href: "https://wa.me/5216141314603?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.%20Te%20comparto%20fotos%20y%20medidas%20para%20agendar%20una%20visita." },
];

const steps = [
    "Diagnóstico técnico para identificar filtraciones, humedad y puntos críticos.",
    "Medición de superficies y revisión de pendientes o lagunas.",
    "Presupuesto claro con materiales, alcance, tiempos estimados y garantía.",
    "Aprobación del proyecto y anticipo para programar la obra.",
    "Ejecución del sistema de impermeabilización conforme a especificaciones técnicas.",
    "Entrega final con garantía por escrito y recomendaciones de cuidado.",
];

const valueSection = [
    {
        title: "Cotización técnica clara",
        detail:
            "Recibes una propuesta con alcance, materiales recomendados, tiempos estimados y garantía para decidir con confianza.",
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
        result: "Aislamiento térmico y sellado continuo",
    },
    {
        src: "/trabajos/galeriaPapel.jpeg",
        alt: "Aplicación de recubrimiento en bodega industrial",
        label: "Papel prefabricado",
        result: "Sistema de alto espesor para superficies lisas",
    },
    {
        src: "/trabajos/galeriaChapopote.jpeg",
        alt: "Recubrimiento de poliuretano terminado en cubierta",
        label: "Aplicación de chapopote",
        result: "Protección asfáltica contra humedad",
    },
    {
        src: "/trabajos/galeriaElastomerica.jpeg",
        alt: "Techo impermeabilizado con acabado blanco reflectivo",
        label: "Pintura elastomérica con malla reforzada",
        result: "Acabado reflectivo y reforzado",
    },
    {
        src: "/trabajos/galeriaMantenimineto.jpeg",
        alt: "Mantenimiento preventivo",
        label: "Mantenimiento preventivo y sellado",
        result: "Extensión de vida útil del sistema",
    },
    {
        src: "/trabajos/galeriaNivelacion.jpeg",
        alt: "Representación de trabajo de impermeabilización en cubierta",
        label: "Nivelación de techos y lagunas",
        result: "Corrección de caída y encharcamientos",
    },
];

const businessImpact = [
    "Elimina gastos innecesarios al detener filtraciones de forma definitiva.",
    "Ahorra energía con un mejor aislamiento térmico en tus espacios.",
    "Evita pérdidas y paros operativos causados por humedad.",
    "Trabajo con mano de obra garantizada por escrito.",
];

const testimonials = [
    {
        quote:
            "Nos explicaron el problema, nos dieron opciones y dejaron el techo listo antes de la temporada de lluvias.",
        author: "Cliente residencial",
        context: "Impermeabilización de losa",
    },
    {
        quote:
            "La propuesta fue clara desde el inicio y el equipo trabajó limpio, rápido y con seguimiento constante.",
        author: "Negocio local",
        context: "Mantenimiento preventivo",
    },
    {
        quote:
            "El aislamiento con poliuretano ayudó a reducir la temperatura y protegió áreas críticas de la nave.",
        author: "Proyecto industrial",
        context: "Poliuretano en cubierta",
    },
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
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0c5ce6] via-[#0b3f99] to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,153,46,0.18),transparent_30%)]" />
                <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#f3992e]/20 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-7" data-aos="fade-right">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#cfe4ff] shadow-lg shadow-slate-950/20 backdrop-blur">
                            Hernández Impermeabilizaciones & Poliuretano
                        </span>
                        <div className="space-y-4">
                            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                                Detenemos filtraciones y protegemos tu techo con impermeabilización profesional garantizada.
                            </h1>
                            <p className="max-w-2xl text-lg leading-relaxed text-blue-50/85">
                                Diagnóstico técnico, materiales de alto desempeño y mano de obra especializada para hogares,
                                negocios, bodegas y naves industriales en Chihuahua.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href={primaryWhatsappHref}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3992e] px-6 py-3 font-bold text-slate-950 shadow-xl shadow-orange-500/25 transition hover:scale-[1.02]"
                            >
                                Cotizar por WhatsApp
                                <AiOutlineWhatsApp className="text-xl" />
                            </a>
                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
                            >
                                Ver soluciones
                            </a>
                        </div>

                        <div className="grid gap-3 pt-2 sm:grid-cols-3">
                            {trustStats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-white/15 bg-slate-950/25 p-4 backdrop-blur">
                                    <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                                    <p className="mt-1 text-xs leading-snug text-blue-50/75">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                                <FaCheckCircle className="text-[#f3992e]" />
                                <span className="text-sm text-blue-50/85">Mano de obra especializada</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                                <FaLeaf className="text-blue-200" />
                                <span className="text-sm text-blue-50/85">Materiales de alto desempeño</span>
                            </div>
                            <Link
                                href="/seguridad"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/35 px-3 py-1.5 text-sm font-semibold text-blue-100 transition hover:bg-slate-900/60"
                            >
                                <FaShieldAlt className="text-[#f3992e]" />
                                Validación antifraude
                            </Link>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
                        <HeroCarousel />
                    </div>
                </div>
            </section>

            <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end" data-aos="fade-up">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Soluciones especializadas</p>
                        <h2 className="text-3xl font-bold md:text-4xl">El sistema correcto para cada tipo de techo</h2>
                        <p className="mt-4 text-blue-50/80">
                            Definimos cada proyecto según superficie, exposición al clima y objetivo principal: corregir filtraciones,
                            reducir temperatura o extender la vida útil de la cubierta.
                        </p>
                    </div>
                    <a
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#f3992e]/40 px-5 py-3 font-semibold text-[#f3992e] transition hover:bg-[#f3992e]/10"
                    >
                        Agendar diagnóstico
                        <FaCalendarCheck />
                    </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, index) => (
                        <article
                            key={s.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-[#f3992e]/40 hover:bg-slate-900"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 90}
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0c5ce6] to-[#f3992e] opacity-70" />
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:bg-white/10">
                                    {s.icon}
                                </span>
                                <span className="rounded-full bg-[#f3992e]/10 px-3 py-1 text-xs font-semibold text-[#f3992e]">
                                    {s.badge}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-blue-50/80">{s.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="beneficios" className="border-y border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="mb-8" data-aos="fade-up">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Por qué elegirnos</p>
                        <h2 className="text-3xl font-bold md:text-4xl">Más que impermeabilizar: protegemos tu inversión</h2>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {highlights.map((h, index) => (
                            <div
                                key={h.title}
                                className="rounded-2xl border border-[#0c5ce6]/20 bg-slate-950/80 p-5"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                                    {h.icon}
                                </div>
                                <h3 className="font-semibold">{h.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-blue-50/80">{h.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="impacto" className="mx-auto max-w-6xl px-6 py-20">
                <div data-aos="fade-up" className="mb-8 max-w-3xl">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Decisión inteligente</p>
                    <h2 className="text-3xl font-bold md:text-4xl">Información que genera valor para tu decisión</h2>
                    <p className="mt-4 text-blue-50/80">
                        Una solución diseñada para reducir costos causados por humedad, mejorar el aislamiento térmico y asegurar que tus operaciones no se detengan.
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
                                <p className="text-sm leading-relaxed text-blue-50/85">{item}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="proceso" className="mx-auto max-w-6xl px-6 py-20">
                <div data-aos="fade-up" className="mb-8 max-w-3xl">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Proceso profesional</p>
                    <h2 className="text-3xl font-bold md:text-4xl">De la filtración a la solución garantizada</h2>
                    <p className="mt-4 text-blue-50/80">
                        Seguimos un proceso claro para que tengas visibilidad del trabajo, los tiempos y los resultados.
                    </p>
                </div>

                <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, i) => (
                        <li
                            key={step}
                            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0c5ce6]/20 font-bold text-[#f3992e]">
                                {i + 1}
                            </span>
                            <span className="text-sm leading-relaxed text-blue-50/80">{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="border-y border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div data-aos="fade-right">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Confianza real</p>
                            <h2 className="text-3xl font-bold md:text-4xl">Clientes que buscan una solución, no un parche</h2>
                            <p className="mt-4 text-blue-50/80">
                                Nuestro enfoque combina diagnóstico, materiales adecuados y seguimiento para que el trabajo dure más.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <article
                                    key={testimonial.author}
                                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="mb-4 flex gap-1 text-[#f3992e]">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <FaStar key={starIndex} />
                                        ))}
                                    </div>
                                    <p className="text-sm leading-relaxed text-blue-50/85">“{testimonial.quote}”</p>
                                    <p className="mt-4 font-semibold text-white">{testimonial.author}</p>
                                    <p className="text-xs text-blue-50/60">{testimonial.context}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="galeria" className="border-y border-white/5 bg-slate-900/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end" data-aos="fade-up">
                        <div className="max-w-3xl">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Proyectos realizados</p>
                            <h2 className="text-3xl font-bold md:text-4xl">Galería de aplicaciones en campo</h2>
                            <p className="mt-4 text-blue-50/80">
                                Conoce resultados reales de aplicación. Cada proyecto refleja acabados, protección y calidad de ejecución en diferentes tipos de superficies.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projectGallery.map((photo, index) => (
                            <article
                                key={photo.src}
                                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-lg shadow-slate-950/20"
                                data-aos="zoom-in"
                                data-aos-delay={index * 90}
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 rounded-full bg-[#f3992e] px-3 py-1 text-xs font-bold text-slate-950">
                                        {photo.label}
                                    </span>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm font-semibold text-white">{photo.result}</p>
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
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3992e]">Agenda tu visita</p>
                            <h2 className="text-3xl font-bold md:text-4xl">Convierte tu problema de humedad en una solución duradera</h2>
                            <p className="mt-4 text-blue-50/80">
                                Te asesoramos sin compromiso. Mándanos fotos, medidas aproximadas y ubicación para preparar una propuesta clara desde el primer contacto.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {valueSection.map((item, index) => (
                                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <FaAward className="mb-3 text-[#f3992e]" />
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-blue-50/75">{item.detail}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={100}>
                            <a
                                href={primaryWhatsappHref}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3992e] px-6 py-3 font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:scale-[1.01]"
                            >
                                Cotizar por WhatsApp
                                <AiOutlineWhatsApp className="text-xl" />
                            </a>
                            <a
                                href="mailto:impermeabilizaciones29@gmail.com"
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Enviar correo
                            </a>
                        </div>

                        <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-400/10 p-4 text-left text-sm text-amber-100">
                            <p>
                                Aviso de prevención: nunca solicitamos NIP, contraseñas, códigos OTP ni pagos a cuentas no verificadas.
                                Antes de transferir, valida datos desde la sección de <Link className="underline" href="/seguridad">seguridad</Link>.
                            </p>
                        </div>

                        <div className="mt-10 grid w-full grid-cols-1 gap-4 text-left md:grid-cols-3">
                            <a
                                href="https://share.google/Wz59zQhGrAETbPFYA"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:border-white/20 hover:bg-slate-950/55"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15">
                                        <AiFillGoogleSquare className="text-2xl text-amber-300" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-sm text-white/70">Google</p>
                                        <p className="mt-1 font-semibold text-white">Encuéntranos en Maps</p>
                                        <p className="mt-1 flex items-center gap-1 text-xs text-white/60"><FaMapMarkerAlt /> Ubicación y reseñas</p>
                                    </div>
                                </div>
                            </a>
                            <div className="relative" data-aos="fade-up" data-aos-delay={150}>
                                <button
                                    type="button"
                                    onClick={() => setShowWhatsAppMenu((prev) => !prev)}
                                    className="group w-full rounded-xl border border-emerald-300/40 bg-emerald-500/20 px-5 py-4 transition hover:bg-emerald-500/30"
                                >
                                    <span className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15">
                                            <AiOutlineWhatsApp className="text-2xl text-emerald-300" />
                                        </span>
                                        <span className="min-w-0 text-left">
                                            <span className="block text-sm text-emerald-100/80">WhatsApp</span>
                                            <span className="mt-1 block font-semibold text-emerald-100">Solicita presupuesto</span>
                                            <span className="mt-1 flex items-center gap-1 text-xs text-emerald-100/70"><FaClock /> Elige un número</span>
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
                                                className="block px-4 py-3 text-sm text-white/90 transition hover:bg-white/10"
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
                                className="group rounded-xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:border-white/20 hover:bg-slate-950/55"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 transition group-hover:bg-white/15">
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
                </div>
            </section>

            <a
                href={primaryWhatsappHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-950/40 transition hover:scale-105 md:hidden"
            >
                <AiOutlineWhatsApp className="text-xl" />
                Cotizar
            </a>

            <footer className="border-t border-white/10 bg-slate-950">
                <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-white/60">
                    <p>
                        © {currentYear} Hernández Impermeabilizaciones &amp; Poliuretano. Todos los derechos reservados.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <Link href="/aviso-privacidad" className="rounded-full border border-white/20 px-3 py-1 transition hover:border-white/40 hover:text-white">Aviso de privacidad</Link>
                        <Link href="/seguridad" className="rounded-full border border-white/20 px-3 py-1 transition hover:border-white/40 hover:text-white">Seguridad</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
