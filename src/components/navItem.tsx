"use client";

import Link from "next/link";

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
    { name: "purple", color: "bg-purple-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "orange", color: "bg-orange-500" },
    { name: "yellow", color: "bg-yellow-500" },
    { name: "sky", color: "bg-sky-500" },
    { name: "gray", color: "bg-gray-500" },
  ];

  return (
    <Link
      href={href}
      className={`w-16 h-16 flex justify-center items-center rounded-lg text-white ${
        colors.find((c) => c.name === color)?.color
      }`}
    >
      {icon}
    </Link>
  );
}
