import { ArrowRight, Calendar, ShieldCheck, Clock, Sparkles, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCTA() {
  const highlights = [
    {
      icon: Clock,
      title: "48-Hour Feasibility Review",
      desc: "Receive an initial architectural analysis and scoping blueprint within 2 business days.",
    },
    {
      icon: ShieldCheck,
      title: "Strict NDA & IP Ownership",
      desc: "Comprehensive IP protection with mutual NDA executed prior to deep technical discovery.",
    },
    {
      icon: MessageSquare,
      title: "Direct Engineering Access",
      desc: "Work directly with veteran systems architects and principal engineers, not account managers.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-black py-20 sm:py-28 lg:py-32 border-t border-white/10">
      {/* Background radial glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle accent border line on top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Let's Build the Future Together</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to Accelerate Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Digital Architecture?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Partner with NS IT Solutions to architect resilient cloud infrastructures, scalable SaaS platforms, and enterprise AI automation tailored to your mission-critical operations.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-sm sm:text-base font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/insights"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <Calendar className="h-4 w-4 text-cyan-400" />
                <span>Explore Technical Insights</span>
              </Link>
            </div>
          </div>

          {/* Value props grid */}
          <div className="mt-14 sm:mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

