export default function Section({ id, title, subtitle, altBg, children }) {
  const bgClass = altBg ? "bg-gray-100" : "bg-white";

  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center py-20 px-6 sm:px-12 border-b border-gray-200/60 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto w-full my-auto">
        {title && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-base">
                {subtitle}
              </p>
            )}
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}