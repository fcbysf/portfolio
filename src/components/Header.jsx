import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    {
      label: t("nav.home"),
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-home"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
        </svg>
      ),
    },
    {
      label: t("nav.about"),
      href: "#about",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-user"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
          <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
        </svg>
      ),
    },
    {
      label: t("nav.services"),
      href: "#services",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-accessible"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
        </svg>
      ),
    },
    {
      label: t("nav.projects"),
      href: "#projects",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
        </svg>
      ),
    },
    {
      label: t("nav.technologies"),
      href: "#techstack",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-juejin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M2 12l10 7.422l10 -7.422" />
          <path d="M7 9l5 4l5 -4" />
          <path d="M11 6l1 .8l1 -.8l-1 -.8l-1 .8" />
        </svg>
      ),
    },
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
          <nav className="hidden md:flex items-center gap-1 lg:me-40">
            {navItems.map((item) => (
              <>
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              </>
            ))}
            <LanguageSwitcher show={"md:block lg:hidden"} />
          </nav>
          <LanguageSwitcher show={"lg:block hidden"} />

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
        </div>

        {isMenuOpen && (
            <>
              <div
                className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300
      ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsMenuOpen(false)}
              />
              <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden
      transform transition-transform duration-300 ease-in-out
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
              >
                {/* Close button */}
                <div className="flex justify-between items-center ">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 p-2 text-xl"
                  >
                    ✕
                  </button>
                    <LanguageSwitcher show={"sm:block absolute top-4 "} />

                </div>

                <nav className="mt-10 flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-6 py-3 text-sm font-medium text-gray-700
            hover:bg-gray-50 transition-colors duration-200 flex gap-1"
                    >
                      {item.svg}
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </>
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

function LanguageSwitcher({ show }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const lng = localStorage.getItem("lang");
  const [selected, setSelected] = useState(
    languages.find((lang) => lang.code === lng) || languages[0]
  );
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
    <div className={`relative w-27 block ${show}`} ref={dropdownRef}>
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
