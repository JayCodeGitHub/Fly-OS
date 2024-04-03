import { NavigationItems } from "@/items/navigationItems";
import NavItem from "./navItem";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 py-48 w-28 p-2 h-screen flex flex-col justify-around items-center">
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
