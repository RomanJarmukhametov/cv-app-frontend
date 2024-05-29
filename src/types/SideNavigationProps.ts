import AvatarProps from "@/types/AvatarProps";

import LinkProps from "@/types/LinkProps";

/**
 * Represents the properties of a menu item.
 */
interface MenuItemProps {
  id: number;
  icon: string;
  sectionId: string;
  item: string;
}

interface SideNavigationProps {
  id: number;
  avatar: AvatarProps;
  name: string;
  menuItem: MenuItemProps[];
  link: LinkProps;
}

export default SideNavigationProps;
