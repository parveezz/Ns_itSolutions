import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SliderControls({
  onPrev,
  onNext,
  currentSlide = 1,
  totalSlides = 3
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-5" aria-label="Hero slider controls">
      {/* Previous Slide Button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white/10 active:bg-white/20 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
      </button>

      {/* Next Slide Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white/10 active:bg-white/20 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
      </button>

      {/* Slide Counter Indicator */}
      <div className="text-xs sm:text-sm font-light text-white/70 tracking-widest pl-1 select-none">
        <span className="text-white font-medium">0{currentSlide}</span>
        <span className="mx-1 text-white/40">/</span>
        <span>0{totalSlides}</span>
      </div>
    </div>
  );
}
