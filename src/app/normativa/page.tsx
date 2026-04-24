import type { Metadata } from "next";
import NormativaClient from "./NormativaClient";

export const metadata: Metadata = {
  title: "Normativa Drones España — AESA, ENAIRE y requisitos legales",
  description: "Normativa actualizada AESA 2026, zonas ENAIRE y guías de requisitos legales para pilotos y videógrafos profesionales en España.",
};

export default function NormativaPage() {
  return <NormativaClient />;
}
