import { useState, useEffect, useRef } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";

export const themePresets = [
  // User's Selected 4 Palettes
  {
    id: "retro-neon",
    name: "Retro Neon",
    swatch: ["#F5EA5A", "#FF78F0", "#A31ACB", "#39B5E0"],
    colors: {
      brown: "#A31ACB",
      orange: "#FF78F0",
      navy: "#A31ACB",
      bg: "#FFF9FD"
    }
  },
  {
    id: "deep-indigo",
    name: "Indigo & Lavender",
    swatch: ["#E4F1FF", "#AED2FF", "#9400FF", "#27005D"],
    colors: {
      brown: "#27005D",
      orange: "#9400FF",
      navy: "#27005D",
      bg: "#E4F1FF"
    }
  },
  {
    id: "ocean-blue",
    name: "Ocean & Sky",
    swatch: ["#B6FFFA", "#98E4FF", "#80B3FF", "#687EFF"],
    colors: {
      brown: "#3C4EB5",
      orange: "#687EFF",
      navy: "#3C4EB5",
      bg: "#F0F9FF"
    }
  },
  {
    id: "midnight-rose",
    name: "Midnight & Rose",
    swatch: ["#191825", "#865DFF", "#E384FF", "#FFA3FD"],
    colors: {
      brown: "#191825",
      orange: "#865DFF",
      navy: "#865DFF",
      bg: "#FAF5FF"
    }
  },
  // Recommended Best Tech Themes
  {
    id: "cyber-emerald",
    name: "Cyber Black & Emerald",
    swatch: ["#0B0F19", "#10B981", "#047857", "#ECFDF5"],
    colors: {
      brown: "#0B0F19",
      orange: "#10B981",
      navy: "#0F172A",
      bg: "#F0FDF4"
    }
  },
  {
    id: "stripe-indigo",
    name: "Enterprise Navy & Violet",
    swatch: ["#0A2540", "#635BFF", "#00D4FF", "#F6F9FC"],
    colors: {
      brown: "#0A2540",
      orange: "#635BFF",
      navy: "#0A2540",
      bg: "#F6F9FC"
    }
  },
  {
    id: "copper-wire",
    name: "Copper Wire & Charcoal",
    swatch: ["#1C1917", "#EA580C", "#0284C7", "#FAFAF9"],
    colors: {
      brown: "#1C1917",
      orange: "#EA580C",
      navy: "#1C1917",
      bg: "#FAFAF9"
    }
  },
  {
    id: "nordic-frost",
    name: "Nordic Steel & Cyan",
    swatch: ["#0F172A", "#0284C7", "#38BDF8", "#F8FAFC"],
    colors: {
      brown: "#0F172A",
      orange: "#0284C7",
      navy: "#0F172A",
      bg: "#F8FAFC"
    }
  },

  // === 25 ADDITIONAL THEMES ===

  // Warm & Earthy
  {
    id: "sunset-amber",
    name: "Sunset Amber",
    swatch: ["#FFF7ED", "#FED7AA", "#FB923C", "#9A3412"],
    colors: {
      brown: "#9A3412",
      orange: "#FB923C",
      navy: "#7C2D12",
      bg: "#FFF7ED"
    }
  },
  {
    id: "terracotta-sage",
    name: "Terracotta & Sage",
    swatch: ["#FAF6F0", "#D4A373", "#BC6C25", "#4A5D23"],
    colors: {
      brown: "#4A5D23",
      orange: "#BC6C25",
      navy: "#3A4A1C",
      bg: "#FAF6F0"
    }
  },
  {
    id: "mocha-cream",
    name: "Mocha & Cream",
    swatch: ["#FDF8F3", "#E8D5C4", "#B08968", "#5C4033"],
    colors: {
      brown: "#5C4033",
      orange: "#B08968",
      navy: "#4A3428",
      bg: "#FDF8F3"
    }
  },

  // Cool & Calm
  {
    id: "arctic-mint",
    name: "Arctic Mint",
    swatch: ["#F0FDFA", "#99F6E4", "#14B8A6", "#134E4A"],
    colors: {
      brown: "#134E4A",
      orange: "#14B8A6",
      navy: "#0F3D3A",
      bg: "#F0FDFA"
    }
  },
  {
    id: "slate-sky",
    name: "Slate & Sky",
    swatch: ["#F8FAFC", "#CBD5E1", "#64748B", "#1E293B"],
    colors: {
      brown: "#1E293B",
      orange: "#64748B",
      navy: "#0F172A",
      bg: "#F8FAFC"
    }
  },
  {
    id: "periwinkle-cloud",
    name: "Periwinkle Cloud",
    swatch: ["#EEF2FF", "#C7D2FE", "#818CF8", "#3730A3"],
    colors: {
      brown: "#3730A3",
      orange: "#818CF8",
      navy: "#312E81",
      bg: "#EEF2FF"
    }
  },

  // Bold & Vibrant
  {
    id: "electric-coral",
    name: "Electric Coral",
    swatch: ["#FFF1F2", "#FDA4AF", "#F43F5E", "#881337"],
    colors: {
      brown: "#881337",
      orange: "#F43F5E",
      navy: "#9F1239",
      bg: "#FFF1F2"
    }
  },
  {
    id: "lime-punch",
    name: "Lime Punch",
    swatch: ["#F7FEE7", "#BEF264", "#84CC16", "#3F6212"],
    colors: {
      brown: "#3F6212",
      orange: "#84CC16",
      navy: "#365314",
      bg: "#F7FEE7"
    }
  },
  {
    id: "grape-soda",
    name: "Grape Soda",
    swatch: ["#FAF5FF", "#D8B4FE", "#A855F7", "#6B21A8"],
    colors: {
      brown: "#6B21A8",
      orange: "#A855F7",
      navy: "#581C87",
      bg: "#FAF5FF"
    }
  },
  {
    id: "tangerine-dream",
    name: "Tangerine Dream",
    swatch: ["#FFF7ED", "#FDBA74", "#F97316", "#C2410C"],
    colors: {
      brown: "#C2410C",
      orange: "#F97316",
      navy: "#9A3412",
      bg: "#FFF7ED"
    }
  },

  // Dark & Moody
  {
    id: "obsidian-gold",
    name: "Obsidian & Gold",
    swatch: ["#0C0A09", "#FDE68A", "#F59E0B", "#78350F"],
    colors: {
      brown: "#0C0A09",
      orange: "#F59E0B",
      navy: "#1C1917",
      bg: "#FFFBEB"
    }
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean",
    swatch: ["#042F2E", "#5EEAD4", "#0D9488", "#ECFDF5"],
    colors: {
      brown: "#042F2E",
      orange: "#0D9488",
      navy: "#134E4A",
      bg: "#F0FDFA"
    }
  },
  {
    id: "wine-cellar",
    name: "Wine Cellar",
    swatch: ["#1A0A0F", "#FCA5A5", "#DC2626", "#7F1D1D"],
    colors: {
      brown: "#1A0A0F",
      orange: "#DC2626",
      navy: "#2D0A12",
      bg: "#FEF2F2"
    }
  },
  {
    id: "forest-night",
    name: "Forest Night",
    swatch: ["#052E16", "#86EFAC", "#22C55E", "#14532D"],
    colors: {
      brown: "#052E16",
      orange: "#22C55E",
      navy: "#064E3B",
      bg: "#F0FDF4"
    }
  },

  // Pastel & Soft
  {
    id: "blush-petal",
    name: "Blush Petal",
    swatch: ["#FDF2F8", "#FBCFE8", "#F472B6", "#9D174D"],
    colors: {
      brown: "#9D174D",
      orange: "#F472B6",
      navy: "#831843",
      bg: "#FDF2F8"
    }
  },
  {
    id: "mint-cream",
    name: "Mint Cream",
    swatch: ["#F0FDF4", "#BBF7D0", "#4ADE80", "#166534"],
    colors: {
      brown: "#166534",
      orange: "#4ADE80",
      navy: "#14532D",
      bg: "#F0FDF4"
    }
  },
  {
    id: "lavender-haze",
    name: "Lavender Haze",
    swatch: ["#F5F3FF", "#DDD6FE", "#8B5CF6", "#4C1D95"],
    colors: {
      brown: "#4C1D95",
      orange: "#8B5CF6",
      navy: "#3B0764",
      bg: "#F5F3FF"
    }
  },
  {
    id: "peach-fuzz",
    name: "Peach Fuzz",
    swatch: ["#FFF7ED", "#FED7AA", "#FB923C", "#9A3412"],
    colors: {
      brown: "#9A3412",
      orange: "#FB923C",
      navy: "#7C2D12",
      bg: "#FFF7ED"
    }
  },

  // Premium / Professional
  {
    id: "royal-plum",
    name: "Royal Plum",
    swatch: ["#FDF4FF", "#E9D5FF", "#A21CAF", "#4A044E"],
    colors: {
      brown: "#4A044E",
      orange: "#A21CAF",
      navy: "#3B0764",
      bg: "#FDF4FF"
    }
  },
  {
    id: "graphite-rose",
    name: "Graphite & Rose",
    swatch: ["#F9FAFB", "#FECDD3", "#F43F5E", "#1F2937"],
    colors: {
      brown: "#1F2937",
      orange: "#F43F5E",
      navy: "#111827",
      bg: "#F9FAFB"
    }
  },
  {
    id: "sapphire-ice",
    name: "Sapphire & Ice",
    swatch: ["#EFF6FF", "#BFDBFE", "#3B82F6", "#1E3A8A"],
    colors: {
      brown: "#1E3A8A",
      orange: "#3B82F6",
      navy: "#1E40AF",
      bg: "#EFF6FF"
    }
  },
  {
    id: "bronze-ivory",
    name: "Bronze & Ivory",
    swatch: ["#FDFBF7", "#E7D3B3", "#B8860B", "#5C4033"],
    colors: {
      brown: "#5C4033",
      orange: "#B8860B",
      navy: "#4A3428",
      bg: "#FDFBF7"
    }
  },
  {
    id: "teal-charcoal",
    name: "Teal & Charcoal",
    swatch: ["#F0FDFA", "#99F6E4", "#0D9488", "#1F2937"],
    colors: {
      brown: "#1F2937",
      orange: "#0D9488",
      navy: "#111827",
      bg: "#F0FDFA"
    }
  }
];

export function applyTheme(theme) {
  if (!theme || !theme.colors) return;
  const root = document.documentElement;
  root.style.setProperty("--theme-brown", theme.colors.brown);
  root.style.setProperty("--theme-orange", theme.colors.orange);
  root.style.setProperty("--theme-navy", theme.colors.navy);
  root.style.setProperty("--theme-bg", theme.colors.bg);
  localStorage.setItem("ns_selected_theme_id", theme.id);
}

export default function ThemeToggle() {
  const [activeThemeId, setActiveThemeId] = useState("deep-indigo");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedId = localStorage.getItem("ns_selected_theme_id");
    const found = themePresets.find((t) => t.id === savedId) || themePresets[1];
    setActiveThemeId(found.id);
    applyTheme(found);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const selectTheme = (theme) => {
    setActiveThemeId(theme.id);
    applyTheme(theme);
    setIsOpen(false);
  };

  const activeTheme = themePresets.find((t) => t.id === activeThemeId) || themePresets[1];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Theme Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Color Theme"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 transition-all text-xs font-semibold cursor-pointer shadow-xs"
      >
        <FaPalette className="text-brand-orange w-3.5 h-3.5 flex-shrink-0" />
        <span className="hidden sm:inline">Theme</span>

        {/* 4-Color Swatch Strip */}
        <div className="flex h-3 w-7 rounded overflow-hidden border border-gray-200 ml-0.5">
          {activeTheme.swatch.map((c, i) => (
            <span key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-gray-200 p-2 z-50 text-gray-800">
          <div className="px-3 py-1.5 mb-1 border-b border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span>Color Themes</span>
            <span className="text-[10px] lowercase text-gray-400 font-normal">
              {themePresets.length} presets
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
            {themePresets.map((theme) => {
              const isSelected = activeThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => selectTheme(theme)}
                  className={`w-full p-2 rounded-xl text-left transition-all cursor-pointer border ${isSelected
                      ? "bg-gray-50 border-brand-orange shadow-xs"
                      : "hover:bg-gray-50 border-transparent"
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-gray-800">
                      {theme.name}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-brand-orange">
                        <FaCheck className="w-2.5 h-2.5" /> Active
                      </span>
                    )}
                  </div>

                  {/* Clean 4-Color Strip */}
                  <div className="flex h-4 w-full rounded overflow-hidden border border-gray-200">
                    {theme.swatch.map((hex, idx) => (
                      <span
                        key={idx}
                        className="flex-1 h-full"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}