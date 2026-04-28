export const routes: Record<string, string> = {
  home: "/",
  empezar: "/empezar",
  guias: "/guias",
  tienda: "/tienda",
  blog: "/blog",
  normativa: "/normativa",
  contacto: "/contacto",
  setup: "/setup",
  "que-es-un-dron": "/empezar/que-es-un-dron",
};

export function getRoute(page: string): string {
  return routes[page] ?? "/";
}
