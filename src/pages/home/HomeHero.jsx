import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroBg from "../../assets/hero.webp";

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[680px] w-full overflow-hidden bg-[#06030E] sm:min-h-[750px] lg:min-h-screen"
      aria-label="NS IT SOLUTIONS introduction"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="NS IT SOLUTIONS delivering modern digital solutions"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[15%_25%]"
      />

      {/* Background Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-55% to-black/20" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#06030E] via-[#06030E]/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative flex min-h-[680px] items-end pb-16 pt-32 sm:min-h-[750px] sm:pb-20 lg:min-h-screen lg:pb-24">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">

            {/* Left Content */}
            <div className="flex-1 pr-0 text-white lg:pr-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Welcome to NS IT SOLUTIONS
              </p>

              <h1 className="mb-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Engineering Scalable Digital Solutions for Modern Businesses
              </h1>

              <p className="mb-5 max-w-3xl text-sm leading-7 text-gray-200 sm:text-base lg:text-lg">
                NS IT SOLUTIONS helps businesses transform their ideas into
                powerful digital experiences through custom software
                development, modern web and mobile applications, intelligent
                automation, and scalable technology solutions.
              </p>

              <p className="text-xs font-medium text-gray-300 sm:text-sm">
                Your Technology Partner for Innovation, Growth, and Digital Excellence.
              </p>
            </div>

            {/* Right CTA Buttons */}
            <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row lg:flex-col">

              {/* Start Your Project */}
              <Link
                to="/contact"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/25 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 active:scale-95 sm:px-8"
              >
                <span>Start Your Project</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Book a Consultation */}
              <Link
                to="/contact"
                className="flex items-center justify-center rounded-full border border-white/40 bg-black/30 px-6 py-3.5 text-center text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95 sm:px-8"
              >
                Book a Consultation
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}