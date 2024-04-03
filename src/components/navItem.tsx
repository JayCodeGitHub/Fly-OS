import Link from "next/link";

export default function NavItem({
  icon,
  href,
}: {
  icon: JSX.Element;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-16 h-16 flex justify-center items-center rounded-lg"
    >
      {icon}
    </Link>
  );
}
