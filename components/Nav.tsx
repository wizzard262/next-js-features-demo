// Navigation bar shared across all pages.
// Uses Next.js <Link> for client-side navigation.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

const linkClass = (path: string) =>
  pathname === path
    ? "bg-gray-200 border border-gray-300 text-blue-700 font-medium px-2 py-1 rounded"
    : "text-gray-700 hover:bg-gray-100 px-2 py-1 rounded";


  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/" className={linkClass("/")}>Home</Link>
      <Link href="/static" className={linkClass("/static")}>SSG</Link>
      <Link href="/ssr" className={linkClass("/ssr")}>SSR</Link>
      <Link href="/isr" className={linkClass("/isr")}>ISR</Link>
      <Link href="/streaming" className={linkClass("/streaming")}>Streaming</Link>
      <Link href="/docs/intro" className={linkClass("/docs/intro")}>Dynamic Route</Link>
      <Link href="/server-actions" className={linkClass("/server-actions")}>Server Actions</Link>
      <Link href="/image-optimization" className={linkClass("/image-optimization")}>Image Optimization</Link>
      <Link href="/middleware" className={linkClass("/middleware")}>Middleware</Link>
      <Link href="/api/hello" className={linkClass("/api/hello")}>API Route</Link>
    </nav>
  );
}
