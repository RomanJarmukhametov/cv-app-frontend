/**
 * Represents the properties of an avatar.
 */
interface AvatarProps {
  id: number;
  image: {
    id: number;
    url: string;
    alternativeText: string;
  };
}

export default AvatarProps;
