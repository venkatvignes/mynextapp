import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-stone-600 text-white p-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/trends">Trends</Link>
    </nav>
  );
}
