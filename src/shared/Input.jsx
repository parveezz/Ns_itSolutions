export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  containerClassName = "",
  ...props
}) {
  const inputId = id || name;

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/60"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`h-[48px] sm:h-[52px] w-full rounded-lg border border-white/15 bg-[#141417] px-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 ${className}`}
        {...props}
      />
    </div>
  );
}
