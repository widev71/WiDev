import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics | Made Wijaya",
  description: "Metadata statistics of wijayadev.vercel.app blogs",
};

export default function Statistics() {
  return (
    <div className="p-8">
      <PageTitle title="Statistics" description="Blogs statistics" />
      <section></section>
    </div>
  );
}
