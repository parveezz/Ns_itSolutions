import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustryHero() {
  const stats = [
    { value: "6+", label: "Key Industry Domains" },
    { value: "120+", label: "Enterprise Deployments" },
    { value: "99.9%", label: "System Reliability" },
    { value: "100%", label: "Compliance & Security" },
  ];

  return (
    <section
      id="industry-hero"
      aria-labelledby="industry-hero-heading"
      className="relative isolate min-h-[640px] lg:min-h-[720px] w-full overflow-hidden bg-black text-white flex flex-col justify-between pt-28 pb-14 sm:pt-32 sm:pb-18 lg:pt-36 lg:pb-20"
    >
      {/* ─── Directional Black Gradient Overlays (Matching Website Standard) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/85 via-50% to-black/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-3xl"
      />

      {/* ─── Top Eyebrow Tag ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            WHAT WE DO • INDUSTRY SOLUTIONS
          </span>
        </div>
      </div>

      {/* ─── Main Hero Content (2-Column Grid with Right-Side PNG) ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-6 my-auto sm:px-10 lg:px-16 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Heading, Subtitle & CTAs (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Main Heading matching Hero typography */}
            <h1
              id="industry-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-light text-white tracking-tight leading-[1.15] mb-6"
            >
              Driving Sector-Specific Innovation With{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
                Enterprise-Grade IT Solutions
              </span>
              .
            </h1>

            {/* Subtitle with two-tone vertical accent line */}
            <div className="flex items-stretch gap-5 sm:gap-6 mt-6 sm:mt-8">
              <div
                className="w-[2.5px] rounded-full flex flex-col shrink-0 overflow-hidden"
                aria-hidden="true"
              >
                <div className="h-8 sm:h-10 bg-cyan-400 w-full shrink-0" />
                <div className="flex-1 bg-white/70 w-full" />
              </div>

              <div className="flex flex-col gap-4 py-0.5 max-w-2xl">
                <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white/75">
                  Generic software cannot address specialized industry bottlenecks. We engineer
                  tailored digital ecosystems, compliant architectures, and scalable automation
                  specifically built for your sector&apos;s operational and regulatory landscape.
                </p>

                <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed text-white/60">
                  From high-security financial pipelines to smart factory IoT, patient care portals,
                  and omnichannel commerce, our multi-disciplinary engineering teams deliver resilient
                  systems that power sustainable competitive advantage.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    to="/contact"
                    className="group inline-flex cursor-pointer items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <span>Speak With an Industry Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#industries-we-serve"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <span>Explore Sectors</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Metric Highlights Bar ─── */}
        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                <div className="min-w-0 flex-1">
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-light leading-none tracking-tight text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-white/70">
                    {stat.label}
                  </div>
                </div>

                {index < stats.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-3 hidden h-10 w-px shrink-0 bg-white/15 sm:block lg:mx-6"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
