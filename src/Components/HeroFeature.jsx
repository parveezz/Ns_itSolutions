
import { ArrowRight } from "lucide-react";

export default function HeroFeature({
  title = "Apple Deployment, PAN-India",
  ctaText = "Learn More",
  ctaHref = "#apple-deployment",
}) {
  return (
    <div className="relative flex items-stretch gap-5 sm:gap-6 max-w-lg">
      {/* Two-tone vertical accent line */}
      <div
        className="w-[2.5px] rounded-full flex flex-col shrink-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-10 sm:h-12 bg-cyan-400 w-full shrink-0" />
        <div className="flex-1 bg-white/70 w-full" />
      </div>

      {/* Feature content */}
      <div className="flex flex-col justify-between gap-5 py-0.5">
        <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug opacity-100">
          {title}
        </h2>

        <div>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
