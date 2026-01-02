import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.technologies"), href: "#techstack" },
  ];


  return (
    <header className="md:sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:ps-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className=" flex gap-3 items-center justify-center text-gray-700 text-lg font-semibold md:text-3xl"
          >
            <img
              src="/youssefLogo.png"
              className="md:h-9.5 h-10 object-contain"
              alt=""
            />
            <h2 className="myfont">MOUSSADDEQ</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 me-40">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Book Button - Desktop */}
          {/* <button className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-green-300 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
            BOOK WITH ME
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 ">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-2 px-4 py-2 bg-green-300 text-white rounded-lg font-semibold text-sm hover:bg-green-400">
              BOOK WITH ME
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

import { useRef, useEffect } from "react";

// Options for languages
const languages = [
  { code: "en", label: "EN", flag: "/us.png" },
  { code: "fr", label: "FR", flag: "/france.svg" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle selection
  const handleSelect = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("lang", lang.code);
    setOpen(false);
  };

  return (
    <div className="relative w-27" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white  rounded-md px-4 py-2 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <div className="flex items-center space-x-2">
          <img src={selected.flag} className="w-5 h-5" alt={selected.label} />
          <span>{selected.label}</span>
        </div>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                lang.code === selected.code ? "bg-blue-50" : ""
              }`}
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} className="w-5 h-5" alt={lang.label} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
