import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/digital-presence", label: "Digital Presence" },
    { path: "/media-inventories", label: "Media Inventories" },
    { path: "/campaign-support", label: "Campaign Support" },
    { path: "/requirements-partnership", label: "Partnership Requirements" },
    { path: "/investors-corner", label: "Investor's Corner" },
    { path: "/seo", label: "SEO" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-[#1B365D] text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold">MEDIA BUY IN</h1>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-[#1B365D] p-2 rounded-md text-white hover:text-[#FF7F6B] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  to={item.path}
                  className={`hover:text-[#FF7F6B] transition-colors whitespace-nowrap relative ${
                    isActive(item.path)
                      ? "text-[#FF7F6B] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#FF7F6B]"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "text-[#FF7F6B] bg-[#234780]"
                    : "text-white hover:text-[#FF7F6B] hover:bg-[#234780]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;