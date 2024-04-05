import { NavigationItems } from "@/items/navigationItems";
import NavItem from "./navItem";

export default function NavBar() {
  return (
    <nav className="fixed lg:top-0 bottom-0 left-0 lg:py-48 lg:w-28 w-screen p-2 lg:h-screen flex lg:flex-col flex-row justify-around lg:items-center">
      {NavigationItems.map((item) => (
        <NavItem
          key={item.path}
          icon={item.icon}
          href={item.path}
          color={item.color}
        />
      ))}
    </nav>
  );
}
