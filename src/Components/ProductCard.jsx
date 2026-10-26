import { FaNetworkWired, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

export default function ProductCard({ product, onOrder }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-brand-orange px-2.5 py-1 rounded-full border border-amber-100">
            {product.type}
          </span>
          {product.badge && (
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-brand-brown mb-1.5 group-hover:text-brand-orange transition-colors">
          {product.title}
        </h3>

        <div className="text-xs font-semibold text-brand-orange mb-3">
          {product.spec}
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* The Software Connection Pill */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-2.5 mb-5 flex items-start gap-2 text-xs text-brand-navy">
          <FaLaptopCode className="text-brand-orange w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Software Included:</strong> {product.softwareBonus}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOrder(product.title)}
        className="w-full bg-brand-brown hover:bg-black text-white font-bold py-2.5 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
      >
        <FaNetworkWired className="w-3.5 h-3.5 text-brand-orange" />
        <span>Request Product Quote</span>
      </button>
    </div>
  );
}