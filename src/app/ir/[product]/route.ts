import { NextRequest, NextResponse } from "next/server";
import { getAffiliateUrl } from "@/lib/affiliates";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  const url = getAffiliateUrl(product);

  if (!url) {
    return NextResponse.redirect(new URL("/tienda", _req.url));
  }

  const redirectUrl = new URL(url);
  redirectUrl.searchParams.set("utm_source", "jesusfpv");
  redirectUrl.searchParams.set("utm_medium", "afiliado");
  redirectUrl.searchParams.set("utm_campaign", product);

  return NextResponse.redirect(redirectUrl.toString(), { status: 302 });
}
