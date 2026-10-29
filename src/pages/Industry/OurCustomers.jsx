export default function OurCustomers() {
  const customers = [
    {
      id: "bajaj",
      name: "BAJAJ FINSERV",
      render: () => (
        <span className="font-bold tracking-wider text-xs sm:text-sm text-cyan-300">
          BAJAJ FINSERV
        </span>
      ),
    },
    {
      id: "mastercard",
      name: "mastercard",
      render: () => (
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="h-5 w-5 rounded-full bg-[#EB001B]/90 shadow-sm" />
            <span className="-ml-2.5 h-5 w-5 rounded-full bg-[#F79E1B]/90 shadow-sm" />
          </div>
          <span className="text-sm sm:text-base font-bold lowercase tracking-tight text-white/90">
            mastercard
          </span>
        </div>
      ),
    },
    {
      id: "paypal",
      name: "PayPal",
      render: () => (
        <span className="text-base sm:text-lg font-extrabold italic tracking-tight text-[#0079C1] group-hover:text-[#00457C] transition-colors">
          <span className="text-[#00457C]">Pay</span>
          <span className="text-[#0079C1]">Pal</span>
        </span>
      ),
    },
    {
      id: "visa",
      name: "VISA",
      render: () => (
        <span className="text-lg sm:text-xl font-black italic tracking-widest text-white">
          VISA
        </span>
      ),
    },
    {
      id: "hdfc",
      name: "HDFC BANK",
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#004B8D] text-[9px] font-black text-white">
            +
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white/90">
            HDFC BANK
          </span>
        </div>
      ),
    },
    {
      id: "barclays",
      name: "BARCLAYS",
      render: () => (
        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#00AEEF]">
          BARCLAYS
        </span>
      ),
    },
    {
      id: "paytm",
      name: "paytm",
      render: () => (
        <span className="text-base sm:text-lg font-black tracking-tight">
          <span className="text-white">pay</span>
          <span className="text-[#00BAF2]">tm</span>
        </span>
      ),
    },
    {
      id: "lic",
      name: "LIC",
      render: () => (
        <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400">
          LIC OF INDIA
        </span>
      ),
    },
    {
      id: "sbi",
      name: "SBI",
      render: () => (
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full border-2 border-[#280071] bg-sky-400" />
          <span className="text-base sm:text-lg font-black tracking-wider text-white">
            SBI
          </span>
        </div>
      ),
    },
    {
      id: "idfc",
      name: "IDFC FIRST Bank",
      render: () => (
        <span className="text-xs sm:text-sm font-bold tracking-wide text-[#9E1B32]">
          IDFC FIRST <span className="font-normal text-white/70">Bank</span>
        </span>
      ),
    },
    {
      id: "hsbc",
      name: "HSBC",
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-red-500 font-bold">◀◆▶</span>
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white">
            HSBC
          </span>
        </div>
      ),
    },
  ];

  // Duplicate for seamless continuous infinite loop
  const marqueeItems = [...customers, ...customers];

  return (
    <section
      id="our-customers"
      aria-label="Our Valued Customers"
      className="relative isolate w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(8,145,178,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <header className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            TRUSTED PARTNERSHIPS • GLOBAL SCALE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Our Valued{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Customers
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-2xl mx-auto">
            Powering mission-critical digital systems, robust infrastructure, and
            next-generation software for industry pioneers worldwide.
          </p>
        </header>

        {/* Marquee Wrapper with edge fade masks */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left gradient fade mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-black via-black/80 to-transparent"
          />

          {/* Right gradient fade mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-black via-black/80 to-transparent"
          />

          {/* Scrolling track: moves from Left to Right */}
          <div className="marquee-ltr-track flex gap-4 sm:gap-6 items-center">
            {marqueeItems.map((customer, index) => (
              <div
                key={`${customer.id}-${index}`}
                className="group flex h-14 sm:h-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117]/80 px-6 sm:px-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#161b22] hover:shadow-[0_0_25px_rgba(34,211,238,0.18)] hover:-translate-y-0.5 select-none"
                aria-label={customer.name}
              >
                {customer.render()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation: Left to Right (-50% to 0) */}
      <style>{`
        @keyframes scrollMarqueeLTR {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .marquee-ltr-track {
          width: max-content;
          animation: scrollMarqueeLTR 28s linear infinite;
        }

        .marquee-ltr-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-ltr-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
