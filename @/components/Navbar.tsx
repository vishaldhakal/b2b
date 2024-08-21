"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../../@/components/ui/button";

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
  const navItems = [
    { href: "/b2b-events", label: "B2B Events" },
    { href: "/wish-offer", label: "Wish & Offer" },
    { href: "/bds-services", label: "BDS Services" },
    { href: "/business-registration", label: "Business Registration" },
    { href: "/jobbriz", label: "JobBriz" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/Logo.svg" alt="B2B birat bazaar" className="h-8" />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Membership
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
