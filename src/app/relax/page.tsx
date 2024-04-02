import Link from "next/link";

export default function Relax() {
  return (
    <main>
      <nav className="flex gap-2 p-2">
        <Link href="/">Home</Link>
        <Link href="/music">Music</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/games">Games</Link>
        <Link href="/relax">Regax</Link>
        <Link href="/settings">Settings</Link>
      </nav>
      <h1>Relax</h1>
    </main>
  );
}