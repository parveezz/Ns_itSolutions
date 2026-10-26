import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Software Installation",
    message: ""
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={handleClose}></div>

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 border border-gray-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-brown mb-2">Request Sent Successfully!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Thank you, <span className="font-bold text-brand-brown">{formData.name}</span>. Our team will call you shortly at <span className="font-bold text-brand-brown">{formData.phone}</span> with the price quote.
            </p>
            <button
              onClick={handleClose}
              className="bg-brand-brown hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-brand-brown mb-1">Get a Quick Quote</h3>
            <p className="text-gray-600 text-sm mb-6">
              Fill in your details below and we will contact you with the pricing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9030264664"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Service You Need *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-700"
                >
                  <option>Software Installation</option>
                  <option>Asset Tagging & Barcode Stickers</option>
                  <option>Hardware Repairs & Upgrades</option>
                  <option>Office WiFi & Networking</option>
                  <option>Other Computer Help</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  How can we help? (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us roughly how many computers or what service you need..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 mt-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
