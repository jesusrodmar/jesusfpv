import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montaje Dron FPV Paso a Paso — Guías completas | JESUS FPV",
  description: "Guías de montaje de drones FPV desde cero: frames, motores, controladoras, ESC, cámaras y configuración Betaflight. Todo explicado paso a paso.",
  alternates: { canonical: "https://jesusfpv.com/guias/montaje-dron-paso-a-paso" },
};

const NEON = "#CCFF00";
const MUTED = "#808080";
const TEXT = "#D4D4D4";

export default function MontajePage() {
  return (
    <div style={{ paddingTop: 64, minHeight: "100vh", background: "#0A0A0A" }}>
      {/* Breadcrumb + Header */}
      <section style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <nav aria-label="Migas de pan" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <a href="/" style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, textDecoration: "none" }}>Inicio</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <a href="/guias" style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, textDecoration: "none" }}>Guías</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Montaje paso a paso</span>
          </nav>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(2rem,5vw,3rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            Montaje Dron FPV Paso a Paso
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1.05rem", color: TEXT, lineHeight: 1.7, maxWidth: 600 }}>
            Guías de montaje completas para cada configuración FPV. Desde el primer frame hasta el primer vuelo.
          </p>
        </div>
      </section>

      {/* Content placeholder */}
      <section style={{ padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: MUTED }}>
            Guías de montaje próximamente. Vuelve pronto.
          </p>
        </div>
      </section>
    </div>
  );
}
