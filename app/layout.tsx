// Global layout for the entire Next.js App Router.
// This wraps every page and defines global HTML structure, fonts, metadata, and navigation.

import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Nav from "@/components/Nav";

// Load Google Font (Inter) with automatic optimization
const inter = Inter({ subsets: ["latin"] });

// Metadata applied to all pages unless overridden
export const metadata = {
  title: "Next.js Feature Showcase",
  description: "A demo of all major Next.js features",
};

// Root layout wraps all routes inside <html> and <body>
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Shared navigation across all pages */}
        <Nav />

        {/* Page content gets injected here */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
