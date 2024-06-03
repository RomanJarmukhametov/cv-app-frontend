"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Avatar from "@/components/custom/Avatar";
import SideNavigationProps from "@/types/SideNavigationProps";

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

/**
 * Returns the corresponding icon component based on the given name.
 * @param name - The name of the icon.
 * @returns The icon component or null if the name is not recognized.
 */
function getIcon(name: string) {
  const iconStyles = "";
  switch (name) {
    case "about":
      return <AboutIcon className={iconStyles} />;
    case "education":
      return <EducationIcon className={iconStyles} />;
    case "experience":
      return <ExperienceIcon className={iconStyles} />;
    case "skills":
      return <SkillsIcon className={iconStyles} />;
    case "portfolio":
      return <PortfolioIcon className={iconStyles} />;
    case "contacts":
      return <ContactsIcon className={iconStyles} />;
    case "feedback":
      return <FeedbackIcon className={iconStyles} />;
    default:
      return null;
  }
}

/**
 * Renders an SVG icon for the About section.
 */
function AboutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path d="M1.16667 14C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333C14 14 12.8333 14 12.8333 14H1.16667ZM7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7Z" />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Education section.
 */
function EducationIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M2.33337 11.498V8.16296L5.45073 10.464C5.9222 10.8121 6.4564 10.9953 7.00008 10.9953C7.54377 10.9953 8.07796 10.8121 8.54943 10.464L11.6668 8.16396V11.498C11.6669 11.5637 11.6569 11.6288 11.6374 11.6895C11.6179 11.7502 11.5893 11.8054 11.5532 11.852L11.5517 11.853L11.5501 11.856L11.5447 11.862L11.5268 11.884L11.4646 11.958C11.4101 12.019 11.3323 12.105 11.2305 12.206C10.9511 12.4818 10.6542 12.7269 10.343 12.939C9.31363 13.641 8.16529 14.0051 7.00008 13.999C5.83487 14.0051 4.68653 13.641 3.65716 12.939C3.3462 12.7269 3.0496 12.4817 2.77049 12.206C2.66786 12.1042 2.56872 11.9968 2.47338 11.884L2.45549 11.862C2.41737 11.8147 2.38694 11.7582 2.36598 11.6957C2.34501 11.6332 2.33393 11.566 2.33337 11.498Z"
        fill="currentColor"
      />
      <path
        d="M13.8049 5.43193L8.16207 9.59693C7.80847 9.85801 7.40782 9.9954 7.00006 9.9954C6.5923 9.9954 6.19165 9.85801 5.83805 9.59693L0.777785 5.86193V10.4979C0.777785 10.6305 0.736812 10.7577 0.663881 10.8515C0.590949 10.9453 0.492033 10.9979 0.388892 10.9979C0.285752 10.9979 0.186835 10.9453 0.113904 10.8515C0.0409725 10.7577 5.9835e-08 10.6305 5.9835e-08 10.4979V4.99793C-3.88288e-05 4.90778 0.0188792 4.8193 0.0547517 4.74184C0.0906243 4.66439 0.142117 4.60084 0.20378 4.55793L5.83805 0.398929C6.19158 0.137555 6.59225 0 7.00006 0C7.40787 0 7.80854 0.137555 8.16207 0.398929L13.8049 4.56493C13.8642 4.60875 13.9135 4.6719 13.9477 4.74801C13.982 4.82412 14 4.91049 14 4.99843C14 5.08636 13.982 5.17274 13.9477 5.24885C13.9135 5.32496 13.8642 5.38811 13.8049 5.43193Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Experience section.
 */
function ExperienceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M7.71252 2.98279L11.0172 6.28826L3.3047 14H0V10.6945L7.71252 2.98201V2.98279ZM8.81408 1.88122L10.4664 0.228093C10.6125 0.0820452 10.8106 0 11.0172 0C11.2238 0 11.4219 0.0820452 11.568 0.228093L13.7719 2.432C13.918 2.5781 14 2.77621 14 2.98279C14 3.18936 13.918 3.38748 13.7719 3.53357L12.1188 5.18592L8.81408 1.88122Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Skills section.
 */
function SkillsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99574 0H11.0043C11.1645 0.000193388 11.322 0.0442666 11.4618 0.128034C11.6016 0.211745 11.719 0.33232 11.8031 0.478319C11.8031 0.478416 11.8032 0.478512 11.8032 0.478609L13.8583 4.03271C13.9595 4.20818 14.0085 4.41251 13.9988 4.61854C13.989 4.82457 13.921 5.02254 13.8037 5.18615L13.8032 5.18687L7.74449 13.6066C7.74436 13.6067 7.74424 13.6069 7.74411 13.6071C7.65655 13.7292 7.54397 13.8282 7.41506 13.8963C7.28597 13.9645 7.14395 14 7 14C6.85605 14 6.71403 13.9645 6.58494 13.8963C6.45603 13.8282 6.34345 13.7292 6.25589 13.6071C6.25576 13.6069 6.25564 13.6067 6.25551 13.6066L0.196797 5.18687L0.196276 5.18615C0.0789924 5.02254 0.0109584 4.82457 0.00121549 4.61854C-0.00852748 4.41251 0.0404827 4.20818 0.141732 4.03271L2.19678 0.478609C2.19689 0.478418 2.197 0.478226 2.19711 0.478035C2.28114 0.332164 2.39854 0.211691 2.53819 0.128034C2.67803 0.0442667 2.83553 0.000193388 2.99574 0ZM2.57889 1.71659L1.25857 4.00002H3.49226L2.57889 1.71659ZM5.13332 4.00002L7 1.33334L8.86668 4.00002H5.13332ZM9.14043 5.00002L7 11.4977L4.85957 5.00002H9.14043ZM3.86981 5.00002L6.08933 11.7378L1.24087 5.00002H3.86981ZM7.91067 11.7378L10.1302 5.00002H12.7591L7.91067 11.7378ZM12.7414 4.00002L11.4211 1.71659L10.5077 4.00002H12.7414ZM9.68904 3.50815L10.6923 1H7.93334L9.68904 3.50815ZM6.06666 1H3.3077L4.31096 3.50815L6.06666 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Portfolio section.
 */
function PortfolioIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M12.6 2.33333H11.9V14H12.6C13.37 14 14 13.3 14 12.4444V3.88889C14 3.03333 13.37 2.33333 12.6 2.33333ZM0 3.88889V12.4444C0 13.3 0.6293 14 1.4 14H2.1V2.33333H1.4C0.6293 2.33333 0 3.03333 0 3.88889ZM9.45 0.704667C8.9733 0.458889 8.1277 0 6.9867 0C5.8436 0 5.0267 0.458889 4.55 0.704667V2.33333H2.8V14H11.2V2.33333H9.45V0.704667ZM8.4 2.33333H5.6V1.29422C5.9738 1.11533 6.3546 0.932555 6.9867 0.932555C7.6181 0.932555 8.0269 1.11456 8.4 1.29422V2.33333Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Contacts section.
 */
function ContactsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M13.8508 0.148907C13.9237 0.221861 13.9727 0.315206 13.9915 0.416621C14.0103 0.518036 13.9978 0.622754 13.9558 0.716954L8.18664 13.6974C8.14633 13.7882 8.08038 13.8652 7.9969 13.919C7.91341 13.9728 7.81603 14.0011 7.7167 14.0003C7.61738 13.9996 7.52043 13.9698 7.43778 13.9147C7.35513 13.8596 7.29037 13.7816 7.25145 13.6902L5.16997 8.82971L0.308435 6.74722C0.21739 6.70806 0.13973 6.64321 0.0849538 6.56061C0.0301778 6.47801 0.000660125 6.38124 1.09431e-05 6.28213C-0.000638239 6.18303 0.0276092 6.08588 0.0812985 6.00257C0.134988 5.91926 0.211792 5.8534 0.302316 5.81305L13.2827 0.0438647C13.3768 0.00210038 13.4813 -0.0102174 13.5825 0.00853105C13.6837 0.0272795 13.7769 0.0762164 13.8498 0.148907H13.8508Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Feedback section.
 */
function FeedbackIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M2.78533 10.8595C1.06133 9.74141 0 7.97926 0 6.03543C0 2.6576 3.16533 0 7 0C10.8347 0 14 2.6576 14 6.03543C14 9.41325 10.8347 12.0709 7 12.0709C6.70533 12.0709 6.412 12.0551 6.12133 12.0242L3.61133 13.7892C3.20133 14.0233 2.97333 14.0944 2.62133 13.8366C2.208 13.5321 2.224 13.1961 2.36733 12.7164L2.78533 10.8595ZM1.33333 6.03543C1.33333 7.56636 2.27867 8.99605 3.854 9.85559L4.32467 10.1134L4.20067 10.6663L3.93333 11.8497L5.8 10.5356L6.044 10.5686C6.35933 10.6124 6.67867 10.6347 7 10.6347C10.1607 10.6347 12.6667 8.53074 12.6667 6.03543C12.6667 3.54011 10.1607 1.43615 7 1.43615C3.83933 1.43615 1.33333 3.54011 1.33333 6.03543Z"
        fill="currentColor"
      />
    </svg>
  );
}
