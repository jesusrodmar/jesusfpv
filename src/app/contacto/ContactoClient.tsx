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

const labelStyle: React.CSSProperties = {
  fontFamily: '"Exo 2", sans-serif',
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: MUTED,
  display: "block",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: SURFACE,
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 6,
  padding: "13px 16px",
  fontFamily: '"Exo 2", sans-serif',
  fontSize: "0.95rem",
  color: "#fff",
  outline: "none",
};

export default function ContactoClient() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "", mensaje: "" });
  const [sent, setSent] = useState(false);

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
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>Contacto</span>
          </div>
          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1rem", textTransform: "uppercase" }}>HABLEMOS.</h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.7, maxWidth: 500 }}>
            Colaboraciones, patrocinios, workshops o consultoría. Cuéntame qué tienes en mente.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: BG, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem", color: NEON }}>✓</div>
              <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "2rem", color: "#fff", marginBottom: "1rem" }}>Mensaje recibido</h2>
              <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, marginBottom: "2rem", lineHeight: 1.7 }}>Te respondo en máximo 48 horas. Mientras tanto, echa un vistazo a las guías.</p>
              <button
                onClick={() => navigate("blog")}
                style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#000", padding: "14px 28px" }}
              >Ver guías →</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {([["nombre", "Nombre", "text", "Tu nombre"], ["email", "Email", "email", "tu@email.com"]] as [string, string, string, string][]).map(([id, label, type, ph]) => (
                <div key={id}>
                  <label style={labelStyle}>{label}</label>
                  <input type={type} required placeholder={ph} value={form[id as keyof typeof form]} onChange={(e) => setForm({ ...form, [id]: e.target.value })} style={inputStyle} />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Tipo de contacto</label>
                <select required value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  style={{ ...inputStyle, color: form.tipo ? "#fff" : MUTED, cursor: "pointer" }}>
                  <option value="">Selecciona una opción</option>
                  <option value="col">Colaboración de contenido</option>
                  <option value="pat">Patrocinio / Publicidad</option>
                  <option value="wks">Workshop o formación</option>
                  <option value="con">Consultoría FPV</option>
                  <option value="otr">Otra consulta</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Mensaje</label>
                <textarea required rows={5} placeholder="Cuéntame qué tienes en mente..." value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} style={inputStyle} />
              </div>
              <button type="submit"
                style={{ background: NEON, border: "none", cursor: "pointer", borderRadius: 6, fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#000", padding: "15px 32px", alignSelf: "flex-start", transition: "background 0.15s" }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = PINK; b.style.color = "#fff"; }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = NEON; b.style.color = "#000"; }}
              >Enviar mensaje →</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
