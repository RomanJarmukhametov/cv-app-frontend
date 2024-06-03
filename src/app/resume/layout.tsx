// /app/resume/layout.tsx
import type { Metadata } from "next";

import { getSideNavigationData } from "@/data/loaders";

import { SideNavigation } from "@/components/custom/SideNavigation";

export const metadata: Metadata = {
  title: "Resume - Roman Jarmukhametov",
  description:
    "Roman Jarmukhametov's personal website. I use this website to showcase my projects, skills, and experiences.",
};

export default async function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const strapiData = await getSideNavigationData();

  return (
    <div className="flex">
      <aside className="fixed w-fit md:w-1/7 bg-oxfordBlue h-full">
        {/* Menu content goes here */}
        <SideNavigation data={strapiData} />
      </aside>
      <main className="w-3/4 bg-white p-4 main-content">{children}</main>
    </div>
  );
}
