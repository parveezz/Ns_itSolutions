export default function Section({ id, title, subtitle, altBg, children }) {
  const bgClass = altBg ? "bg-gray-100" : "bg-white";

  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center py-14 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-gray-200/60 ${bgClass}`}
    >
      <div className="max-w-6xl mx-auto w-full my-auto">
        {title && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-2 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-2">
                {subtitle}
              </p>
            )}
            <div className="w-12 sm:w-16 h-1 bg-brand-orange mx-auto mt-3 rounded-full"></div>
          </div>
        )}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}