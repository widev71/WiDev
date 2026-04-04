import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";
import type { Metadata } from "next";
import Head from "next/head";
import { Outfit } from "next/font/google";
import "../globals.css";
import { DEFAULT_METADATA } from "@/constants/metadata";
import InteractiveGrid from "@/components/elements/InteractiveGrid";
import SplashScreen from "@/components/elements/SplashScreen";
import SplashCursor from "@/components/elements/SplashCursor";
import AudioPlayer from "@/components/elements/AudioPlayer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Made Wijaya - Front End Developer",
  robots: DEFAULT_METADATA.robots,
  keywords: DEFAULT_METADATA.keyword,
  description: "Portofolio Made Wijaya, Front End Developer spesialis React & Next.js",
  creator: "Made Wijaya",
  icons: {
    icon: "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg",
    shortcut: "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg",
    apple: "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg"
  },
  authors: {
    name: "Made Wijaya",
  },
  openGraph: {
    type: "website",
    description: "Portofolio Made Wijaya, Front End Developer spesialis React & Next.js",
    title: "Made Wijaya - Front End Developer",
    images: ["https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg"],
    locale: DEFAULT_METADATA.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Made Wijaya",
    title: "Made Wijaya - Front End Developer",
    description: "Portofolio Made Wijaya, Front End Developer spesialis React & Next.js",
    images: ["https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_METADATA.locale}>
      <body className={outfit.className}>
        <Providers>
          <SplashCursor />
          <SplashScreen />
          <AudioPlayer />
          <InteractiveGrid />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
