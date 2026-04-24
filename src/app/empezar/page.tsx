import type { Metadata } from "next";
import EmpezarClient from "./EmpezarClient";

export const metadata: Metadata = {
  title: "Empieza en FPV — Guía para principiantes",
  description: "La ruta guiada para empezar en FPV sin perder dinero. RTF, emisoras, gafas, simuladores, montaje y normativa AESA.",
};

export default function EmpezarPage() {
  return <EmpezarClient />;
}
