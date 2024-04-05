"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  icon,
  href,
  color,
}: {
  icon: JSX.Element;
  href: string;
  color: string;
}) {
  const colors = [
    { name: "purple", color: "bg-purple-500", shadow: "shadow-purple-500" },
    { name: "blue", color: "bg-blue-500", shadow: "shadow-blue-500" },
    { name: "orange", color: "bg-orange-500", shadow: "shadow-orange-500" },
    { name: "yellow", color: "bg-yellow-500", shadow: "shadow-yellow-500" },
    { name: "sky", color: "bg-sky-500", shadow: "shadow-sky-500" },
    { name: "gray", color: "bg-gray-500", shadow: "shadow-gray-500" },
  ];
  const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className={`lg:w-16 lg:h-16 w-14 h-14 flex justify-center items-center rounded-lg text-white hover:shadow-2xl transition-all duration-300 ease-in-out
      ${colors.find((c) => c.name === color)?.color} 
      ${colors.find((c) => c.name === color)?.shadow}
      ${currentRoute === href ? `shadow-2xl` : "shadow-none"}`}
    >
      {icon}
    </Link>
  );
}
