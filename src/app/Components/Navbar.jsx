"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "PRACTICE AREAS",
      href: "#",
      hasDropdown: true,
    },
    { name: "OUR PEOPLE", href: "/ourpeople" },
    { name: "CONTACT US", href: "/contactus" },
    { name: "KNOWLEDGE CENTRE", href: "/blog" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveTab("PRACTICE AREAS");
  };

  const handleDropdownItemClick = (href) => {
    console.log("Navigating to:", href);
    setIsDropdownOpen(false); // Close dropdown after selection
    setIsMenuOpen(false); // Also close mobile menu if open
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            <div className="flex items-center space-x-2 text-slate-700">
              <Award className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-gray-500">
                Prior approval of the Competition Commission of India (CCI) under
                Section 31(4) of the Competition Act, 2002
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-800 shadow-2xl border-b border-slate-700">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-slate-800 p-4 rounded-xl shadow-lg flex flex-col items-center">
                <Image
                  src="/images/logo.png"
                  alt="Asterisms Legal Logo"
                  width={160}
                  height={360}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={item.hasDropdown ? dropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 group border border-transparent hover:border-yellow-400 ${
                        activeTab === item.name
                          ? "text-yellow-400 bg-slate-700 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-700"
                      }`}
                      onClick={toggleDropdown}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform duration-300 text-yellow-400 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 block border border-transparent hover:border-yellow-400 ${
                        activeTab === item.name
                          ? "text-yellow-400 bg-slate-700 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-yellow-400 py-3 z-50 font-sans">
                      <Link
                        href="/bankruptcyandInsolvency"
                        onClick={() =>
                          handleDropdownItemClick("/bankruptcyandInsolvency")
                        }
                        className="block px-6 py-3 text-sm font-medium text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                      >
                        Bankruptcy & Insolvency Laws
                      </Link>
                      <Link
                        href="/bankinglaw"
                        onClick={() => handleDropdownItemClick("/bankinglaw")}
                        className="block px-6 py-3 text-sm font-medium text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                      >
                        Banking Law
                      </Link>
                      <Link
                        href="/commercialandcorporate"
                        onClick={() =>
                          handleDropdownItemClick("/commercialandcorporate")
                        }
                        className="block px-6 py-3 text-sm font-medium text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                      >
                        Commercial & Corporate Law
                      </Link>
                      <Link
                        href="/companieslaw"
                        onClick={() => handleDropdownItemClick("/companieslaw")}
                        className="block px-6 py-3 text-sm font-medium text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                      >
                        Companies Law
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-yellow-400">
                Get Consultation
              </button>
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
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full text-left flex items-center justify-between px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300 border ${
                          activeTab === item.name
                            ? "text-yellow-400 bg-slate-800 border-yellow-400"
                            : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700 hover:border-yellow-400"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 text-yellow-400 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          <Link
                            href="/practice/corporate-law"
                            onClick={() =>
                              handleDropdownItemClick("/practice/corporate-law")
                            }
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                          >
                            Corporate Law
                          </Link>
                          <Link
                            href="/practice/litigation"
                            onClick={() =>
                              handleDropdownItemClick("/practice/litigation")
                            }
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                          >
                            Litigation
                          </Link>
                          <Link
                            href="/practice/intellectual-property"
                            onClick={() =>
                              handleDropdownItemClick("/practice/intellectual-property")
                            }
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                          >
                            Intellectual Property
                          </Link>
                          <Link
                            href="/practice/employment-law"
                            onClick={() =>
                              handleDropdownItemClick("/practice/employment-law")
                            }
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                          >
                            Employment Law
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                      className={`block px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300 border ${
                        activeTab === item.name
                          ? "text-yellow-400 bg-slate-800 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700 hover:border-yellow-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-6 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
