export default function Textarea({
  label,
  id,
  name,
  placeholder,
  rows = 4,
  value,
  onChange,
  required = false,
  className = "",
  containerClassName = "",
  ...props
}) {
  const textareaId = id || name;

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/60"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`min-h-[110px] w-full resize-y rounded-lg border border-white/15 bg-[#141417] px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 ${className}`}
        {...props}
      />
    </div>
  );
}
