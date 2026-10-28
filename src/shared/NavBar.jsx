
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/insights" },
    { label: "Who We Are", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
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
          YOUR COMPANY
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavigation(link.path)}
                aria-current={isActive ? "page" : undefined}
                className={`cursor-pointer py-2 text-sm tracking-wide transition-colors xl:text-[15px] ${isActive
                  ? "text-white"
                  : "text-white/75 hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="cursor-pointer rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-black/95 px-6 py-4 shadow-xl backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-[1520px] flex-col"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavigation(link.path)}
                  aria-current={isActive ? "page" : undefined}
                  className={`cursor-pointer border-b border-white/10 py-4 text-left text-base transition-colors last:border-b-0 ${isActive
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
