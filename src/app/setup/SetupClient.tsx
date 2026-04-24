"use client";

import { useRouter } from "next/navigation";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const gear = [
  { cat: "DRON PRINCIPAL", name: "iFlight Nazgul5 V3", detail: "Mi freestyle diario. Indestructible, potente y fácil de reparar.", price: "~280€", store: "GetFPV", slug: "iflight-nazgul5-v3" },
  { cat: "GAFAS", name: "DJI Goggles 2", detail: "La imagen digital más nítida del mercado. Inversión que vale la pena.", price: "~620€", store: "DJI", slug: "dji-goggles-2" },
  { cat: "EMISORA", name: "RadioMaster TX16S Mk II", detail: "La referencia absoluta. EdgeTX + ELRS integrado. 5 años de uso, cero problemas.", price: "~180€", store: "RadioMaster", slug: "radiomaster-tx16s" },
  { cat: "BATERÍA", name: "CNHL 1500mAh 6S", detail: "Mejor relación calidad/precio. Más de 200 ciclos sin degradación.", price: "~22€/ud.", store: "CNHL", slug: "cnhl-1500mah-6s" },
  { cat: "CINEWHOOP", name: "Flywoo CineRace20", detail: "Para proyectos comerciales interiores. Silencioso, potente, buena imagen.", price: "~180€", store: "Flywoo", slug: "flywoo-cinerace20" },
  { cat: "CÁMARA", name: "GoPro Hero 12 Black", detail: "Footage final en proyectos de cliente. HyperSmooth + 5.3K raw.", price: "~350€", store: "GoPro", slug: "gopro-hero12" },
];

export default function SetupClient() {
  const router = useRouter();

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Page Header */}
      <section style={{ background: SURFACE, borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
            <span
              onClick={() => { router.push(getRoute("home")); window.scrollTo(0, 0); }}
              style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, cursor: "pointer" }}
            >Inicio</span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Mi Setup</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            MI SETUP ACTUAL.<br /><span style={{ color: NEON }}>SIN PATROCINIOS.</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            El gear que uso de verdad en cada sesión. Solo recomiendo lo que llevo yo.
          </p>
        </div>
      </section>

      {/* Gear list */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {gear.map((g) => (
            <div key={g.name}
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", transition: "all 0.2s" }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.background = "#1a1a1a"; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.background = SURFACE; }}
            >
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", color: NEON, display: "block", marginBottom: 6 }}>{g.cat}</span>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: 6 }}>{g.name}</h3>
                <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.83rem", color: TEXT, lineHeight: 1.5 }}>{g.detail}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "1.3rem", color: NEON }}>{g.price}</div>
                  <div style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", color: MUTED }}>aprox.</div>
                </div>
                <button
                  onClick={() => window.open(`/ir/${g.slug}`, "_blank")}
                  style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.8rem", color: "#000", padding: "10px 18px", whiteSpace: "nowrap", transition: "background 0.15s" }}
                  onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; }}
                  onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; }}
                >
                  Ver en {g.store} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
