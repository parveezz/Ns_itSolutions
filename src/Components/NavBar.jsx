
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    {
      label: "What We Do",
      hasDropdown: true,
      items: ["Overview", "Our Services", "Solutions"],
    },
    {
      label: "Industries",
      hasDropdown: true,
      items: ["Overview", "Technology", "Healthcare"],
    },
    { label: "Who We Are", hasDropdown: false },
    {
      label: "Insights",
      hasDropdown: true,
      items: ["Overview", "Articles", "Resources"],
    },
    { label: "Contact Us", hasDropdown: false },
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 pt-8 pb-4 sm:px-10 lg:px-16">
        <a
          href="/"
          className="select-none text-xl font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 sm:text-2xl"
        >
          YOUR COMPANY
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.hasDropdown ? (
                <button
                  type="button"
                  onClick={() => toggleDropdown(link.label)}
                  aria-expanded={activeDropdown === link.label}
                  className="group flex items-center gap-1.5 py-2 text-sm tracking-wide text-white/90 transition-colors hover:text-white xl:text-[15px]"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
              ) : (
                <a
                  href={link.label === "Contact Us" ? "/contact" : `/#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block py-2 text-sm tracking-wide text-white/90 transition-colors hover:text-white xl:text-[15px]"
                >
                  {link.label}
                </a>
              )}

              {/* Desktop Dropdown */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute left-0 top-full mt-2 min-w-52 overflow-hidden rounded-lg border border-white/10 bg-black/95 py-2 shadow-xl backdrop-blur-xl">
                  {link.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-5 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/40 lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] max-h-[calc(100vh-76px)] overflow-y-auto border-b border-white/10 bg-black/95 px-6 py-6 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-white/5">
                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={activeDropdown === link.label}
                      className="flex w-full items-center justify-between py-3 text-left text-base text-white/90 hover:text-white"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="pb-3 pl-4">
                        {link.items.map((item) => (
                          <a
                            key={item}
                            href="#"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block py-2 text-sm text-white/65 hover:text-white"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.label === "Contact Us" ? "/contact" : `/#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-base text-white/90 hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
