import React, { useState } from "react";
import { Link } from "react-scroll";
import { navItems, portfolioData, socials } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#08111f]/75 px-4 py-3 text-white shadow-[0_20px_80px_rgba(8,17,31,0.45)] backdrop-blur-xl md:px-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35rem] text-white/45">
              Portfolio
            </p>
            <p className="text-sm font-semibold tracking-[0.12rem]">
              {portfolioData.name}
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={900}
                offset={-80}
                className="cursor-pointer transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-[#08111f]/95 px-6 pt-28 text-white transition-all duration-300 lg:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="flex flex-col gap-5 text-3xl uppercase">
          {navItems.map((item) => (
            <div key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={900}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-14 space-y-6 border-t border-white/10 pt-8 text-sm text-white/70">
          <div>
            <p className="mb-2 uppercase tracking-[0.3rem] text-white/35">Contact</p>
            <a href={`mailto:${portfolioData.email}`} className="block">
              {portfolioData.email}
            </a>
            <a href={`tel:${portfolioData.phone.replace(/\s/g, "")}`} className="block">
              {portfolioData.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
