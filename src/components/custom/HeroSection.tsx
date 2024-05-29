import Link from "next/link";

import { Button } from "@/components/ui/button";

import Avatar from "@/components/custom/Avatar";

import StrapiImage from "@/components/custom/StrapiImage";

import HeroSectionProps from "@/types/HeroSectionProps";

/**
 * The `HeroSection` function in TypeScript React renders a hero section with dynamic data including
 * heading, position, subheading, image, link, and avatar.
 * @param  - The `HeroSection` component takes in a `data` prop of type `HeroSectionProps`, which
 * contains the following properties:
 * @returns The `HeroSection` component is returning a section element with a background image,
 * containing a container with various elements such as heading, subheading, position, avatar, and a
 * button with a link. The content is styled using Tailwind CSS classes for layout and design.
 */
export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  console.dir(data, { depth: null });

  const { heading, position, subHeading, image, link, avatar } = data;

  return (
    <section className="relative overflow-hidden h-screen">
      <StrapiImage
        className="absolute inset-0 z-0 object-cover w-full h-full"
        src={image.url}
        alt="Background Image"
        height={1080}
        width={1920}
      />
      <div className="relative h-screen bg-midnight opacity-90 overflow-hidden flex items-center justify-center">
        <div className="container py-4 sm:py-8 md:py-16 lg:py-32">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-10 flex flex-col items-center justify-center text-center">
              <Avatar
                className="mb-6"
                src={avatar.image.url}
                alt={avatar.image.alternativeText}
                size={160}
                fallback={
                  <span className="text-xl">
                    {avatar.image.alternativeText}
                  </span>
                }
              />
              <h1 className="mb-6 antialiased text-2xl md:text-4xl lg:text-5xl leading-tight text-white font-bold tracking-wide">
                {heading}
              </h1>
              <h2 className="mb-6 mx-auto text-xl md:text-2xl text-white font-medium">
                {position}
              </h2>
              <p className="mb-6 mx-auto text-lg md:text-xl text-white font-medium">
                {subHeading}
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <Button asChild>
                  <Link href={link.url}>{link.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
