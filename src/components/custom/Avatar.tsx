import StrapiImage from "@/components/custom/StrapiImage";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number; // Optional size prop to customize avatar size
  fallback?: React.ReactNode; // Optional fallback content
  className?: string;
}

/**
 * Avatar component that displays a round image.
 *
 * @param src - The source URL of the image.
 * @param alt - The alternative text for the image.
 * @param size - The size of the avatar (default is 80x80).
 * @param fallback - The fallback content if the image is not available.
 * @param className - Additional CSS classes for the avatar container.
 * @returns The rendered avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 80,
  fallback,
  className,
}) => {
  const containerStyle = {
    width: size,
    height: size,
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white border-[1px] border-white ${className}`}
      style={containerStyle}>
      {src ? (
        <StrapiImage
          src={src}
          alt={alt}
          height={size}
          width={size}
          className="object-cover rounded-full"
        />
      ) : (
        fallback
      )}
    </div>
  );
};

export default Avatar;
