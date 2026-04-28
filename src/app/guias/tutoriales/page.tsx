import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutoriales FPV — Betaflight, PID tuning y configuración | JESUS FPV",
  description: "Tutoriales técnicos FPV en español: Betaflight, configuración de emisoras, PID tuning, sistemas de vídeo y mucho más.",
  alternates: { canonical: "https://jesusfpv.com/guias/tutoriales" },
};

const NEON = "#CCFF00";
const MUTED = "#808080";
const TEXT = "#D4D4D4";

export default function TutorialesPage() {
  return (
    <div style={{ paddingTop: 64, minHeight: "100vh", background: "#0A0A0A" }}>
      <section style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <nav aria-label="Migas de pan" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <a href="/" style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, textDecoration: "none" }}>Inicio</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <a href="/guias" style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, textDecoration: "none" }}>Guías</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Tutoriales</span>
          </nav>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(2rem,5vw,3rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            Tutoriales FPV
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1.05rem", color: TEXT, lineHeight: 1.7, maxWidth: 600 }}>
            Betaflight, PID tuning, configuración de emisoras y sistemas de vídeo. Sin teoría innecesaria.
          </p>
        </div>
      </section>
      <section style={{ padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: MUTED }}>
            Tutoriales próximamente. Vuelve pronto.
          </p>
        </div>
      </section>
    </div>
  );
}
