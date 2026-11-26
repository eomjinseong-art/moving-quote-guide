import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GOOGLE_SITE_VERIFICATION, NAVER_SITE_VERIFICATION } from "@/lib/config";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

const verification: Metadata["verification"] = {};
if (GOOGLE_SITE_VERIFICATION) verification.google = GOOGLE_SITE_VERIFICATION;
if (NAVER_SITE_VERIFICATION) verification.other = { "naver-site-verification": NAVER_SITE_VERIFICATION };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description,
  keywords: ["이사 견적", "이사 견적 체크리스트", "입주청소 견적", "이사 요청서", "포장이사 견적 비교"],
  openGraph: { type: "website", locale: "ko_KR", url: SITE_URL, siteName: SITE_NAME, title: SITE_NAME, description, images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: ["/opengraph-image"] },
  verification,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <Disclosure />
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
