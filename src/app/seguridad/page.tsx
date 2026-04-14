import Link from "next/link";

export const metadata = {
  title: "Seguridad y Prevención de Fraude | Hernández Impermeabilizaciones",
  description:
    "Recomendaciones para validar comunicaciones oficiales y prevenir fraudes en solicitudes de servicio.",
};

const recommendations = [
  "Verifica que el contacto provenga de canales oficiales publicados en este sitio.",
  "Confirma por llamada cualquier cambio de cuenta bancaria o instrucciones de pago.",
  "No compartas información sensible (NIP, contraseñas o códigos OTP).",
  "Solicita confirmación por escrito antes de anticipos o transferencias.",
  "Reporta mensajes sospechosos para su revisión inmediata.",
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Seguridad y prevención de fraude</h1>
        <p className="text-blue-50/90 leading-relaxed">
          Este sitio incluye controles de seguridad para proteger la navegación; además, te compartimos prácticas
          recomendadas para que puedas detectar intentos de fraude antes de contratar o realizar pagos.
        </p>

        <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold mb-3">Checklist de verificación</h2>
          <ul className="list-disc pl-6 text-blue-50/80 space-y-2">
            {recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-semibold">¿Detectaste actividad sospechosa?</h2>
          <p className="text-blue-50/80 leading-relaxed">
            Escríbenos a
            <a className="text-[#f3992e] ml-1" href="mailto:impermeabilizaciones29@gmail.com">impermeabilizaciones29@gmail.com</a>
            y menciona fecha, canal de contacto y evidencia. Revisaremos el caso y te orientaremos para proteger tu
            información.
          </p>
        </article>

        <Link href="/" className="inline-flex rounded-lg bg-[#f3992e] px-5 py-2 font-semibold text-slate-950">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
