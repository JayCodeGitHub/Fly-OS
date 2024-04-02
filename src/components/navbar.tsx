import Link from "next/link";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Music", path: "/music" },
  { name: "Movies", path: "/movies" },
  { name: "Games", path: "/games" },
  { name: "Relax", path: "/relax" },
  { name: "Settings", path: "/settings" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 py-48 w-28 p-2 h-screen flex flex-col justify-around items-center">
      {navigationItems.map((item) => (
        <Link key={item.path} href={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
