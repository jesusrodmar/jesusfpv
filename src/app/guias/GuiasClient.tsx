"use client";

import { useRouter } from "next/navigation";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const cats = [
  { icon: "🔧", title: "Montajes Paso a Paso", desc: "Build guides completos: FC, ESC, motores, frames. Todo para montar tu primer quad desde cero.", items: ["Cinewhoop 3\" build", "Freestyle 5\" clásico", "LongRange 7\" setup", "Micro 2\" racing"], page: "guias" },
  { icon: "🛒", title: "Guías de Compra", desc: "Compara los mejores kits por presupuesto. Sin publicidad: solo lo que yo compraría.", items: ["Kit 150€ iniciación", "Kit 300€ serio", "Kit 500€+ avanzado", "Accesorios imprescindibles"], page: "tienda" },
  { icon: "⚙️", title: "Tutoriales Técnicos", desc: "Betaflight, PID tuning, Blackbox analysis, configuración de ELRS. Extrae el máximo de tu setup.", items: ["Betaflight desde cero", "PID tuning freestyle", "Configurar ELRS 3.0", "Blackbox avanzado"], page: "guias" },
  { icon: "⭐", title: "Reviews", desc: "Probado antes de publicado. Con links a los mejores precios y alternativas reales.", items: ["Emisoras 2026", "Gafas FPV comparativa", "FC recomendados", "Motores por uso"], page: "tienda" },
];

export default function GuiasClient() {
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
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Guías</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            GUÍAS TÉCNICAS<br /><span style={{ color: NEON }}>SIN RODEOS.</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            Montajes, comparativas, tutoriales de Betaflight y reviews. Todo para mejorar tu setup.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {cats.map((c) => (
              <div key={c.title}
                onClick={() => navigate(c.page)}
                style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "2rem", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(204,255,0,0.08)", border: "1px solid rgba(204,255,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1.15rem", color: "#fff", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.875rem", color: TEXT, lineHeight: 1.65, marginBottom: "1.5rem" }}>{c.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {c.items.map((item) => (
                    <li key={item} style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.82rem", color: MUTED, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: NEON, display: "inline-block", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
