"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-medium transition-all duration-200 ${
        isActive ? "text-blue-600" : "text-black hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const navItems = [
    { href: "/events", label: "B2B Events" },
    { href: "/wish", label: "Wish" },
    { href: "/offer", label: "Offer" },
    { href: "/match", label: "Match" },
    { href: "/supply", label: "Supply Chain" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="font-extrabold text-3xl lg:text-4xl">
                b2bbazzar<span className="text-yellow-400">.</span>
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-8">
            <Link
              href="/login"
              className="px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
            >
              Login / Register
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={closeMenu}
        />
        <nav
          className={`absolute top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-extrabold text-2xl">
              b2bbazzar<span className="text-yellow-400">.</span>
            </h1>
            <button
              type="button"
              className="p-2 text-black rounded-md focus:bg-gray-100 hover:bg-gray-100"
              onClick={closeMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link
              href="/login"
              className="block w-full px-4 py-3 text-center font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
            >
              Login / Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
