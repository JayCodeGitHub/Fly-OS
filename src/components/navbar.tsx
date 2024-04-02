import Link from "next/link";
import { NavigationItems } from "@/items/navigationItems";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 py-48 w-28 p-2 h-screen flex flex-col justify-around items-center">
      {NavigationItems.map((item) => (
        <Link key={item.path} href={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
