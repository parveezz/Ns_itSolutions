import { useState, useRef, useEffect, useMemo, Children } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function Select({
  label,
  id,
  name,
  value = "",
  onChange,
  required = false,
  placeholder = "Select an option",
  options = [],
  children,
  className = "",
  containerClassName = "",
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const selectId = id || name;

  // Normalize options from either options prop or <option> children
  const items = useMemo(() => {
    if (options && options.length > 0) {
      return options.map((opt) =>
        typeof opt === "string" ? { value: opt, label: opt } : opt
      );
    }

    if (children) {
      const parsed = [];
      Children.forEach(children, (child) => {
        if (child && child.props && child.props.value !== undefined) {
          // Skip placeholder option if it has empty value
          if (child.props.value === "" && !child.props.children) return;
          parsed.push({
            value: child.props.value,
            label: child.props.children || child.props.value,
          });
        }
      });
      return parsed;
    }

    return [];
  }, [options, children]);

  // Find currently selected label
  const selectedItem = items.find((item) => String(item.value) === String(value));
  const displayLabel = selectedItem ? selectedItem.label : placeholder;
  const isSelected = Boolean(selectedItem && selectedItem.value !== "");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (itemValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: itemValue,
        },
      });
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="mb-2 block cursor-pointer text-xs font-medium uppercase tracking-[0.1em] text-white/60 select-none"
        >
          {label}
        </label>
      )}

      {/* Hidden input to support standard HTML form validation / submissions */}
      <input
        type="hidden"
        id={selectId}
        name={name}
        value={value}
        required={required}
      />

      {/* Custom Trigger Button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex h-[48px] sm:h-[52px] w-full items-center justify-between rounded-lg border bg-[#141417] px-4 text-left text-sm transition-all duration-200 outline-none ${
          isOpen
            ? "border-cyan-400"
            : "border-white/15 hover:border-white/30"
        } ${className}`}
      >
        <span
          className={`truncate transition-colors ${
            isSelected ? "text-white font-normal" : "text-white/35 font-light"
          }`}
        >
          {displayLabel}
        </span>

        <span
          className={`ml-3 shrink-0 text-white/40 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-cyan-400" : "group-hover:text-white/70"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {/* Custom Options Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-64 overflow-y-auto space-y-1.5 p-0 bg-transparent border-0 shadow-none outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        >
          {items.map((item) => {
            const active = String(item.value) === String(value);

            return (
              <div
                key={item.value}
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(item.value)}
                className={`group flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm transition-all duration-150 select-none shadow-md shadow-black/90 ${
                  active
                    ? "bg-[#141417] text-cyan-400 font-medium border border-cyan-400/50 shadow-cyan-950/30"
                    : "bg-[#141417] text-white/80 border border-white/10 hover:border-white/25 hover:text-white hover:bg-[#1a1a1f]"
                }`}
              >
                <span className="truncate">{item.label}</span>

                {active ? (
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                ) : (
                  <span className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-20 transition-opacity">
                    <Check className="h-4 w-4" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
}
