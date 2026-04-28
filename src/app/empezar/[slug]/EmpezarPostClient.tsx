"use client";

import { useRouter } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Post } from "@/lib/posts";
import { getRoute } from "@/lib/navigate";

const NEON = "#CCFF00";
const PINK = "#FF00FF";
const SURFACE = "#141414";
const TEXT = "#D4D4D4";
const MUTED = "#808080";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, fontSize: "clamp(1.3rem,2.5vw,1.8rem)", color: "#fff", marginTop: "2.5rem", marginBottom: "1rem" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "1.2rem", color: "#fff", marginTop: "2rem", marginBottom: "0.75rem" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1rem", color: TEXT, lineHeight: 1.8, marginBottom: "1.25rem" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem", color: TEXT }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem", color: TEXT }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.4rem" }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "#fff", fontWeight: 700 }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a style={{ color: NEON, textDecoration: "underline", textDecorationColor: "rgba(204,255,0,0.4)" }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={{ borderLeft: `3px solid ${NEON}`, paddingLeft: "1.25rem", marginBottom: "1.25rem", color: MUTED, fontStyle: "italic" }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "2px 6px", fontFamily: "monospace", fontSize: "0.9em", color: NEON }} {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "1.25rem", overflowX: "auto", marginBottom: "1.5rem" }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "2rem 0" }} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }} {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th style={{ background: SURFACE, fontFamily: '"Exo 2", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: NEON, padding: "10px 14px", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.1)" }} {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.88rem", color: TEXT, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }} {...props} />
  ),
};

const catColors: Record<string, string> = {
  "Educación Técnica": NEON,
  "Cinematografía FPV": PINK,
  "Normativa": "#60a5fa",
  "Reviews": "#f59e0b",
};

export default function EmpezarPostClient({ post }: { post: Post }) {
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route);
    window.scrollTo(0, 0);
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jesusfpv.com/" },
      { "@type": "ListItem", position: 2, name: "Empezar", item: "https://jesusfpv.com/empezar" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://jesusfpv.com/empezar/${post.slug}` },
    ],
  };

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Jesús FPV" },
    publisher: { "@type": "Organization", name: "JESUS FPV" },
  };

  return (
    <div style={{ paddingTop: 64 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      {/* Article Header */}
      <section style={{ background: SURFACE, borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {/* Breadcrumbs SILO */}
          <nav aria-label="Migas de pan" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span
              onClick={() => navigate(getRoute("home"))}
              style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, cursor: "pointer", transition: "color 0.15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = NEON; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
            >
              Inicio
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span
              onClick={() => navigate(getRoute("empezar"))}
              style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: MUTED, cursor: "pointer", transition: "color 0.15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = NEON; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
            >
              Empezar
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.8rem", color: NEON, fontWeight: 600 }}>
              {post.title}
            </span>
          </nav>

          {/* Category badge */}
          <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", color: "#000", background: catColors[post.category] || NEON, padding: "4px 12px", borderRadius: 100, display: "inline-block", marginBottom: "1.25rem" }}>
            {post.category.toUpperCase()}
          </span>

          <h1 style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 900, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "1.05rem", color: TEXT, lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {post.description}
          </p>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: MUTED }}>Jesús FPV</span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: MUTED }}>
              {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span style={{ fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: MUTED }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Affiliate disclaimer */}
      {post.affiliateLinks && (
        <div style={{ background: "rgba(204,255,0,0.04)", borderBottom: "1px solid rgba(204,255,0,0.1)", padding: "0.75rem clamp(1.5rem,5vw,4rem)" }}>
          <p style={{ maxWidth: 720, margin: "0 auto", fontFamily: '"Exo 2", sans-serif', fontSize: "0.78rem", color: MUTED }}>
            ⚠️ Este artículo contiene enlaces de afiliado. Si compras a través de ellos, recibo una pequeña comisión sin coste adicional para ti.
          </p>
        </div>
      )}

      {/* Article body */}
      <section style={{ background: "#0A0A0A", padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </section>

      {/* Back to Empezar */}
      <section style={{ background: "#0A0A0A", padding: "2rem clamp(1.5rem,5vw,4rem) 4rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button
            onClick={() => navigate(getRoute("empezar"))}
            style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: '"Exo 2", sans-serif', fontWeight: 600, fontSize: "0.9rem", color: MUTED, padding: "10px 20px", borderRadius: 6, transition: "all 0.2s" }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = NEON; b.style.color = NEON; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.15)"; b.style.color = MUTED; }}
          >
            ← Volver a Empezar
          </button>
        </div>
      </section>
    </div>
  );
}
