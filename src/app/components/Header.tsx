"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="py-2 sm:py-3 fixed top-0 left-0 w-full shadow-lg z-20 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-6">
        <h1 className="text-base sm:text-xl font-bold text-white">My Blog</h1>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <nav className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 absolute sm:static top-12 sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-gray-800 sm:bg-transparent text-white sm:text-sm text-xs shadow-lg sm:shadow-none z-10`}
        >
        <Link
            href="/"
            className="block px-4 py-2 sm:p-0 hover:text-yellow-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 sm:p-0 hover:text-yellow-400 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 sm:p-0 hover:text-yellow-400 transition duration-200"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 sm:p-0 hover:text-yellow-400 transition duration-200"
          >
            Blog
          </Link>
        </nav>
      
      </div>
    </header>
  );
}


