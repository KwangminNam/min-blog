import type { Metadata } from "next";
import localFont from "next/font/local";
import "@monorepo/ui/styles.css";
import { container } from "./layout.css";
import Header from "../components/Header/header";
import Provider from "@/provider/ThemeProvider";
import { SITE } from "@/constant/stie";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.route53),
  title: {
    default: SITE.title,
    template: "%s | " + SITE.title
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={container}>
          <Provider>
            <Header />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
