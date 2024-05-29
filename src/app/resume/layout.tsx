// /app/resume/layout.tsx

import { getSideNavigationData } from "@/data/loaders";

import { SideNavigation } from "@/components/custom/SideNavigation";

export default async function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const strapiData = await getSideNavigationData();

  return (
    <div className="flex h-screen">
      <aside className="w-fit md:w-1/7 bg-oxfordBlue">
        {/* Menu content goes here */}
        <SideNavigation data={strapiData} />
      </aside>
      <main className="w-3/4 bg-white p-4 overflow-y-auto">{children}</main>
    </div>
  );
}
