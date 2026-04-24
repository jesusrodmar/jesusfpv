import type { Metadata } from "next";
import SetupClient from "./SetupClient";

export const metadata: Metadata = {
  title: "Mi Setup FPV — El gear que uso sin patrocinios",
  description: "El equipo FPV que Jesús usa de verdad en cada sesión: dron, gafas, emisora, baterías y cámara. Solo recomiendo lo que llevo yo.",
};

export default function SetupPage() {
  return <SetupClient />;
}
