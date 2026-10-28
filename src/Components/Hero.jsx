import { useState, useEffect, useCallback } from "react";
import heroBg1 from "../assets/hero-bg.jpg";
import heroBg2 from "../assets/hero-bg-2.jpg";
import HeroFeature from "./HeroFeature";
import SliderControls from "./SliderControls";

const slides = [
  {
    id: 1,
    image: heroBg1,
    headline: "Empowering Companies To Scale Apple Devices Across India",
    featureTitle: "Apple Deployment, PAN-India",
    ctaText: "Learn More",
    ctaHref: "#apple-deployment",
  },
  {
    id: 2,
    image: heroBg2,
    headline: "Transforming Enterprise Workflows With Next-Gen Apple Solutions",
    featureTitle: "Device Lifecycle Management",
    ctaText: "Explore Solutions",
    ctaHref: "#lifecycle-management",
  },
];

const gradientPrimary =
  "absolute inset-0 bg-gradient-to-r " +
  "from-black/55 via-black/10 via-45% to-transparent " +
  "pointer-events-none z-10";

const gradientBottom =
  "absolute inset-0 bg-gradient-to-t " +
  "from-black via-black/60 via-35% to-transparent " +
  "pointer-events-none z-10";
export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-black"

      aria-label="Hero slider section"
    >
      {/* Background Images Layer with smooth cross-fade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-no-repeat
    transition-opacity duration-700 ease-in-out
    ${currentSlideIndex === index
              ? "opacity-100 z-0"
              : "opacity-0 z-0 pointer-events-none"
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center center",
            filter: "saturate(1.2) brightness(1.05)",
          }}
          aria-hidden={currentSlideIndex !== index}
        />
      ))}

      {/* Primary horizontal black gradient overlay (darkest left → lighter right) */}
      <div className={gradientPrimary} aria-hidden="true" />

      {/* Secondary bottom ambient gradient (ensures crisp contrast for bottom-anchored content) */}
      <div className={gradientBottom} aria-hidden="true" />

      {/* Spacer for top navbar alignment */}
      <div className="h-20 sm:h-28 z-20" aria-hidden="true" />

      {/* Hero bottom content area (anchored to the bottom) */}
      <div className="relative z-20 max-w-[1520px] w-full mx-auto px-6 sm:px-10 lg:px-16 mt-auto pb-10 sm:pb-14 lg:pb-16 pt-20">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-10">
          {/* Left Column: 75% Width — Main Headline + Slider Controls */}
          <div className="w-full lg:w-[75%] flex flex-col justify-end">
            <h1
              key={currentSlide.id}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px] font-light text-white tracking-tight leading-[1.15] mb-6 sm:mb-8 whitespace-normal xl:whitespace-nowrap transition-all duration-500 animate-fadeIn"
            >
              {currentSlide.headline}
            </h1>

            {/* Functional Slider controls near bottom-left corner */}
            <SliderControls
              onPrev={handlePrev}
              onNext={handleNext}
              currentSlide={currentSlideIndex + 1}
              totalSlides={slides.length}
            />
          </div>

          {/* Right Column: 25% Width — Featured Content Block (No Wrapped Text) */}
          <div className="w-full lg:w-[25%] shrink-0 flex justify-start lg:justify-end pb-1">
            <HeroFeature
              key={currentSlide.id}
              title={currentSlide.featureTitle}
              ctaText={currentSlide.ctaText}
              ctaHref={currentSlide.ctaHref}
            />
          </div>
        </div>
      </div>
    </section>
  );
}