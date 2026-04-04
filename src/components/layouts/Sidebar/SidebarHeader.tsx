import ThemeButton from "@/components/elements/ThemeButton";
import clsx from "clsx";
import Image from "next/image";

export default function SidebarHeader() {
  return (
    <header
      className={clsx(
        "m-auto w-fit",
        "flex items-center justify-between",
        "md:flex-col",
        "lg:mb-12 lg:w-52 lg:flex-row",
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src="https://res.cloudinary.com/dgnlhc8r1/image/upload/v1775262565/WhatsApp_Image_2026-04-04_at_07.29.06_zlssuf.jpg"
          alt="Made Wijaya - Front End Developer"
          className="border__color h-11 w-11 rounded-full"
          width={100}
          height={100}
        />

        <div className="hidden flex-col lg:flex">
          <h2 className="primary text-base font-medium md:text-lg">Made</h2>
          <p className="secondary text-sm md:text-base">Wijaya</p>
        </div>
      </div>

      <ThemeButton />
    </header>
  );
}
