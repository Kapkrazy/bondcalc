"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className="shadow-md px-4 py-3 flex justify-between items-center text-white bg-green-700">
      <div className="text-xl font-bold "><Link href='/'>BondCalc</Link></div>
      <div
        className={`absolute top-0 left-0 w-full bg-green-700 text-white transition-transform duration-300 ${
          menuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4 md:space-y-0 md:flex-row md:space-x-4 md:p-0"> 
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/calculator" onClick={handleMenuToggle}>
              Calculator
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/about" onClick={handleMenuToggle}>
              About
            </Link>
          </li>
        </ul>
      </div>

      <button className="md:hidden text-white z-10" onClick={handleMenuToggle}>
        {/* Mobile menu icon (could be replaced with an actual icon later) */}
        {menuOpen ? "X" : "☰"}
      </button>
    </nav>
  );
}
