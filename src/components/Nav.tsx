"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";

const links = [
  {
    label: "Tienda",
    page: "tienda",
    children: [
      { label: "Drones", page: "tienda" },
      { label: "Componentes", page: "tienda" },
      { label: "Emisoras", page: "tienda" },
      { label: "Gafas FPV", page: "tienda" },
      { label: "Mi Setup", page: "setup" },
    ],
  },
  {
    label: "Empezar",
    page: "empezar",
    children: [
      {
        label: "¿Qué es un dron?",
        page: "empezar",
        children: [
          { label: "Drones estabilizados", page: "empezar" },
          { label: "Drones FPV", page: "empezar" },
          { label: "Glosario FPV", page: "empezar" },
        ],
      },
      {
        label: "¿Cómo empezar?",
        page: "empezar",
        children: [
          { label: "Ready To Fly (RTF)", page: "empezar" },
          {
            label: "Monta tu dron",
            page: "guias",
            children: [
              { label: "Frames", page: "guias" },
              { label: "Motores", page: "guias" },
              { label: "Controladoras", page: "guias" },
              { label: "Hélices", page: "guias" },
              { label: "Receptores", page: "guias" },
              { label: "Cámaras", page: "guias" },
              { label: "Baterías", page: "guias" },
              { label: "Cargadores", page: "guias" },
              { label: "Otros componentes", page: "guias" },
              { label: "Configuración", page: "guias" },
            ],
          },
          { label: "Emisoras", page: "tienda" },
          { label: "Gafas FPV", page: "tienda" },
          { label: "Herramientas", page: "guias" },
          { label: "Simuladores FPV", page: "guias" },
        ],
      },
    ],
  },
  {
    label: "Guías",
    page: "guias",
    children: [
      { label: "Montajes Paso a Paso", page: "guias" },
      { label: "Guías de compra", page: "tienda" },
      { label: "Tutoriales", page: "guias" },
      { label: "Reviews", page: "blog" },
    ],
  },
  {
    label: "Normativa",
    page: "normativa",
    children: [
      { label: "ENAIRE y zonas", page: "normativa" },
      { label: "Requisitos AESA", page: "normativa" },
      { label: "Gestión operaciones", page: "normativa" },
    ],
  },
  { label: "Noticias", page: "blog" },
  { label: "Contacto", page: "contacto" },
];

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  background: "#1a1a1a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "6px 0",
  minWidth: 210,
  boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
  zIndex: 200,
};

const itemStyle = (active: boolean): React.CSSProperties => ({
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: '"Exo 2", sans-serif',
  fontWeight: 600,
  fontSize: "0.875rem",
  color: active ? PINK : "#D4D4D4",
  padding: "10px 18px",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "color 0.15s",
});

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openL1, setOpenL1] = useState<string | null>(null);
  const [openL2, setOpenL2] = useState<string | null>(null);
  const [openL3, setOpenL3] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleNav = (page: string) => {
    router.push(getRoute(page));
    setMenuOpen(false);
    setOpenL1(null);
    setOpenL2(null);
    setOpenL3(null);
  };

  const isActive = (page: string) => pathname === getRoute(page);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#0A0A0A",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseLeave={() => {
        setOpenL1(null);
        setOpenL2(null);
        setOpenL3(null);
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          padding: "0 clamp(1rem,4vw,3rem)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          style={{ background: "none", border: "none", cursor: "pointer", flexShrink: 0, padding: 0 }}
          aria-label="Ir al inicio"
        >
          <Image src="/logo.png" alt="JESUS FPV" height={48} width={120} style={{ height: 48, width: "auto", objectFit: "contain" }} priority />
        </button>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {links.map((link) => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => { setOpenL1(link.label); setOpenL2(null); setOpenL3(null); }}
            >
              <button
                onClick={() => !link.children ? handleNav(link.page) : setOpenL1(openL1 === link.label ? null : link.label)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.03em",
                  color: hovered === link.label ? PINK : isActive(link.page) ? NEON : "#D4D4D4",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color 0.15s",
                }}
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.label}
                {"children" in link && (
                  <span style={{ fontSize: "0.65rem", opacity: 0.6, transform: openL1 === link.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                )}
              </button>

              {/* L1 Dropdown */}
              {"children" in link && openL1 === link.label && (
                <div style={{ ...dropdownStyle, top: "100%", left: 0 }}>
                  {link.children!.map((child) => (
                    <div
                      key={child.label}
                      style={{ position: "relative" }}
                      onMouseEnter={() => { setOpenL2("children" in child ? child.label : null); setOpenL3(null); }}
                    >
                      <button
                        onClick={() => !("children" in child) && handleNav(child.page)}
                        style={itemStyle(openL2 === child.label)}
                        onMouseEnter={(e) => { if (!("children" in child)) (e.currentTarget as HTMLButtonElement).style.color = PINK; }}
                        onMouseLeave={(e) => { if (!("children" in child)) (e.currentTarget as HTMLButtonElement).style.color = "#D4D4D4"; }}
                      >
                        {child.label}
                        {"children" in child && (
                          <span style={{ color: openL2 === child.label ? PINK : "#808080", fontSize: "0.8rem" }}>›</span>
                        )}
                      </button>

                      {/* L2 Dropdown */}
                      {"children" in child && openL2 === child.label && (
                        <div style={{ ...dropdownStyle, top: 0, left: "100%" }}>
                          {(child as { label: string; page: string; children: { label: string; page: string; children?: { label: string; page: string }[] }[] }).children.map((sub) => (
                            <div
                              key={sub.label}
                              style={{ position: "relative" }}
                              onMouseEnter={() => setOpenL3("children" in sub ? sub.label : null)}
                            >
                              <button
                                onClick={() => !("children" in sub) && handleNav(sub.page)}
                                style={itemStyle(openL3 === sub.label)}
                                onMouseEnter={(e) => { if (!("children" in sub)) (e.currentTarget as HTMLButtonElement).style.color = PINK; }}
                                onMouseLeave={(e) => { if (!("children" in sub)) (e.currentTarget as HTMLButtonElement).style.color = "#D4D4D4"; }}
                              >
                                {sub.label}
                                {"children" in sub && (
                                  <span style={{ color: openL3 === sub.label ? PINK : "#808080", fontSize: "0.8rem" }}>›</span>
                                )}
                              </button>

                              {/* L3 Dropdown */}
                              {"children" in sub && openL3 === sub.label && (
                                <div style={{ ...dropdownStyle, top: 0, left: "100%" }}>
                                  {sub.children!.map((deep) => (
                                    <button
                                      key={deep.label}
                                      onClick={() => handleNav(deep.page)}
                                      style={itemStyle(false)}
                                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = PINK; }}
                                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#D4D4D4"; }}
                                    >
                                      {deep.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8 }}
          aria-label="Abrir menú"
        >
          <span style={{ width: 24, height: 2, background: NEON, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: NEON, display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ width: 24, height: 2, background: NEON, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "0.75rem 0" }}>
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.page)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 600,
                fontSize: "1rem",
                color: isActive(l.page) ? NEON : "#D4D4D4",
                padding: "13px 1.5rem",
                textAlign: "left",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
