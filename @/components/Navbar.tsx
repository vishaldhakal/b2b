"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "../../@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-medium transition-all duration-200 flex justify-center items-center flex-col ${
        isActive ? "text-blue-600" : "text-black hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/b2b-bazaar",
      label: "B2B Events",
      subtitle: "Join Networking Events",
    },
    { href: "/wish-and-offers", label: "Wish & Offers" },
    { href: "/business-clinic", label: "Business Clinic" },
    { href: "/training", label: "Training" },
    { href: "/fundraising", label: "Fundraising" },
    { href: "/job-board", label: "Jobs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="font-extrabold text-3xl lg:text-4xl">
                b2bbazzar<span className="text-yellow-500">.</span>
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                <span className="text-sm">{item.label}</span>
                {item.subtitle && (
                  <span className="block font-normal text-gray-500 text-xs">
                    {item.subtitle}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-8">
            <Button asChild>
              <Link href="/login">Login / Register</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-extrabold text-2xl">
                  b2bbazzar<span className="text-yellow-400">.</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/login">Login / Register</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
