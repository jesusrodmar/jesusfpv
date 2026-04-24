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

const categories = [
  { icon: "🎬", label: "Iniciación al FPV", desc: "Conceptos básicos, simuladores y primeros pasos para volar con fluidez y seguridad.", page: "empezar" },
  { icon: "🔧", label: "Montajes Cinewhoop", desc: "Construye drones diseñados para llevar cámaras de cine, GoPro y volar cerca de personas.", page: "guias" },
  { icon: "📋", label: "Normativa y AESA", desc: "Requisitos legales, seguros y gestión documental para operar de forma profesional en España.", page: "normativa" },
  { icon: "👓", label: "Gafas y Sistemas HD", desc: "Comparativas de sistemas digitales (DJI, Walksnail) para la mejor calidad de imagen.", page: "tienda" },
  { icon: "⚙️", label: "Ajustes Cinemáticos", desc: "Configuración de PIDs, filtros y rates en Betaflight para lograr movimientos suaves de cámara.", page: "guias" },
  { icon: "📰", label: "Noticias del Sector", desc: "Últimos lanzamientos de cámaras de acción, drones BNF comerciales y actualizaciones de software.", page: "blog" },
];

const recentPosts = [
  { cat: "TUTORIAL", title: "Betaflight 4.5: Rates y filtros para FPV cinemático", date: "Abr 2026", min: "15 min" },
  { cat: "REVIEW", title: "RadioMaster Pocket: La emisora compacta que lo cambia todo", date: "Mar 2026", min: "8 min" },
  { cat: "GUÍA", title: "Cómo empezar en FPV en 2026: La guía definitiva", date: "Mar 2026", min: "12 min" },
];

const storeCategories = [
  { icon: "🚁", label: "Drones", sub: "RTF, cinewhoops, freestyle", brands: "iFlight · BetaFPV · Flywoo" },
  { icon: "⚙️", label: "Componentes", sub: "FC, ESC, motores, frames", brands: "SpeedyBee · T-Motor · CNHL" },
  { icon: "📡", label: "Emisoras", sub: "ELRS, EdgeTX, multiprotocolo", brands: "RadioMaster · BetaFPV" },
  { icon: "🥽", label: "Gafas FPV", sub: "Digital HD y analógico", brands: "DJI · Skyzone · Walksnail" },
];

export default function HomePage() {
  const router = useRouter();
  const [emailVal, setEmailVal] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const navigate = (page: string) => {
    router.push(getRoute(page));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: BG,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        textAlign: "center",
        padding: "calc(64px + clamp(3rem,8vw,6rem)) clamp(1.5rem,5vw,4rem) clamp(3rem,8vw,6rem)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <p style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 600, fontSize: "clamp(0.85rem, 1.5vw, 1rem)", color: NEON, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Especialistas en drones y FPV, Cinemáticos
        </p>

        <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(3rem, 10vw, 8rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          DOMINA EL<br />CIELO CON<br />
          <span style={{ background: `linear-gradient(90deg, ${NEON}, ${PINK})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ESTILO</span>
        </h1>

        <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: TEXT, lineHeight: 1.7, maxWidth: 560, margin: "2rem auto 3rem" }}>
          Aprende a volar, montar y configurar drones FPV para grabaciones cinematográficas, con fluidez, precisión y calidad.
        </p>

        <button
          onClick={() => navigate("empezar")}
          style={{ background: NEON, border: "none", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", color: "#000", padding: "16px 40px", borderRadius: 6, transition: "background 0.2s, transform 0.2s" }}
          onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; b.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; b.style.transform = "none"; }}
        >
          Empieza aquí →
        </button>
      </section>

      {/* CATEGORIES GRID */}
      <section style={{ background: BG, padding: "clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {categories.map((c, i) => (
              <div key={i}
                onClick={() => navigate(c.page)}
                style={{ background: SURFACE, borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "2rem", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(204,255,0,0.1)", border: "1px solid rgba(204,255,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.75rem" }}>{c.label}</h3>
                <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.88rem", color: TEXT, lineHeight: 1.65, marginBottom: "1.25rem" }}>{c.desc}</p>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.85rem", fontWeight: 600, color: NEON }}>Saber más</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section style={{ background: BG, padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff" }}>Últimas guías</h2>
            <button
              onClick={() => navigate("blog")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontWeight: 600, fontSize: "0.85rem", color: MUTED, padding: "9px 18px", borderRadius: 6, transition: "all 0.2s" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = NEON; b.style.color = NEON; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.15)"; b.style.color = MUTED; }}
            >Ver todo →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {recentPosts.map((p, i) => (
              <div key={i}
                onClick={() => navigate("blog")}
                style={{ background: SURFACE, borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)", padding: "1.75rem", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", alignItems: "center" }}>
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", color: "#000", background: NEON, padding: "3px 10px", borderRadius: 100 }}>{p.cat}</span>
                  <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: MUTED }}>{p.date}</span>
                </div>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>{p.title}</h3>
                <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: MUTED }}>{p.min} lectura</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDA MARKETPLACE */}
      <section style={{ background: BG, padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <div>
              <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: NEON, display: "block", marginBottom: "0.6rem" }}>Marketplace</span>
              <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#fff", lineHeight: 1.1, textTransform: "uppercase" }}>Tienda FPV</h2>
              <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.9rem", color: TEXT, lineHeight: 1.65, maxWidth: 540, marginTop: "0.75rem" }}>
                Recopilación de los mejores enlaces de compra en drones, componentes, emisoras y gafas de las marcas más fiables del mercado.
              </p>
            </div>
            <button
              onClick={() => navigate("tienda")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: MUTED, padding: "10px 20px", borderRadius: 6, transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = NEON; b.style.color = NEON; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.15)"; b.style.color = MUTED; }}
            >Ver toda la tienda →</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {storeCategories.map((c) => (
              <div key={c.label}
                onClick={() => navigate("tienda")}
                style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "1.5rem", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = NEON; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "none"; }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "0.4rem" }}>{c.label}</h3>
                <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: TEXT, marginBottom: "0.5rem" }}>{c.sub}</p>
                <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", color: NEON, fontWeight: 600 }}>{c.brands}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.5 }}>
            ⚠️ Los links de esta sección son de afiliado. Si compras a través de ellos recibo una pequeña comisión sin coste extra para ti.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: SURFACE, borderTop: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: NEON, display: "block", marginBottom: "1rem" }}>Kit de inicio FPV — Gratis</span>
          <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            Tu guía de inicio en PDF,<br />lista para descargar
          </h2>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.95rem", color: TEXT, lineHeight: 1.7, marginBottom: "2rem" }}>
            Checklist de compra, glosario FPV y ruta guiada por perfil. Sin spam. Baja cuando quieras.
          </p>
          {newsletterSent ? (
            <div style={{ background: "rgba(204,255,0,0.08)", border: `1px solid ${NEON}40`, borderRadius: 10, padding: "1.5rem", color: NEON, fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.1rem" }}>
              ✓ ¡Enviado! Revisa tu email.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (emailVal) setNewsletterSent(true); }} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <input type="email" required placeholder="tu@email.com" value={emailVal} onChange={(e) => setEmailVal(e.target.value)}
                style={{ flex: 1, minWidth: 220, background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, padding: "13px 16px", fontFamily: '"Exo 2", sans-serif', fontSize: "0.95rem", color: "#fff", outline: "none" }} />
              <button type="submit"
                style={{ background: NEON, border: "none", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.9rem", color: "#000", padding: "13px 24px", borderRadius: 6, transition: "background 0.2s" }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; }}
              >Quiero el Kit →</button>
            </form>
          )}
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", color: MUTED, marginTop: "1rem" }}>Conforme a RGPD. Sin spam.</p>
        </div>
      </section>
    </div>
  );
}
