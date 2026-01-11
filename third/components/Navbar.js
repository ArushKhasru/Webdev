import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg- border-b shadow-sm px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tight cursor-pointer">
          Instagram
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-600 transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
