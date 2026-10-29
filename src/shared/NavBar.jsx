import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Insights", path: "/insights" },
    { label: "Who We Are", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];



  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const isIndustryActive =
    isLinkActive("/industries");

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setIndustryDropdownOpen(false);
  };

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">

        {/* Company Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="cursor-pointer text-xl font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80 sm:text-2xl"
          aria-label="Go to homepage"
        >
          NS IT SOLUTIONS
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
        >
          {/* Industries Dropdown */}
          <div className="group relative">
            <button
              type="button"
              onClick={() => handleNavigation("/industries")}
              aria-current={isIndustryActive ? "page" : undefined}
              className={`relative flex cursor-pointer items-center gap-2 py-2 text-sm tracking-wide transition-colors xl:text-[15px] ${isIndustryActive
                ? "font-medium text-white"
                : "text-white/80 hover:text-white"
                }`}
            >
              Industries

              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              {isIndustryActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />
              )}
            </button>



          </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);

            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavigation(link.path)}
                aria-current={active ? "page" : undefined}
                className={`relative cursor-pointer py-2 text-sm tracking-wide transition-colors xl:text-[15px] ${active
                  ? "font-medium text-white"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}

                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((open) => !open)
          }
          className="cursor-pointer rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[#0b1020]/95 px-6 py-4 shadow-xl backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-[1520px] flex-col"
            aria-label="Mobile navigation"
          >
            {/* Mobile Industries */}
            <div className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigation("/industries")}
                  aria-current={isIndustryActive ? "page" : undefined}
                  className={`flex-1 py-4 text-left text-base transition-colors ${isIndustryActive
                    ? "font-medium text-cyan-400"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  Industries
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIndustryDropdownOpen((open) => !open)
                  }
                  aria-label={
                    industryDropdownOpen
                      ? "Collapse industries"
                      : "Expand industries"
                  }
                  aria-expanded={industryDropdownOpen}
                  className="rounded-lg p-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >

                </button>
              </div>

            </div>

            {/* Other Mobile Links */}
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavigation(link.path)}
                  aria-current={active ? "page" : undefined}
                  className={`flex cursor-pointer items-center justify-between border-b border-white/10 py-4 text-left text-base transition-colors last:border-b-0 ${active
                    ? "font-medium text-cyan-400"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  <span>{link.label}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}

            {/* Get a Quote Button */}
            <div className="pb-2 pt-5">
              <Link
                to="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIndustryDropdownOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-full bg-[#0d9488] py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0f766e]"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}