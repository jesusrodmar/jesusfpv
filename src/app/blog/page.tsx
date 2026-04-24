import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog FPV — Guías, tutoriales y reviews en español",
  description: "Contenido técnico, reviews honestas y normativa actualizada sobre drones FPV para todos los niveles.",
};

export default function BlogPage() {
  return <BlogClient />;
}
