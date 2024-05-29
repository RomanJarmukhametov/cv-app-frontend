import LinkProps from "@/types/LinkProps";

import AvatarProps from "@/types/AvatarProps";

/**
 * Represents the properties of an image.
 */
interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

/**
 * Represents the properties of a hero section.
 */
interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  position: string;
  image: ImageProps;
  link: LinkProps;
  avatar: AvatarProps;
}

export default HeroSectionProps;
