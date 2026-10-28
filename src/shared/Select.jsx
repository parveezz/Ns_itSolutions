function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  options = [],
  children,
  className = "",
  containerClassName = "",
  ...props
}) {
  const selectId = id || name;

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/60"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`h-[48px] sm:h-[52px] w-full cursor-pointer appearance-none rounded-lg border border-white/15 bg-[#141417] px-4 pr-10 text-sm text-white outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="bg-[#141417]">
              {placeholder}
            </option>
          )}
          {options.length > 0
            ? options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[#141417]"
                >
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <ChevronIcon />
      </div>
    </div>
  );
}
