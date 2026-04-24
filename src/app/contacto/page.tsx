import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto — Colaboraciones, patrocinios y consultoría FPV",
  description: "¿Tienes un proyecto FPV? Colaboraciones, patrocinios, workshops y consultoría. Cuéntame qué tienes en mente.",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
