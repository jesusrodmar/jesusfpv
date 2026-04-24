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

type Product = { name: string; price: string; store: string; badge: string | null; rating: number };

const cats = ["Drones", "Componentes", "Emisoras", "Gafas"] as const;
type Cat = typeof cats[number];

const products: Record<Cat, Product[]> = {
  Drones: [
    { name: "iFlight Nazgul5 V3", price: "~280€", store: "GetFPV", badge: "Mejor freestyle", rating: 4.8 },
    { name: "BetaFPV Cetus Pro", price: "~120€", store: "BetaFPV", badge: "Ideal principiantes", rating: 4.6 },
    { name: "iFlight Chimera7 Pro", price: "~380€", store: "GetFPV", badge: null, rating: 4.5 },
    { name: "Flywoo CineRace20", price: "~180€", store: "Banggood", badge: null, rating: 4.4 },
  ],
  Componentes: [
    { name: "SpeedyBee F405 V4", price: "~55€", store: "SpeedyBee", badge: "Mejor calidad/precio", rating: 4.9 },
    { name: "Foxeer Reaper 40A ESC", price: "~45€", store: "GetFPV", badge: null, rating: 4.6 },
    { name: "T-Motor F60 Pro IV", price: "~28€", store: "T-Motor", badge: null, rating: 4.7 },
    { name: "CNHL 1500mAh 6S", price: "~22€", store: "CNHL", badge: "Mejor precio/capacidad", rating: 4.5 },
  ],
  Emisoras: [
    { name: "RadioMaster TX16S Mk II", price: "~180€", store: "RadioMaster", badge: "La referencia", rating: 4.9 },
    { name: "RadioMaster Zorro", price: "~120€", store: "RadioMaster", badge: "Compacta y potente", rating: 4.7 },
    { name: "RadioMaster Pocket", price: "~85€", store: "RadioMaster", badge: "Ideal principiantes", rating: 4.5 },
    { name: "BetaFPV LiteRadio 3 Pro", price: "~65€", store: "BetaFPV", badge: null, rating: 4.2 },
  ],
  Gafas: [
    { name: "DJI Goggles 2", price: "~620€", store: "DJI", badge: "Mejor calidad imagen", rating: 4.8 },
    { name: "Skyzone Cobra X V2", price: "~280€", store: "Banggood", badge: "Mejor analógicas", rating: 4.6 },
    { name: "Walksnail Avatar HD", price: "~350€", store: "Caddx", badge: null, rating: 4.5 },
    { name: "Fatshark Recon HD", price: "~200€", store: "GetFPV", badge: null, rating: 4.1 },
  ],
};

export default function TiendaClient() {
  const router = useRouter();
  const [cat, setCat] = useState<Cat>("Drones");

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
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Tienda</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            GEAR RECOMENDADO.<br /><span style={{ color: NEON }}>SIN FILTROS.</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            Solo el equipo probado y recomendado. Links de afiliado — sin coste extra para ti.
          </p>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button key={c}
                onClick={() => setCat(c)}
                style={{ background: cat === c ? NEON : SURFACE, border: `1px solid ${cat === c ? NEON : "rgba(255,255,255,0.1)"}`, cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontSize: "0.9rem", fontWeight: 700, color: cat === c ? "#000" : TEXT, padding: "10px 24px", transition: "all 0.2s" }}
              >{c}</button>
            ))}
          </div>

          {/* Products grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {products[cat].map((p, i) => (
              <div key={i}
                style={{ background: SURFACE, border: `1px solid ${p.badge ? NEON + "44" : "rgba(255,255,255,0.07)"}`, borderRadius: 10, padding: "1.75rem", cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column", gap: "1rem" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = p.badge ? NEON + "44" : "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                {p.badge && (
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.68rem", fontWeight: 800, background: NEON, color: "#000", padding: "4px 10px", borderRadius: 100, display: "inline-block" }}>{p.badge}</span>
                )}
                <div>
                  <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: 8 }}>{p.name}</h3>
                  <div style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1.4rem", fontWeight: 900, color: NEON, marginBottom: 6 }}>{p.price}</div>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ color: s <= Math.floor(p.rating) ? NEON : "rgba(255,255,255,0.15)", fontSize: "0.85rem" }}>★</span>
                    ))}
                    <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: MUTED, marginLeft: 6 }}>{p.rating}</span>
                  </div>
                </div>
                <button
                  style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.85rem", color: "#000", padding: "12px", marginTop: "auto", transition: "background 0.15s" }}
                  onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; }}
                  onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; }}
                >
                  Ver precio en {p.store} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
