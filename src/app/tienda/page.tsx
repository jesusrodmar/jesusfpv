import type { Metadata } from "next";
import TiendaClient from "./TiendaClient";

export const metadata: Metadata = {
  title: "Tienda FPV — Gear recomendado sin filtros",
  description: "Solo el equipo probado y recomendado. Drones, componentes, emisoras y gafas FPV con links de afiliado — sin coste extra para ti.",
};

export default function TiendaPage() {
  return <TiendaClient />;
}
