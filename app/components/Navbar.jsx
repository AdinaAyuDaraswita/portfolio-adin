"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">Portfolio Adin Ayu Daraswita</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-yellow-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-purple-700/90 backdrop-blur-lg px-6 py-4 space-y-4 font-semibold">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}