"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ For client-side navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const router = useRouter(); // ✅ initialize router

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about", hasDropdown: true },
    { name: "EXPERTISE", href: "#", hasDropdown: true },
    { name: "OUR TEAM", href: "/ourpeople" },
    // { name: "CAREERS", href: "/contactus" },
    { name: "CONTACT US", href: "/contactus" },
    // { name: "KNOWLEDGE CENTRE", href: "/blog" },
  ];

  const aboutDropdownItems = [
    { name: "Our Attorneys", href: "/attorneys" },
    { name: "Asterisms Legal", href: "/about" }
  ];

  const practiceAreaItems = [
  { name: "Insolvency and Bankruptcy", href: "/bankruptcyandInsolvency" },
  { name: "Banking Law", href: "/bankinglaw" },
  { name: "Commercial, Corporate & Company Law", href: "/commercialandcorporate" },
  { name: "Matrimonial / Family Law", href: "/familylaw" },
  { name: "Criminal", href: "/criminallaw" },
  { name: "Civil", href: "/civillaw" },
  { name: "Arbitration", href: "/companieslaw" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const clickedInside =
          (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
          (aboutDropdownRef.current && aboutDropdownRef.current.contains(event.target));

        if (!clickedInside) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
    setActiveTab(menuName);
  };

  const handleDropdownItemClick = (href) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    router.push(href); // ✅ No refresh navigation
  };

  const handleNavItemClick = (itemName) => {
    setActiveTab(itemName);
    setActiveDropdown(null);
  };

  const getDropdownItems = (menuName) => {
    if (menuName === "ABOUT US") return aboutDropdownItems;
    if (menuName === "EXPERTISE") return practiceAreaItems;
    return [];
  };

  return (
    <div className="w-full">
      <nav className="bg-slate-800 shadow-2xl border-b border-slate-700">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative"
                  ref={item.name === "EXPERTISE" ? dropdownRef :
                       item.name === "ABOUT US" ? aboutDropdownRef : null}>
                  
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center px-2 py-3 text-sm font-semibold rounded-lg transition border ${
                        activeDropdown === item.name
                          ? "text-yellow-400 bg-slate-700 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                      }`}
                      onClick={(e) => toggleDropdown(item.name, e)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform text-yellow-400 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleNavItemClick(item.name)}
                      className={`px-6 py-3 text-sm font-semibold rounded-lg transition border ${
                        activeTab === item.name
                          ? "text-yellow-400 bg-slate-700 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-yellow-400 py-3 z-50">
                      {getDropdownItems(item.name).map((dropdownItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDropdownItemClick(dropdownItem.href)}
                          className="block w-42 text-left px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition border-l-4 border-transparent hover:border-yellow-400"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contactus" className="hidden lg:block">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-8 py-3 rounded-lg font-bold transition shadow-lg">
                Get Consultation
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg text-white border border-slate-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t-2 border-yellow-400 px-6 pt-6 pb-8 space-y-3">
            {navItems.map((item, idx) => (
              <div key={idx}>

                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className={`w-full flex justify-between items-center px-6 py-4 text-base font-semibold rounded-lg border ${
                        activeDropdown === item.name
                          ? "text-yellow-400 bg-slate-800 border-yellow-400"
                          : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 text-yellow-400 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {getDropdownItems(item.name).map((dropdownItem, i) => (
                          <button
                            key={i}
                            onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => { handleNavItemClick(item.name); setIsMenuOpen(false);} }
                    className={`block px-6 py-4 text-base font-semibold rounded-lg border ${
                      activeTab === item.name
                        ? "text-yellow-400 bg-slate-800 border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-slate-800 border-slate-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

              </div>
            ))}

            <Link href="/contactus">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 px-6 py-4 rounded-lg font-bold shadow-lg">
                Get Consultation
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
