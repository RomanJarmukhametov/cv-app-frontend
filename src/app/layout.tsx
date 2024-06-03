import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome - Roman Jarmukhametov",
  description:
    "Roman Jarmukhametov's personal website. I use this website to showcase my projects, skills, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="scroll-smooth"
      lang="en">
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
