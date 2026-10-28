
import { useState } from "react";
import {
  Cpu,
  Landmark,
  Activity,
  Factory,
  GraduationCap,
  ShoppingBag,
  Film,
  Truck,
  Rocket,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    id: "tech",
    name: "Technology & Software",
    description:
      "Building smarter digital products, scalable platforms, and innovative software solutions for modern businesses.",
    icon: Cpu,
  },
  {
    id: "finance",
    name: "Banking & Finance",
    description:
      "Supporting financial organizations with secure, reliable, and efficient digital experiences.",
    icon: Landmark,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Enabling better digital experiences through connected systems and technology-driven solutions.",
    icon: Activity,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Helping manufacturing businesses streamline operations and embrace digital transformation.",
    icon: Factory,
  },
  {
    id: "education",
    name: "Education",
    description:
      "Creating accessible learning experiences and digital tools for students, educators, and institutions.",
    icon: GraduationCap,
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description:
      "Delivering modern shopping experiences and digital platforms that help retailers grow.",
    icon: ShoppingBag,
  },
  {
    id: "media",
    name: "Media & Entertainment",
    description:
      "Powering engaging content experiences with creative technology and digital platforms.",
    icon: Film,
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    description:
      "Improving visibility, coordination, and efficiency across connected supply chain operations.",
    icon: Truck,
  },
  {
    id: "startups",
    name: "Startups & Innovation",
    description:
      "Helping ambitious teams turn early-stage ideas into useful, scalable digital products.",
    icon: Rocket,
  },
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeIndustry = industries[activeIndex];
  const Icon = activeIndustry.icon;

  const changeSlide = (step) => {
    if (isAnimating) return;

    setDirection(step);
    setIsAnimating(true);

    setActiveIndex(
      (current) =>
        (current + step + industries.length) % industries.length
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setIsAnimating(true);
    setActiveIndex(index);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="relative isolate w-full overflow-hidden bg-black py-20 text-white sm:py-24 lg:min-h-[720px] lg:py-28"
    >
      {/* ─── Directional Black Gradient Overlays (Matching Hero) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 via-50% to-black/35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* 55% left / 45% right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-8 xl:gap-12">
          {/* LEFT SECTION: 55% */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
              Industries We Serve
            </span>

            {/* Main Heading — exact Hero typography: font-light, leading-[1.15], tracking-tight */}
            <h2 className="mb-6 text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl lg:text-[42px] xl:text-[48px]">
              Solutions
              <br />
              Across Every
              <br />
              Industry
            </h2>

            {/* Supporting body text */}
            <p className="max-w-[480px] text-base leading-relaxed text-white/70 font-normal sm:text-lg">
              We deliver innovative digital solutions tailored to the unique
              challenges and opportunities of businesses across diverse
              industries.
            </p>

            {/* Navigation controls matching SliderControls styling */}
            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                disabled={isAnimating}
                aria-label="Previous industry"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white/10 active:bg-white/20 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer disabled:opacity-40 disabled:cursor-wait"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                disabled={isAnimating}
                aria-label="Next industry"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white/10 active:bg-white/20 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer disabled:opacity-40 disabled:cursor-wait"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
              </button>

              {/* Slide number and clickable indicators */}
              <div className="ml-1">
                <p className="text-xs sm:text-sm font-light tracking-widest tabular-nums text-white/70 select-none">
                  <span className="text-white font-medium">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1.5 text-white/40">/</span>
                  <span className="text-white/60">
                    {String(industries.length).padStart(2, "0")}
                  </span>
                </p>

                <div className="mt-2 flex items-center gap-1.5">
                  {industries.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to ${item.name}`}
                      aria-current={
                        index === activeIndex ? "true" : undefined
                      }
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeIndex
                          ? "w-7 bg-cyan-400"
                          : "w-2 bg-white/20 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: 45% */}
          <div className="min-w-0">
            <div
              key={activeIndustry.id}
              onAnimationEnd={handleAnimationEnd}
              className={
                direction === 1
                  ? "animate-industry-enter-next"
                  : "animate-industry-enter-prev"
              }
            >
              {/* Industry card — clean restrained dark card with border-white/10 */}
              <div
                className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 shadow-2xl shadow-black/60 sm:min-h-[440px] sm:rounded-[28px] sm:p-8 lg:min-h-[480px] lg:rounded-[32px] lg:p-9 xl:p-10 transition-all duration-300 hover:border-white/20"
              >
                {/* Subtle decorative concentric ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-8 h-32 w-32 rounded-full border border-white/5 sm:right-10 sm:top-10 sm:h-44 sm:w-44"
                />

                {/* Industry number and icon */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <span className="pt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Industry {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-400 shadow-lg shadow-black/40 transition-colors duration-300 ${
                      isAnimating ? "opacity-70" : "opacity-100"
                    }`}
                  >
                    <Icon
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Industry details */}
                <div className="relative z-10 mt-8">
                  <h3 className="max-w-full break-words text-2xl font-light leading-snug tracking-tight sm:text-3xl xl:text-4xl text-white">
                    {activeIndustry.name}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 font-normal sm:text-base">
                    {activeIndustry.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>Explore our expertise</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Card footer */}
                <div className="relative z-10 mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="text-xs font-light tracking-wide text-white/40 sm:text-sm">
                    Digital solutions for modern business
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel progress bar */}
            <div
              className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-label="Industry carousel progress"
              aria-valuemin={1}
              aria-valuemax={industries.length}
              aria-valuenow={activeIndex + 1}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / industries.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide transition animations */}
      <style>{`
        @keyframes industryEnterNext {
          from {
            opacity: 0;
            transform: translateX(35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes industryEnterPrev {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-industry-enter-next {
          animation: industryEnterNext 450ms ease-out both;
        }

        .animate-industry-enter-prev {
          animation: industryEnterPrev 450ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-industry-enter-next,
          .animate-industry-enter-prev {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
