export const affiliates: Record<string, string> = {
  // Drones
  "iflight-nazgul5-v3": "https://www.getfpv.com/iflight-nazgul5-v3.html",
  "betafpv-cetus-x": "https://betafpv.com/products/cetus-x-fpv-kit",
  "happymodel-mobula7": "https://www.happymodel.cn/index.php/product/mobula7/",
  "iflight-nazgul-evoque-f5": "https://www.getfpv.com/iflight-nazgul-evoque-f5.html",
  "dji-avata-2": "https://store.dji.com/es/product/dji-avata-2",
  "flywoo-cinerace20": "https://flywoo.net/products/flywoo-cinerace20",

  // Gafas
  "dji-goggles-2": "https://store.dji.com/es/product/dji-goggles-2",
  "dji-goggles-3": "https://store.dji.com/es/product/dji-goggles-3",
  "skyzone-sky04x": "https://www.skyzonefpv.com/products/skyzone-sky04x",
  "eachine-ev800d": "https://www.banggood.com/Eachine-EV800D.html",

  // Emisoras
  "radiomaster-tx16s": "https://www.radiomasterrc.com/products/tx16s-mark-ii",
  "radiomaster-zorro": "https://www.radiomasterrc.com/products/zorro-radio-controller",
  "radiomaster-boxer": "https://www.radiomasterrc.com/products/boxer-radio-controller",
  "radiomaster-pocket": "https://www.radiomasterrc.com/products/pocket-radio-controller",

  // Baterías
  "cnhl-1500mah-6s": "https://www.cnhl-power.com/cnhl-ministar-1500mah-22-2v-6s-120c.html",
  "tattu-r-line-6s": "https://www.genstattu.com/tattu-r-line-version-4-0-1550mah-22-2v-130c-6s1p.html",

  // Cámaras
  "gopro-hero12": "https://gopro.com/es/es/update/hero12",
  "dji-action-4": "https://store.dji.com/es/product/osmo-action-4",

  // Otros
  "isdt-q6-plus": "https://www.isdt.co/q6-plus.html",
};

export function getAffiliateUrl(product: string): string | null {
  return affiliates[product] ?? null;
}
