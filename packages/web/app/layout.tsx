import type { Metadata } from "next";
import localFont from "next/font/local";
import "@monorepo/ui/styles.css";
import { containerStyled } from "./layout.css";
import Header from "../components/Header/header";
import ThemeProvider from "@/provider/theme-provider";
import { SITE } from "@/constant/site";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});
("");
export const metadata: Metadata = {
  metadataBase: new URL(SITE.route53),
  title: {
    default: SITE.title,
    template: "%s | " + SITE.title
  },
  icons: {
    icon: "/static/favicon.ico"
  },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.route53,
    siteName: SITE.title,
    locale: "ko_KR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ko" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Header />
          <div className={containerStyled}>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
