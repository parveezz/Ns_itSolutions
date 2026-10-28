import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative isolate min-h-[580px] lg:min-h-[640px] w-full overflow-hidden bg-black text-white flex flex-col justify-between pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* ─── Hero-Authentic Directional Black Gradient Overlays ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 via-50% to-black/35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
      />

      {/* ─── Top Container: Eyebrow & Breadcrumb ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            WHO WE ARE • ABOUT US
          </span>

          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
            <ol className="flex items-center gap-2 font-light text-white/60">
              <li>
                <span className="cursor-pointer transition-colors hover:text-white">
                  Home
                </span>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              <li className="font-normal text-white">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ─── Main Content Area matching Hero typography & composition ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-6 my-auto sm:px-10 lg:px-16 py-8">
        <div className="max-w-4xl">
          {/* Main Heading — exact Hero typography: font-light, leading-[1.15], tracking-tight */}
          <h1
            id="about-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-light text-white tracking-tight leading-[1.15] mb-6"
          >
            Your Trusted Partner For Tailored End-To-End IT Solutions.
          </h1>

          {/* Supporting Subtitle with two-tone vertical accent line */}
          <div className="flex items-stretch gap-5 sm:gap-6 mt-6 sm:mt-8">
            <div
              className="w-[2.5px] rounded-full flex flex-col shrink-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="h-8 sm:h-10 bg-cyan-400 w-full shrink-0" />
              <div className="flex-1 bg-white/70 w-full" />
            </div>

            <div className="flex flex-col gap-5 py-0.5 max-w-2xl">
              <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white/70">
                We bridge the gap between business vision and technology through
                exceptional engineering, strategic consulting, and robust enterprise
                digital architecture.
              </p>

              <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed text-white/60">
                From legacy modernization to high-velocity cloud deployments, our dedicated engineering teams craft resilient software, secure architectures, and data-driven infrastructures that empower organizations to innovate rapidly and sustain long-term digital leadership.
              </p>

              <div>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom spacing to ensure clean layout continuity */}
      <div className="h-4 w-full" aria-hidden="true" />
    </section>
  );
}
