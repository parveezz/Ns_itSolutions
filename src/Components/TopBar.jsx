import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-brand-brown text-brand-orange py-2 px-4 sm:px-8 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs gap-2 sm:gap-4">
        {/* Social Media Icons */}
        <div className="flex items-center gap-3.5 text-brand-orange">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <FaInstagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <FaYoutube className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FaFacebookF className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-gray-200 text-[11px] sm:text-xs">
          <a
            href="mailto:info@nsitsolutions.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FaEnvelope className="text-brand-orange w-3 h-3" />
            <span>info@nsitsolutions.com</span>
          </a>
          <a
            href="tel:+919030264664"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FaPhoneAlt className="text-brand-orange w-3 h-3" />
            <span>+91 9030264664</span>
          </a>
        </div>
      </div>
    </div>
  );
}