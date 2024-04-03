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
  return (
    <Link
      href={href}
      className={`w-16 h-16 flex justify-center items-center rounded-lg bg-${color} `}
    >
      {icon}
    </Link>
  );
}
