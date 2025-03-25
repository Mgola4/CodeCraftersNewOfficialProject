// app/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 shadow-md fixed top-0 left-0 right-0 z-50 border-b-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="../../public/vercel.svg" alt="Logo" className="w-10 h-10" />
          <h1 className="text-[rgb(222,222,222)] text-3xl font-extrabold font-sans">
            CodeCrafters
          </h1>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-[rgb(222,222,222)] hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link href="/profile" className="text-[rgb(222,222,222)] hover:text-gray-200 transition duration-300">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-[rgb(222,222,222)] p-2">
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
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden p-4">
          <div className="space-y-4">
            <Link href="/" className="text-[rgb(222,222,222)] hover:text-gray-200">
              Home
            </Link>
            <Link href="/profile" className="text-[rgb(222,222,222)] hover:text-gray-200">
              Profile
            </Link>
            <Link href="/notifications" className="text-[rgb(222,222,222)] hover:text-gray-200">
              Notifications
            </Link>
            <Link href="/messages" className="text-[rgb(222,222,222)] hover:text-gray-200">
              Messages
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
