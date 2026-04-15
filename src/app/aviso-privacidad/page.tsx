import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | Hernández Impermeabilizaciones",
  description:
    "Conoce cómo protegemos los datos personales que nos compartes para cotizaciones y seguimiento de servicios.",
};

export default function PrivacyNoticePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Aviso de Privacidad</h1>
        <p className="text-blue-50/80 text-sm">Última actualización: 14 de abril de 2026.</p>

        <p className="text-blue-50/90 leading-relaxed">
          En Hernández Impermeabilizaciones y Poliuretano tratamos tus datos personales de forma responsable para
          prevenir fraudes, proteger tu información y gestionar solicitudes de cotización.
        </p>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold">Datos que recopilamos</h2>
          <ul className="list-disc pl-6 text-blue-50/80 space-y-1">
            <li>Nombre y datos de contacto (teléfono, correo electrónico).</li>
            <li>Información del inmueble o proyecto compartida para elaborar cotizaciones.</li>
            <li>Mensajes de seguimiento y evidencia técnica del servicio solicitado.</li>
          </ul>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold">Finalidades del tratamiento</h2>
          <ul className="list-disc pl-6 text-blue-50/80 space-y-1">
            <li>Responder solicitudes, preparar propuestas técnicas y brindar seguimiento comercial.</li>
            <li>Validar identidad básica para evitar suplantación o solicitudes fraudulentas.</li>
            <li>Cumplir obligaciones legales y administrativas aplicables.</li>
          </ul>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold">Medidas de seguridad</h2>
          <p className="text-blue-50/80 leading-relaxed">
            Implementamos controles técnicos y organizativos para reducir riesgos de acceso no autorizado,
            alteración o pérdida de datos. Ningún asesor está autorizado para solicitar contraseñas,
            códigos bancarios o pagos fuera de canales confirmados.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold">Derechos ARCO y contacto</h2>
          <p className="text-blue-50/80 leading-relaxed">
            Puedes solicitar acceso, rectificación, cancelación u oposición del uso de tus datos escribiendo a
            <a className="text-[#f3992e] ml-1" href="mailto:impermeabilizaciones29@gmail.com">impermeabilizaciones29@gmail.com</a>.
          </p>
        </article>

        <Link href="/" className="inline-flex rounded-lg bg-[#f3992e] px-5 py-2 font-semibold text-slate-950">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
