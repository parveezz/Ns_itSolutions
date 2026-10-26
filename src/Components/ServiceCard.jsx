import { FaLaptopCode, FaBarcode, FaTools, FaNetworkWired, FaCheckCircle, FaCogs } from "react-icons/fa";

const iconMap = {
  software: FaLaptopCode,
  tagging: FaBarcode,
  hardware: FaTools,
  network: FaNetworkWired,
  "💻": FaLaptopCode,
  "🏷️": FaBarcode,
  "🛠️": FaTools,
  "🌐": FaNetworkWired,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconKey] || iconMap[service.icon] || FaCogs;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-gray-100 hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 rounded-xl bg-amber-50 flex items-center justify-center text-brand-orange group-hover:bg-brand-brown group-hover:text-brand-orange transition-colors duration-300">
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-brand-brown mb-2 group-hover:text-brand-orange transition-colors">
          {service.title || service.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
          {service.description}
        </p>
      </div>

      {service.features && (
        <ul className="text-xs text-gray-500 space-y-1.5 sm:space-y-2 border-t border-gray-100 pt-3 sm:pt-4">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-orange w-3.5 h-3.5 flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}