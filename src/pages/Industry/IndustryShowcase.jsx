import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    tag: "Banking & Financial Services",
    eyebrow: "TECH-POWERED PERSONALIZED BANKING",
    title: "Modernizing Customer Experience in BFSI",
    description:
      "Today's customers expect smarter, faster, and more personalized financial services. We enable customer experience transformation with data-driven automation, secure architecture, and omnichannel insights.",
    heading: "Field Force & Retail Banking Automation",
    details:
      "Empower field agents with mobile tools, automate routine compliance processes, and create frictionless in-branch or online experiences that improve service speed, consistency, and customer interaction quality.",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern financial services and banking workspace",
  },
  {
    tag: "Healthcare & Life Sciences",
    eyebrow: "SMARTER HEALTHCARE EXPERIENCES",
    title: "Transforming the Future of Healthcare",
    description:
      "Deliver connected, efficient, and personalized healthcare experiences through intelligent automation, HIPAA-ready digital platforms, and streamlined patient journeys.",
    heading: "Digital Healthcare & Patient Engagement",
    details:
      "Simplify patient onboarding, streamline administrative workflows, and empower clinical and administrative teams with digital solutions that improve accessibility, diagnostics, and service delivery.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    alt: "Healthcare professionals working in a modern medical environment",
  },
  {
    tag: "Retail & E-Commerce",
    eyebrow: "TECHNOLOGY-POWERED RETAIL",
    title: "Reimagining the Retail Experience",
    description:
      "Meet evolving customer expectations with connected commerce, personalized interactions, and intelligent retail operations across every digital and physical touchpoint.",
    heading: "Omnichannel Retail & Intelligent Commerce",
    details:
      "Connect online and in-store experiences, simplify customer checkout journeys, and optimize inventory and supply chain operations with real-time predictive insights and automated workflows.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary retail store interior",
  },
  {
    tag: "Smart Manufacturing",
    eyebrow: "INTELLIGENT INDUSTRIAL SOLUTIONS",
    title: "Accelerating Manufacturing Excellence",
    description:
      "Build more agile, resilient operations with connected systems, IoT telemetry, intelligent workflows, and real-time insights that elevate productivity across the factory floor.",
    heading: "Smart Operations & Industrial Automation",
    details:
      "Modernize legacy production workflows, improve operational visibility with edge computing, and minimize downtime through predictive maintenance and scalable industrial architectures.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    alt: "Engineer working with modern industrial technology",
  },
];

export default function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeIndustry = industries[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? industries.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % industries.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="industry-showcase"
      aria-label="Industry Showcase"
      className="relative isolate w-full overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Background radial ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(8,145,178,0.1),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 bg-cyan-500/[0.03] blur-3xl"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <header className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-4xl text-center">
          <span className="mb-3.5 inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            TAILORED INDUSTRY SOLUTIONS • DOMAIN EXPERTISE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Empowering Every Sector with{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Digital Excellence
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/60 font-normal leading-relaxed max-w-3xl mx-auto">
            From highly regulated financial institutions to modern healthcare, connected retail, and smart manufacturing, we engineer mission-critical digital systems built for scale and resilience.
          </p>
        </header>

        {/* Showcase Glass Card */}
        <div className="relative mx-auto max-w-[1360px]">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10141b] via-[#0b0e13] to-[#07090d] p-6 sm:p-10 lg:p-12 backdrop-blur-xl">

            {/* Top decorative light glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-1/4 h-56 w-56 rounded-full bg-cyan-400/[0.08] blur-3xl"
            />

            {/* Slide Grid Content */}
            <div
              key={activeIndex}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 animate-[fadeIn_450ms_ease-out]"
            >
              {/* Left Column: Text & Information */}
              <div className="order-2 flex flex-col lg:order-1 lg:col-span-7">
                {/* Sector Tag */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    {activeIndustry.tag}
                  </span>

                  <span className="font-mono text-xs text-white/40 tracking-wider">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Eyebrow */}
                <p className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                  {activeIndustry.eyebrow}
                </p>

                {/* Main Heading */}
                <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-snug">
                  {activeIndustry.heading}
                </h3>

                {/* Body Details */}
                <p className="mb-6 text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-2xl">
                  {activeIndustry.details}
                </p>

                {/* Context Overview */}
                <div className="mb-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl">
                  <span className="font-medium text-white/80">Key Impact: </span>
                  {activeIndustry.description}
                </div>

                {/* Bottom Action & Controls */}
                <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.08] pt-6">
                  {/* CTA link */}
                  <Link
                    to="/contact"
                    className="group/cta inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Consult Our Industry Specialists</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </Link>

                  {/* Slide Indicators & Navigation Controls */}
                  <div className="flex items-center gap-5">
                    {/* Dots / Bars */}
                    <div className="flex items-center gap-2">
                      {industries.map((industry, index) => (
                        <button
                          key={industry.tag}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-label={`Switch to ${industry.tag}`}
                          aria-current={activeIndex === index ? "true" : undefined}
                          className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
                            ? "w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                            : "w-2.5 bg-white/20 hover:bg-white/40"
                            }`}
                        />
                      ))}
                    </div>

                    {/* Prev / Next Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={previousSlide}
                        aria-label="Previous industry"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <ArrowLeft size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next industry"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Industry Imagery */}
              <div className="order-1 lg:order-2 lg:col-span-5">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.alt}
                    className="h-[280px] sm:h-[360px] lg:h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                      {activeIndustry.tag}
                    </span>

                    <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-400/20">
                      NS Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section *,
          section *::before,
          section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
