"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-green-700 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">BondCalc</Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/calculator" className="hover:text-blue-300">
              Calculator
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4">
          <li>
            <Link href="/" onClick={closeMenu} className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/calculator"
              onClick={closeMenu}
              className="hover:text-blue-300"
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-blue-300"
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
