import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal y Política de Privacidad",
  description: "Aviso legal, política de privacidad y política de cookies de JESUS FPV.",
};

const NEON = "#CCFF00";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#fff", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{title}</h2>
    <div style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.9rem", color: TEXT, lineHeight: 1.8 }}>{children}</div>
  </div>
);

export default function LegalPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <section style={{ background: SURFACE, borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", color: "#000", background: NEON, padding: "4px 12px", borderRadius: 100, display: "inline-block", marginBottom: "1.25rem" }}>LEGAL</span>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>Aviso Legal y Privacidad</h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.85rem", color: MUTED }}>Última actualización: enero 2026</p>
        </div>
      </section>

      <section style={{ background: BG, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <Section title="1. Identificación del titular">
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se facilitan los siguientes datos:</p>
            <p style={{ marginTop: "1rem" }}>
              <strong style={{ color: "#fff" }}>Titular:</strong> Jesús Rodríguez Martín<br />
              <strong style={{ color: "#fff" }}>Nombre comercial:</strong> JESUS FPV<br />
              <strong style={{ color: "#fff" }}>Email de contacto:</strong> hola@jesusfpv.com<br />
              <strong style={{ color: "#fff" }}>Domicilio:</strong> España
            </p>
          </Section>

          <Section title="2. Objeto y condiciones de uso">
            <p>El sitio web jesusfpv.com ofrece contenido informativo y educativo sobre drones FPV, guías de compra y recursos para pilotos. El acceso al sitio es gratuito y libre, sin registro previo para la mayoría de contenidos.</p>
            <p style={{ marginTop: "0.75rem" }}>El usuario se compromete a hacer un uso lícito del sitio, sin dañar, inutilizar, sobrecargar o deteriorar los servidores o redes conectadas al mismo.</p>
          </Section>

          <Section title="3. Propiedad intelectual">
            <p>Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño gráfico, código fuente) son propiedad de JESUS FPV o de sus respectivos autores, y están protegidos por la legislación española e internacional sobre propiedad intelectual.</p>
            <p style={{ marginTop: "0.75rem" }}>Queda prohibida la reproducción, distribución, modificación o comunicación pública de los contenidos sin autorización expresa y por escrito del titular.</p>
          </Section>

          <Section title="4. Política de privacidad">
            <p><strong style={{ color: "#fff" }}>Responsable del tratamiento:</strong> Jesús Rodríguez Martín (JESUS FPV)</p>
            <p style={{ marginTop: "0.75rem" }}><strong style={{ color: "#fff" }}>Datos que recogemos:</strong></p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Datos del formulario de contacto: nombre, email, mensaje (base legal: consentimiento)</li>
              <li>Datos de suscripción al newsletter: email (base legal: consentimiento)</li>
              <li>Datos de navegación recogidos por Google Analytics 4 (anonimizados)</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}><strong style={{ color: "#fff" }}>Finalidad:</strong> Responder consultas, enviar newsletter (si te suscribes) y mejorar el sitio mediante analítica.</p>
            <p style={{ marginTop: "0.75rem" }}><strong style={{ color: "#fff" }}>Conservación:</strong> Los datos de contacto se conservan mientras sean necesarios para responder y hasta 3 años después. Los de newsletter, hasta que te des de baja.</p>
            <p style={{ marginTop: "0.75rem" }}><strong style={{ color: "#fff" }}>Tus derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y limitación enviando un email a hola@jesusfpv.com.</p>
          </Section>

          <Section title="5. Política de cookies">
            <p>Este sitio utiliza cookies propias y de terceros:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li><strong style={{ color: "#fff" }}>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio. No requieren consentimiento.</li>
              <li><strong style={{ color: "#fff" }}>Google Analytics 4:</strong> Cookies analíticas para estadísticas de visitas (anónimas). Requieren consentimiento.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Puedes configurar o deshabilitar las cookies desde la configuración de tu navegador.</p>
          </Section>

          <Section title="6. Política de afiliados">
            <p>JESUS FPV participa en programas de afiliados de diversas tiendas (GetFPV, DJI, RadioMaster, CNHL, etc.). Esto significa que algunos enlaces del sitio son enlaces de afiliado: si realizas una compra a través de ellos, recibo una pequeña comisión sin coste adicional para ti.</p>
            <p style={{ marginTop: "0.75rem" }}>Los enlaces de afiliado se identifican siempre con el aviso correspondiente. Las recomendaciones son honestas e independientes de los acuerdos de afiliado.</p>
          </Section>

          <Section title="7. Limitación de responsabilidad">
            <p>JESUS FPV no se responsabiliza de:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>La exactitud o actualización de la información sobre normativa de drones (consulta siempre fuentes oficiales como AESA)</li>
              <li>Los contenidos de sitios web externos enlazados</li>
              <li>Daños derivados del uso o mal uso de la información del sitio</li>
            </ul>
          </Section>

          <Section title="8. Legislación aplicable">
            <p>Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio, las partes se someten a los juzgados y tribunales de España.</p>
          </Section>

        </div>
      </section>
    </div>
  );
}
