import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-brand-brown text-brand-orange flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2 text-xs sm:text-sm gap-2">
      {/* Social Media Icons */}
      <div className="flex items-center gap-4 cursor-pointer text-brand-orange">
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
          <FaInstagram className="w-4 h-4" />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
          <FaYoutube className="w-4 h-4" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
          <FaLinkedinIn className="w-4 h-4" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
          <FaFacebookF className="w-4 h-4" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-4 sm:gap-6 text-gray-200">
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-brand-orange w-3.5 h-3.5" />
          <a href="mailto:info@nsitsolutions.com" className="hover:text-white transition-colors">
            info@nsitsolutions.com
          </a>
        </span>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-brand-orange w-3.5 h-3.5" />
          <a href="tel:+919030264664" className="hover:text-white transition-colors">
            +91 9030264664
          </a>
        </span>
      </div>
    </div>
  );
}