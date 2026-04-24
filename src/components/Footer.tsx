"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const MUTED = "#808080";

const linkStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: '"Exo 2", sans-serif',
  fontSize: "0.85rem",
  color: MUTED,
  textAlign: "left",
  padding: "4px 0",
  display: "block",
  transition: "color 0.15s",
};

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        width: 38, height: 38, borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: MUTED, transition: "all 0.15s", cursor: "pointer", textDecoration: "none",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = NEON; (e.currentTarget as HTMLAnchorElement).style.color = NEON; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLAnchorElement).style.color = MUTED; }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleNav = (page: string) => {
    router.push(getRoute(page));
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem) 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem 4rem", marginBottom: "3rem" }}>

          {/* Brand column */}
          <div>
            <button onClick={() => handleNav("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: "1.25rem", display: "block" }} aria-label="Ir al inicio">
              <Image src="/logo.png" alt="JESUS FPV" height={40} width={100} style={{ height: 40, width: "auto", objectFit: "contain" }} />
            </button>
            <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.83rem", color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 240 }}>
              El hub de referencia para FPV cinemático en español. Contenido técnico, guías y recursos para todos los niveles.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <SocialIcon label="YouTube" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"/></svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </SocialIcon>
              <SocialIcon label="TikTok" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.4v16.4a2.7 2.7 0 0 1-2.7 2.5 2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .5 0 .7.1V10a6.1 6.1 0 0 0-.7 0 6.1 6.1 0 0 0-6.1 6.1 6.1 6.1 0 0 0 6.1 6.1 6.1 6.1 0 0 0 6.1-6.1V8.2a7.8 7.8 0 0 0 4.5 1.4V6.3a4.5 4.5 0 0 1-2.1-.9v-2z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Contenido */}
          <div>
            <h4 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: NEON, marginBottom: "1.1rem" }}>Contenido</h4>
            {([["Empezar en FPV", "empezar"], ["Guías técnicas", "guias"], ["Normativa AESA", "normativa"], ["Blog y tutoriales", "blog"], ["Tienda de afiliados", "tienda"], ["Mi Setup", "setup"]] as [string, string][]).map(([l, p]) => (
              <button key={l} onClick={() => handleNav(p)} style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = NEON; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = MUTED; }}
              >{l}</button>
            ))}
          </div>

          {/* Recursos */}
          <div>
            <h4 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: NEON, marginBottom: "1.1rem" }}>Recursos</h4>
            {([["Kit de inicio FPV (gratis)", "empezar"], ["Checklist Legal Pro", "normativa"], ["Glosario FPV", "empezar"], ["Guías de compra", "tienda"], ["Colaboraciones", "contacto"]] as [string, string][]).map(([l, p]) => (
              <button key={l} onClick={() => handleNav(p)} style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = NEON; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = MUTED; }}
              >{l}</button>
            ))}
          </div>

          {/* Newsletter mini */}
          <div>
            <h4 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: NEON, marginBottom: "1.1rem" }}>Newsletter</h4>
            <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.82rem", color: MUTED, lineHeight: 1.65, marginBottom: "1rem" }}>
              Guías, tutoriales y novedades FPV. Sin spam.
            </p>
            {sent ? (
              <div style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.85rem", color: NEON, fontWeight: 700 }}>✓ ¡Apuntado!</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input type="email" required placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
                  style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 12px", fontFamily: '"Exo 2", sans-serif', fontSize: "0.85rem", color: "#fff", outline: "none" }} />
                <button type="submit"
                  style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "0.82rem", color: "#000", padding: "10px", transition: "background 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = PINK; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = NEON; (e.currentTarget as HTMLButtonElement).style.color = "#000"; }}
                >Suscribirme →</button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.75rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.25rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {["Aviso Legal", "Política de Privacidad", "Política de Cookies", "Disclaimer de Afiliados"].map((l) => (
                <button key={l}
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", padding: 0, transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = NEON; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.3)"; }}
                >{l}</button>
              ))}
            </div>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>Jesús FPV © 2026</span>
          </div>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", lineHeight: 1.6 }}>
            ⚠️ Esta web contiene enlaces de afiliado. Si realizas una compra a través de ellos, recibo una pequeña comisión sin coste adicional para ti. Esto me ayuda a mantener el contenido gratuito. Las opiniones expresadas son siempre honestas e independientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
