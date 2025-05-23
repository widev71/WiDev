import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe | Made Wijaya",
  description:
    "Stay informed and receive email notifications whenever a new blog post is published. Subscribe to stay up-to-date with the latest content, delivered right to your inbox. Rest assured, we respect your privacy - no spam.",
};

export default function Subscribe() {
  return (
    <div className="p-8">
      <PageTitle title="Subscribe" description="Subscribe to my newsletter." />
    </div>
  );
}
