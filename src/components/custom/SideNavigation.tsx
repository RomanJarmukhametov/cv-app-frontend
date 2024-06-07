"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Avatar from "@/components/custom/Avatar";
import SideNavigationProps from "@/types/SideNavigationProps";
import { getIcon } from "@/lib/icons";

/**
 * The SideNavigation component in TypeScript React renders a side navigation menu with avatar, name,
 * menu items, and a link.
 * @param  - The `SideNavigation` component takes in a single prop `data`, which is of type
 * `SideNavigationProps`. The `data` prop contains the following properties:
 * @returns The `SideNavigation` component is being returned, which renders a side navigation menu
 * based on the provided `data` prop. The component includes an avatar, name, menu items with links,
 * and a button with a link. The menu items are dynamically generated based on the `menuItem` array in
 * the `data` prop. The component also handles hash changes and updates the active state based on the
 * current
 */
export function SideNavigation({
  data,
}: {
  readonly data: SideNavigationProps;
}) {
  const { avatar, name, menuItem, link } = data;

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set the initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (hash: string) => {
    setCurrentHash(hash);
  };

  return (
    <div className="px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-14 flex flex-col h-full">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="lg:hidden">
            <Avatar
              src={avatar.image.url}
              alt={avatar.image.alternativeText}
              className="mb-4"
              size={40}
              fallback={
                <span className="text-xl">{avatar.image.alternativeText}</span>
              }
            />
          </div>

          <div className="hidden lg:inline-block">
            <Avatar
              src={avatar.image.url}
              alt={avatar.image.alternativeText}
              className="mb-4"
              size={100}
              fallback={
                <span className="text-xl">{avatar.image.alternativeText}</span>
              }
            />
          </div>

          <p className="hidden lg:inline-block text-base font-bold text-white leading-tight text-center">
            {name}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {menuItem.map((item) => {
            const isActive = currentHash === `#${item.sectionId}`;

            return (
              <a
                key={item.id}
                href={`#${item.sectionId}`}
                onClick={() => handleClick(`#${item.sectionId}`)}
                className={`antialiased px-2 py-1 rounded-md flex items-center space-x-2 hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-700 ${
                  isActive ? "text-primary" : "text-raven"
                }`}>
                {getIcon(item.icon)}
                <span className="hidden lg:inline-block">{item.item} </span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full md:w-auto">
          <Button asChild>
            <Link
              href={link.url}
              className="flex space-x-2 items-center justify-center">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden lg:inline-block">{link.text}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
