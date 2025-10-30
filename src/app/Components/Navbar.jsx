"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "ABOUT US",
      href: "/about",
      hasDropdown: true,
    },
    {
      name: "PRACTICE AREAS",
      href: "#",
      hasDropdown: true,
    },
    { name: "OUR PEOPLE", href: "/ourpeople" },
    { name: "CONTACT US", href: "/contactus" },
    { name: "KNOWLEDGE CENTRE", href: "/blog" },
  ];

  // Dropdown items for each menu
  const aboutDropdownItems = [
    {
      name: "Our Attorneys",
      href: "/attorneys"
    },
    {
      name: "Asterisms Legal",
      href: "/about"
    }
  ];

  const practiceAreaItems = [
    {
      name: "Bankruptcy & Insolvency Laws",
      href: "/bankruptcyandInsolvency"
    },
    {
      name: "Banking Law",
      href: "/bankinglaw"
    },
    {
      name: "Commercial, Corporate & Companies Law",
      href: "/commercialandcorporate"
    },
    {
      name: "Arbitration Law",
      href: "/companieslaw"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setIsDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      setIsDropdownOpen(true);
      setActiveDropdown(dropdownName);
      setActiveTab(dropdownName);
    }
  };

  const handleDropdownItemClick = (href) => {
    console.log("Navigating to:", href);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavItemClick = (itemName) => {
    setActiveTab(itemName);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setIsMobileDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      setIsMobileDropdownOpen(true);
      setActiveDropdown(dropdownName);
      setActiveTab(dropdownName);
    }
  };

  // Get dropdown items based on the menu name - FIXED to use exact menu names
  const getDropdownItems = (menuName) => {
    if (menuName === "ABOUT US") return aboutDropdownItems;
    if (menuName === "PRACTICE AREAS") return practiceAreaItems;
    return [];
  };

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <nav className="bg-slate-800 shadow-2xl border-b border-slate-700">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="text-slate-800 p-4 rounded-xl shadow-lg flex flex-col items-center cursor-pointer">
                  <Image
                    src="/images/logo.png"
                    alt="Asterisms Legal Logo"
                    width={160}
                    height={360}
                    className="rounded-md"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={item.name === "PRACTICE AREAS" ? dropdownRef : item.name === "ABOUT US" ? aboutDropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center px-2 py-3 text-sm font-semibold rounded-lg transition-all duration-300 group border ${activeTab === item.name && activeDropdown === item.name
                        ? "text-yellow-400 bg-slate-700 border-yellow-400 "
                        : "text-white hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                        }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform duration-300 text-yellow-400 ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleNavItemClick(item.name)}
                      className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 block border ${activeTab === item.name
                        ? "text-yellow-400 bg-slate-700 border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                        }`}
                    >
                      {item.name}
                    </a>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 min-w-42 bg-white rounded-xl shadow-2xl border-2 border-yellow-400 py-3 z-50 font-sans ">
                      {getDropdownItems(item.name).map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          onClick={() => handleDropdownItemClick(dropdownItem.href)}
                          className="block px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="/contactus">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-yellow-400">
                  Get Consultation
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-lg text-white hover:text-yellow-400 hover:bg-slate-700 transition-all duration-300 border border-slate-600 hover:border-yellow-400"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t-2 border-yellow-400">
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`w-full text-left flex items-center justify-between px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300 border ${activeTab === item.name && activeDropdown === item.name
                          ? "text-yellow-400 bg-slate-800 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700 hover:border-yellow-400"
                          }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 text-yellow-400 ${activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {/* Mobile Dropdown Items */}
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {getDropdownItems(item.name).map((dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              onClick={() => handleDropdownItemClick(dropdownItem.href)}
                              className="block px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        handleNavItemClick(item.name);
                        setIsMenuOpen(false);
                      }}
                      className={`block px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300 border ${activeTab === item.name
                        ? "text-yellow-400 bg-slate-800 border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700 hover:border-yellow-400"
                        }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <a href="/contactus">
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-6 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                    Get Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;