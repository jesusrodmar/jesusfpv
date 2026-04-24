export const routes: Record<string, string> = {
  home: "/",
  empezar: "/empezar",
  guias: "/guias",
  tienda: "/tienda",
  blog: "/blog",
  normativa: "/normativa",
  contacto: "/contacto",
  setup: "/setup",
};

export function getRoute(page: string): string {
  return routes[page] ?? "/";
}
