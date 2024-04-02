import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 py-48 w-28 p-2 h-screen flex flex-col justify-around items-center gap-2">
      <Link href="/">Home</Link>
      <Link href="/music">Music</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/games">Games</Link>
      <Link href="/relax">Relax</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}
