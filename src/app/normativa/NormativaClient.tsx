"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const faqs = [
  { q: "¿Necesito carné para volar un dron FPV?", a: "Depende del peso y categoría. Para drones >250g en categoría Abierta A1/A3 necesitas la certificación A1/A3 de AESA (online, gratuita). Para operaciones A2 o Específica se requieren exámenes adicionales." },
  { q: "¿Dónde puedo volar legalmente?", a: "Fuera de zonas restringidas en el mapa ENAIRE/Drones. En zonas urbanas aplican restricciones adicionales. Comprueba siempre antes de volar con la app Enaire Drones." },
  { q: "¿Necesito seguro para volar?", a: "Para drones de más de 20kg es obligatorio seguro de RC. Para drones menores no es legalmente obligatorio, pero es muy recomendable." },
  { q: "¿Cómo me registro como operador UAS?", a: "En el portal de AESA (aesa.gob.es). El registro es gratuito y necesario para operar drones de más de 250g o con cámara. Recibes un número de operador." },
  { q: "¿Puedo volar de noche?", a: "En categoría Abierta está prohibido volar de noche salvo excepciones. Para operaciones nocturnas se necesita autorización especial en categoría Específica." },
];

export default function NormativaClient() {
  const router = useRouter();
  const [open, setOpen] = useState<number | null>(null);

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
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Normativa</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            VUELA LEGAL.<br /><span style={{ color: NEON }}>VUELA SEGURO.</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            Normativa actualizada AESA, zonas ENAIRE y guías para videógrafos profesionales en España.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", marginBottom: "2rem", textTransform: "uppercase" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: SURFACE, border: `1px solid ${open === i ? NEON + "55" : "rgba(255,255,255,0.08)"}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem" }}
                >
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#fff", textAlign: "left" }}>{f.q}</span>
                  <span style={{ color: NEON, fontSize: "1.3rem", flexShrink: 0, marginLeft: 16, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.9rem", color: TEXT, lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "3rem", background: "rgba(204,255,0,0.05)", border: `1px solid ${NEON}44`, borderRadius: 12, padding: "2rem" }}>
            <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#fff", marginBottom: "0.75rem" }}>¿Eres videógrafo profesional?</h3>
            <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.88rem", color: TEXT, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Descarga el Checklist Legal completo: categorías AESA, seguros, contratos con clientes y gestión de permisos ENAIRE.
            </p>
            <button
              onClick={() => navigate("contacto")}
              style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.9rem", color: "#000", padding: "13px 24px", transition: "background 0.15s" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; }}
            >
              Descargar Checklist Legal — Gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
