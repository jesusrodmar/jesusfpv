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

const filters = ["Todos", "Educación Técnica", "Cinematografía FPV", "Normativa", "Reviews"];

const articles = [
  { cat: "Educación Técnica", title: "Cómo empezar en FPV: La guía definitiva 2026", min: "12 min", date: "Mar 2026", slug: "como-empezar-en-fpv-guia-definitiva-2026" },
  { cat: "Normativa", title: "Requisitos AESA para operar drones comercialmente", min: "8 min", date: "Mar 2026", slug: "requisitos-aesa-drones-comerciales" },
  { cat: "Reviews", title: "RadioMaster Pocket: ¿La mejor emisora compacta de 2026?", min: "6 min", date: "Feb 2026", slug: "radiomaster-pocket-review-2026" },
  { cat: "Educación Técnica", title: "Betaflight 4.5: Rates y filtros para freestyle", min: "15 min", date: "Feb 2026", slug: "betaflight-45-rates-filtros-freestyle" },
  { cat: "Cinematografía FPV", title: "Cómo grabar bodas con FPV: Flujo de trabajo completo", min: "14 min", date: "Ene 2026", slug: "grabar-bodas-con-fpv" },
  { cat: "Reviews", title: "Mejores kits FPV por presupuesto: 150€, 300€ y 500€+", min: "10 min", date: "Ene 2026", slug: "mejores-kits-fpv-por-presupuesto" },
  { cat: "Cinematografía FPV", title: "Planos FPV para narrativa: Breakdowns cinematográficos", min: "18 min", date: "Dic 2025", slug: "planos-fpv-narrativa-cinematograficos" },
  { cat: "Educación Técnica", title: "ELRS vs FrSky: La comparativa definitiva 2026", min: "9 min", date: "Dic 2025", slug: "elrs-vs-frsky-comparativa-2026" },
  { cat: "Normativa", title: "Zonas ENAIRE: Cómo obtener permisos en 2026", min: "7 min", date: "Nov 2025", slug: "zonas-enaire-permisos-2026" },
];

export default function BlogClient() {
  const router = useRouter();
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? articles : articles.filter((a) => a.cat === filter);

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
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Blog</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>
            GUÍAS Y TUTORIALES<br /><span style={{ color: NEON }}>FPV EN ESPAÑOL</span>
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            Contenido técnico, reviews honestas y normativa actualizada para todos los niveles.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button key={f}
                onClick={() => setFilter(f)}
                style={{ background: filter === f ? NEON : SURFACE, border: `1px solid ${filter === f ? NEON : "rgba(255,255,255,0.1)"}`, cursor: "pointer", borderRadius: 100, fontFamily: '"Exo 2", sans-serif', fontSize: "0.82rem", fontWeight: 700, color: filter === f ? "#000" : TEXT, padding: "8px 18px", transition: "all 0.2s" }}
              >{f}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {filtered.map((a, i) => (
              <div key={i}
                onClick={() => router.push(`/blog/${a.slug}`)}
                style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "1.75rem", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", alignItems: "center" }}>
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em", color: "#000", background: NEON, padding: "3px 10px", borderRadius: 100 }}>{a.cat.toUpperCase()}</span>
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: MUTED }}>{a.date}</span>
                </div>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>{a.title}</h3>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: MUTED }}>{a.min} lectura</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
