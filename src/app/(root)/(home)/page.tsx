import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "Made Wijaya? - Portofolio dan Blog",
  description:
    "Saya Made Wijaya, Seorang Front End Developer yang berdedikasi pada pengembangan website modern & berkualitas. Pelajari lebih lanjut tentang proyek, keterampilan, dan pemikiran saya di sini.",
  keywords: [
    "Siapa Made Wijaya",
    "portofolio Made Wijaya",
    "tentang Made Wijaya",
  ],
  openGraph: {
    title: "Made Wijaya - Front End Developer",
    description:
      "Selamat datang di situs pribadi Made Wijaya. Temukan proyek, blog, dan pemikiran saya seputar pengembangan website.",
    siteName: "Made Wijaya",
    images: [
      {
        url: "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733210455/bu69p2babzplrrcgpcil.jpg",
        width: 800,
        height: 600,
        alt: "Made Wijaya",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made Wijaya",
    description:
      "Situs Wijaya. Proyek, keterampilan, dan blog pengembangan web.",
    images: [
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733210455/bu69p2babzplrrcgpcil.jpg",
    ],
  },
};

export default function Home() {
  return (
    <section>
      <div className="px-8 pb-5 pt-8">
        <PageTitle title="Home" description="introduction to myself" />
        <Header />
        <Hero />
        <Stacks />
      </div>
    </section>
  );
}
