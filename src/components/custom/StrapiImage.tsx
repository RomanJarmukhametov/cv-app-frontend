import Image from "next/image";

import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

/**
 * Renders an image component with a fallback URL if the source is not available.
 *
 * @param src - The source URL of the image.
 * @param alt - The alternative text for the image.
 * @param height - The height of the image.
 * @param width - The width of the image.
 * @param className - The CSS class name for the image component.
 * @returns The rendered image component.
 */
const StrapiImage = ({
  src,
  alt,
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) => {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default StrapiImage;
