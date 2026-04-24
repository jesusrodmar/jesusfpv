import type { Metadata } from "next";
import GuiasClient from "./GuiasClient";

export const metadata: Metadata = {
  title: "Guías FPV — Montajes, tutoriales y reviews",
  description: "Guías técnicas sin rodeos: montajes paso a paso, comparativas de compra, tutoriales Betaflight y reviews honestas.",
};

export default function GuiasPage() {
  return <GuiasClient />;
}
