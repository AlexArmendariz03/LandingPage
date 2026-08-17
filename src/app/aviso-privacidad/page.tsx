import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | Hernández Impermeabilizaciones",
  description:
    "Conoce cómo protegemos los datos personales que nos compartes para cotizaciones y seguimiento de servicios.",
};

export default function PrivacyNoticePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24 space-y-6">
        <h1 className="text-3xl md:text-4xl section-heading">Aviso de Privacidad</h1>
        <p className="text-slate-300/90 text-sm">Última actualización: 16 de abril de 2026.</p>

        <p className="text-slate-300/95 leading-relaxed">
          En Hernández Impermeabilizaciones y Poliuretano tratamos tus datos personales de forma responsable para
          prevenir fraudes, proteger tu información y gestionar solicitudes de cotización.
        </p>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Datos que recopilamos</h2>
          <ul className="list-disc pl-6 text-slate-300/90 space-y-1">
            <li>Nombre y datos de contacto (teléfono, correo electrónico).</li>
            <li>Información del inmueble o proyecto compartida para elaborar cotizaciones.</li>
            <li>Mensajes de seguimiento y evidencia técnica del servicio solicitado.</li>
          </ul>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Finalidades del tratamiento</h2>
          <ul className="list-disc pl-6 text-slate-300/90 space-y-1">
            <li>Responder solicitudes, preparar propuestas técnicas y brindar seguimiento comercial.</li>
            <li>Validar identidad básica para evitar suplantación o solicitudes fraudulentas.</li>
            <li>Cumplir obligaciones legales y administrativas aplicables.</li>
          </ul>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Conservación y eliminación</h2>
          <p className="text-slate-300/90 leading-relaxed">
            Conservamos datos únicamente por el tiempo necesario para atender la solicitud, dar seguimiento comercial y
            cumplir obligaciones legales. Cuando los datos dejan de ser necesarios, se eliminan o anonimizan de forma
            segura de nuestros sistemas operativos.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Medidas de seguridad</h2>
          <p className="text-slate-300/90 leading-relaxed">
            Implementamos controles técnicos y organizativos para reducir riesgos de acceso no autorizado,
            alteración o pérdida de datos. Ningún asesor está autorizado para solicitar contraseñas,
            códigos bancarios o pagos fuera de canales confirmados.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Transferencias y terceros</h2>
          <p className="text-slate-300/90 leading-relaxed">
            No vendemos tus datos personales. Solo compartimos información mínima necesaria con proveedores de
            infraestructura tecnológica o mensajería cuando se requiere para la operación del servicio,
            bajo obligaciones de confidencialidad y seguridad.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Derechos ARCO y contacto</h2>
          <p className="text-slate-300/90 leading-relaxed">
            Puedes solicitar acceso, rectificación, cancelación u oposición del uso de tus datos escribiendo a
            <a className="text-brand-orange ml-1 hover:text-brand-orangeSoft transition" href="mailto:impermeabilizaciones29@gmail.com">impermeabilizaciones29@gmail.com</a>.
            Incluye tu nombre, medio de contacto y descripción de la solicitud para responder en el menor tiempo posible.
          </p>
        </article>

        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
