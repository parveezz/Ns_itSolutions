import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function QuoteModal({ isOpen, onClose, initialProduct = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    item: initialProduct || "Cat6A Shielded Network Cable",
    metersOrQuantity: "100m Roll",
    message: ""
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        item: initialProduct,
        message: `Inquiring about: ${initialProduct}`
      }));
    }
  }, [initialProduct]);

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
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 z-10 border border-gray-100 my-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-brown mb-2">Quote Request Sent!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Thank you, <span className="font-bold text-brand-brown">{formData.name}</span>. Our cable sales and software team will call you at <span className="font-bold text-brand-brown">{formData.phone}</span> with the wholesale price list.
            </p>
            <button
              onClick={handleClose}
              className="bg-brand-brown hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-brand-brown mb-1">
              Request Hardware & Software Pricing
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-5">
              Get wholesale pricing for bulk cable rolls, fiber lines, or software companion licenses.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Your Name / Business *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Tech Corp"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
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
                    className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Product / Wire Type *
                  </label>
                  <select
                    value={formData.item}
                    onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-700"
                  >
                    <option>Cat6A Shielded Network Cable</option>
                    <option>Armored Fiber Optic Patch Cord</option>
                    <option>Smart Barcode-Tagged Patch Cables</option>
                    <option>Server Rack Power & Data Loom</option>
                    <option>NS Cable Speed Tester Software License</option>
                    <option>Bulk Cable + Software Bundle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.metersOrQuantity}
                    onChange={(e) => setFormData({ ...formData, metersOrQuantity: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-700"
                  >
                    <option>100m Drum Roll</option>
                    <option>305m (1000ft) Master Box</option>
                    <option>500m+ Project Bulk</option>
                    <option>Patch Cord Bundle (Pack of 50)</option>
                    <option>Software Only License</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Project Notes / Cable Specifications
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention color preference, required connectors (RJ45/LC/SC), or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 sm:py-3.5 rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 mt-2 cursor-pointer"
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
