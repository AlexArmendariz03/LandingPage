"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaCheckCircle,
    FaClipboardCheck,
    FaExpand,
    FaLeaf,
    FaPhoneAlt,
    FaPaintRoller,
    FaRulerCombined,
    FaLayerGroup,
    FaShieldAlt,
    FaTimes,
    FaTint,
    FaTools,
} from "react-icons/fa";
import { MdRoofing } from "react-icons/md";
import { HeroCarousel } from "@/app/components/heroCarrusel";
import { AiFillGoogleSquare, AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const valuePoints = [
    {
        title: "Durabilidad garantizada",
        detail:
            "Recubrimientos de alta resistencia a humedad, rayos UV y abrasión para prolongar la vida útil de cubiertas y superficies expuestas.",
        icon: <FaShieldAlt className="text-[#0c5ce6] text-xl" />,
    },
    {
        title: "Aplicación limpia y rápida",
        detail:
            "Aplicación técnica con equipo especializado para lograr acabados uniformes, seguros y con menor desperdicio de material.",
        icon: <FaTools className="text-[#f3992e] text-xl" />,
    },
    {
        detail: "Elimina gastos innecesarios al detener filtraciones de forma definitiva.",
        icon: <FaClipboardCheck className="text-[#f3992e] text-xl" />,
    },
    {
        detail: "Ahorra energía con un mejor aislamiento térmico en tus espacios.",
        icon: <FaClipboardCheck className="text-[#f3992e] text-xl" />,
    },
    {
        detail: "Evita pérdidas y paros operativos causados por humedad.",
        icon: <FaClipboardCheck className="text-[#f3992e] text-xl" />,
    },
    {
        detail: "Trabajo con mano de obra garantizada por escrito.",
        icon: <FaClipboardCheck className="text-[#f3992e] text-xl" />,
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

export default function LandingPage() {
    const currentYear = new Date().getFullYear();
    const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setLightboxIndex(null);
            if (event.key === "ArrowRight") {
                setLightboxIndex((i) => (i === null ? null : (i + 1) % projectGallery.length));
            }
            if (event.key === "ArrowLeft") {
                setLightboxIndex((i) => (i === null ? null : (i - 1 + projectGallery.length) % projectGallery.length));
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-quart",
            offset: 80,
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <main className="min-h-screen text-white">
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/25 via-brand-blueDeep/40 to-ink-950" />
                    <div className="animate-drift absolute -top-24 -left-16 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
                    <div className="animate-drift-slow absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-brand-blueSoft/25 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_var(--bg-ink)_85%)]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center">
                    <div className="space-y-7" data-aos="fade-right">
                        <span className="eyebrow">
                            Hernández Impermeabilizaciones &amp; Poliuretano
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                            Impermeabilizamos superficies con materiales de{" "}
                            <span className="bg-gradient-to-r from-brand-orange to-brand-orangeSoft bg-clip-text text-transparent">la más alta calidad</span> para proteger tu hogar o negocio.
                        </h1>
                        <p className="text-lg text-slate-300/90 max-w-xl">
                            Eliminamos filtraciones, mejoramos el aislamiento térmico y protegemos tus instalaciones para climas extremos.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#contacto" className="btn-primary">
                                Agenda una visita
                                <FaPhoneAlt />
                            </a>
                            <a href="#servicios" className="btn-secondary">
                                Ver servicios
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-brand-orange" />
                                <span className="text-sm text-slate-300/90">Mano de obra especializada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLeaf className="text-brand-blueSoft" />
                                <span className="text-sm text-slate-300/90">
                  Materiales confiables con alto desempeño
                </span>
                            </div>
                            <Link
                                href="/seguridad"
                                className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-blue-100 hover:!border-brand-blueSoft/40 transition"
                            >
                                <FaShieldAlt className="text-brand-orange" />
                                Validación antifraude disponible
                            </Link>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <HeroCarousel />
                    </div>
                </div>
            </section>

            <section id="servicios" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                <div data-aos="fade-up" className="max-w-2xl mb-10">
                    <h2 className="text-3xl md:text-4xl section-heading mb-4">Nuestros servicios</h2>
                    <p className="text-slate-300/90 leading-relaxed">
                        Cada proyecto se define según el tipo de superficie, nivel de exposición al clima y objetivo principal del
                        cliente: corregir filtraciones, reducir temperatura o extender la vida útil de la cubierta.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {services.map((s, index) => (
                        <div
                            key={s.title}
                            className="glass-card h-full rounded-2xl p-5 flex items-start gap-3"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                        >
                            <span className="icon-chip shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                {s.icon}
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold mb-1.5 leading-tight text-white">{s.title}</h3>
                                <p className="text-slate-300/85 text-sm leading-relaxed">{s.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="impacto" className="border-y border-white/5 bg-white/[0.015]">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div data-aos="fade-up" className="max-w-2xl mb-10">
                        <h2 className="text-3xl md:text-4xl section-heading mb-3">Información que genera valor para tu decisión</h2>
                        <p className="text-slate-300/90 leading-relaxed">
                            Una solución diseñada que reduce los costos causados por la humedad, mejora el aislamiento térmico y asegura que tus operaciones no se detengan.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        {valuePoints.map((item, i) => (
                            <article
                                key={item.detail}
                                className="glass-card h-full rounded-2xl p-5 flex items-start gap-3"
                                data-aos="fade-up"
                                data-aos-delay={i * 90}
                            >
                                <span className="icon-chip shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                    {item.icon}
                                </span>
                                <div className="min-w-0">
                                    {item.title && (
                                        <h3 className="text-base font-semibold mb-1 leading-tight text-white">{item.title}</h3>
                                    )}
                                    <p className="text-slate-300/85 text-sm leading-relaxed">{item.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="proceso" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                <div data-aos="fade-up" className="max-w-2xl mb-8">
                    <h2 className="text-3xl md:text-4xl section-heading mb-4">Nuestro proceso</h2>
                    <p className="text-slate-300/90 leading-relaxed">
                        Seguimos un proceso claro para que tengas visibilidad del trabajo, los tiempos y los resultados.
                    </p>
                </div>

                <ol className="grid gap-4 md:grid-cols-2">
                    {steps.map((step, i) => (
                        <li
                            key={step}
                            className="glass-card flex items-start gap-3 rounded-2xl p-5"
                            data-aos="fade-up"
                            data-aos-delay={i * 120}
                        >
              <span className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-blueDeep text-white ring-1 ring-white/10 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
                            <span className="text-slate-300/90 text-sm leading-relaxed pt-1">{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="galeria" className="border-y border-white/5 bg-white/[0.015]">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div data-aos="fade-up" className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl section-heading mb-3">Galería de proyectos realizados</h2>
                        <p className="text-slate-300/90 leading-relaxed mb-10">
                            Conoce resultados reales de aplicación en campo. Cada imagen refleja acabados, protección y calidad
                            de ejecución en diferentes tipos de superficies.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                        {projectGallery.map((photo, index) => (
                            <button
                                type="button"
                                key={photo.src}
                                onClick={() => setLightboxIndex(index)}
                                className="glass-card group overflow-hidden rounded-2xl text-left"
                                data-aos="zoom-in"
                                data-aos-delay={index * 90}
                            >
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white opacity-0 transition group-hover:opacity-100">
                                        <FaExpand className="text-sm" />
                                    </span>
                                </div>
                                <p className="border-t border-white/10 px-4 py-3 text-sm text-slate-300/90">{photo.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contacto" className="border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl section-heading">Contacto</h2>
                    <p className="mt-3 text-slate-300/90 leading-relaxed">
                        Convierte tu problema en una solución duradera.
                        Te asesoramos sin compromiso y te damos una propuesta clara desde el primer contacto.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay={100}>
                        <a href="mailto:impermeabilizaciones29@gmail.com" className="btn-primary">
                            impermeabilizaciones29@gmail.com
                        </a>
                    </div>

                    <div className="mt-6 rounded-xl border border-amber-300/25 bg-amber-400/[0.06] p-4 text-left text-sm text-amber-100/90">
                        <p>
                            Aviso de prevención: nunca solicitamos NIP, contraseñas, códigos OTP ni pagos a cuentas no verificadas.
                            Antes de transferir, valida datos desde la sección de <Link className="underline decoration-amber-300/50 underline-offset-2" href="/seguridad">seguridad</Link>.
                        </p>
                    </div>

                    <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        <a
                            href="https://share.google/Wz59zQhGrAETbPFYA"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="glass-card group rounded-xl px-5 py-4"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="flex items-start gap-3">
                <span className="icon-chip mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <AiFillGoogleSquare className="text-2xl text-amber-300" />
                </span>

                                <div className="min-w-0">
                                    <p className="text-sm text-white/60">Google</p>
                                    <p className="mt-1 font-semibold text-white">Encuéntranos en Maps</p>
                                    <p className="mt-1 text-xs text-white/50">Ubicación y reseñas</p>
                                </div>
                            </div>
                        </a>
                        <div className="relative" data-aos="fade-up" data-aos-delay={150}>
                            <button
                                type="button"
                                onClick={() => setShowWhatsAppMenu((prev) => !prev)}
                                className="glass-card group w-full rounded-xl px-5 py-4 !border-emerald-300/25 !bg-emerald-500/[0.07] hover:!bg-emerald-500/[0.12] hover:!border-emerald-300/40"
                            >
                                <span className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/15 transition">
                                        <AiOutlineWhatsApp className="text-2xl text-emerald-300" />
                                    </span>
                                    <span className="min-w-0 text-left">
                                        <span className="text-sm text-emerald-100/70 block">WhatsApp</span>
                                        <span className="mt-1 font-semibold text-emerald-100 block">Solicita presupuesto</span>
                                        <span className="mt-1 text-xs text-emerald-100/60 block">Elige un número</span>
                                    </span>
                                </span>
                            </button>
                            {showWhatsAppMenu && (
                                <div className="glass-panel absolute left-1/2 z-10 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-xl !bg-ink-900/95 shadow-card">
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
                            className="glass-card group rounded-xl px-5 py-4"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="flex items-start gap-3">
                                <span className="icon-chip mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                                  <AiOutlineFacebook className="text-2xl text-sky-300" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-sm text-white/60">Facebook</p>
                                    <p className="mt-1 font-semibold text-white">Ver trabajos y reseñas</p>
                                    <p className="mt-1 text-xs text-white/50">Fotos de proyectos</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-white/50">
                    <p>
                        © {currentYear} Hernández Impermeabilizaciones &amp; Poliuretano. Todos los derechos reservados.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <Link href="/aviso-privacidad" className="rounded-full border border-white/15 px-3 py-1 hover:text-white hover:border-white/35 transition">Aviso de privacidad</Link>
                        <Link href="/seguridad" className="rounded-full border border-white/15 px-3 py-1 hover:text-white hover:border-white/35 transition">Seguridad</Link>
                    </div>
                </div>
            </footer>

            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-sm"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(null);
                        }}
                        aria-label="Cerrar"
                        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                    >
                        <FaTimes />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((i) => (i === null ? null : (i - 1 + projectGallery.length) % projectGallery.length));
                        }}
                        aria-label="Anterior"
                        className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((i) => (i === null ? null : (i + 1) % projectGallery.length));
                        }}
                        aria-label="Siguiente"
                        className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20"
                    >
                        ›
                    </button>
                    <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={projectGallery[lightboxIndex].src}
                                alt={projectGallery[lightboxIndex].alt}
                                fill
                                sizes="100vw"
                                className="rounded-xl object-contain"
                            />
                        </div>
                        <p className="mt-3 text-center text-sm text-slate-300/90">{projectGallery[lightboxIndex].label}</p>
                    </div>
                </div>
            )}
        </main>
    );
}
