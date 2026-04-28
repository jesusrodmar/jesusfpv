@AGENTS.md

# Jesus FPV — Guía de Marca y Contenido

## Identidad de Marca
- **Web:** jesusfpv.com — Hub de referencia FPV cinemático en español
- **Audiencia:** Pilotos FPV de España/LATAM, principiantes a avanzados, 18-40 años
- **Tono:** Experto pero cercano, directo, sin florituras, pasión genuina por FPV
- **Idioma:** Español de España, tutear siempre ("tú", no "usted"), jerga FPV natural (cinewhoop, freestyle, betaflight, goggles, bind, etc.)
- **Evitar:** Frases genéricas de marketing, superlativos vacíos, texto en piloto automático

## Colores corporativos
- Verde lima neón: `#CCFF00` — acentos principales, CTAs, destacados, bordes activos
- Magenta: `#FF00FF` — color secundario, hover states, decorativos
- Fondo oscuro: `#0A0A0A` / `#141414`
- Texto principal: `#D4D4D4` / `#FFFFFF`
- Gris medio: `#808080`

## Tipografía
- Headlines y títulos: **Exo 2** (Google Font), weights 600–900 — futurista, técnica, enérgica
- Body y UI: **Inter** (Google Font), weights 400–600 — limpia, legible

## Categorías de artículos (usar exactamente estos nombres)
- `"Educación Técnica"` — Tutoriales, guías técnicas, hardware, configuración
- `"Cinematografía FPV"` — Técnica de vuelo creativo, edición de vídeo, cine FPV
- `"Normativa"` — AESA, legislación drones España, requisitos legales
- `"Reviews"` — Análisis de productos con comparativas y links de afiliado

## SEO — Palabras clave principales
- Head terms: `drones fpv`, `fpv españa`, `fpv cinemático`, `betaflight`, `cinewhoop`
- Long-tail: `mejor dron fpv principiantes`, `normativa drones españa aesa`, `como aprender fpv`, `kit fpv completo`
- Formato de tags: siempre en **minúsculas**, en español, sin tildes en tags cortos

## Front Matter MDX — Campos obligatorios
```yaml
title: string          # ≤60 chars, keyword al inicio
description: string    # 150-160 chars exactos, keyword + valor + CTA implícito
date: "YYYY-MM-DD"
category: string       # Una de las 4 categorías de arriba
tags: string[]         # 4-8 tags, minúsculas
readTime: "X min"
affiliateLinks: boolean
```

## Sistema de afiliados
- Los productos con link de afiliado están mapeados en `src/lib/affiliates.ts`
- En MDX, usar `getAffiliateUrl("product-id")` para generar URLs de afiliado
- Solo usar `affiliateLinks: true` cuando el artículo incluye al menos un link de afiliado real

## Secciones de la web (para enlaces internos)
- `/blog` — Todos los artículos
- `/empezar` — Guía de inicio para principiantes
- `/guias` — Guías técnicas
- `/tienda` — Productos recomendados (afiliados)
- `/normativa` — Normativa AESA
- `/setup` — El setup personal del autor
- `/contacto` — Contacto
