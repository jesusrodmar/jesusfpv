"use client";

import { useRouter } from "next/navigation";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const steps = [
  { n: "01", title: "Ready-to-Fly", desc: "Drones RTF para volar en minutos. Ideal para validar el hobby sin complicarte.", page: "tienda" },
  { n: "02", title: "Elige tu emisora", desc: "RadioMaster + ELRS es el estándar 2026. No escatimes — la usarás años.", page: "tienda" },
  { n: "03", title: "Gafas FPV", desc: "Analógicas para empezar, digitales para imagen cristalina desde el día uno.", page: "tienda" },
  { n: "04", title: "Simulador primero", desc: "Velocidrone o Liftoff: 10€ y salvas cientos en drones rotos. Mínimo 20h antes del primer vuelo.", page: "guias" },
  { n: "05", title: "Monta tu quad", desc: "Frame + FC + ESC + motores + props. Build guide completo disponible.", page: "guias" },
  { n: "06", title: "Normativa AESA", desc: "Registrarte como operador y conocer las zonas restringidas es obligatorio por ley.", page: "normativa" },
];

const glossary: [string, string][] = [
  ["FPV", "First Person View — vuelo en primera persona con gafas"],
  ["FC", "Flight Controller — el 'cerebro' del dron"],
  ["ESC", "Electronic Speed Controller — controla los motores"],
  ["RTF", "Ready To Fly — dron listo para volar sin montar"],
  ["ELRS", "ExpressLRS — protocolo de control de largo alcance de código abierto"],
  ["PID", "Proportional Integral Derivative — parámetros de estabilización de vuelo"],
  ["LiPo", "Litio-Polímero — tipo de batería estándar en FPV"],
  ["Betaflight", "Firmware de flight controllers FPV más popular del mundo"],
];

export default function EmpezarClient() {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(getRoute(page));
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Page Header */}
      <section style={{ background: SURFACE, borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
            <span onClick={() => navigate("home")} style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, cursor: "pointer", transition: "color 0.15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = PINK; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = MUTED; }}>Inicio</span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Empezar</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            EMPIEZA EN FPV.<br /><span style={{ color: NEON }}>SIN PERDER DINERO.</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>LA RUTA GUIADA</p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", marginBottom: "2rem", textTransform: "uppercase" }}>La ruta guiada</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {steps.map((s) => (
              <div key={s.n}
                onClick={() => navigate(s.page)}
                style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "1.75rem", cursor: "pointer", transition: "all 0.2s", display: "flex", gap: "1.25rem" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "2rem", color: "rgba(204,255,0,0.18)", lineHeight: 1, flexShrink: 0, width: 48 }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.85rem", color: TEXT, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section style={{ background: SURFACE, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", marginBottom: "2rem", textTransform: "uppercase" }}>Glosario FPV</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
            {glossary.map(([t, d]) => (
              <div key={t} style={{ background: BG, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "1rem 1.25rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.85rem", color: NEON, minWidth: 60, flexShrink: 0 }}>{t}</span>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.83rem", color: TEXT, lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
