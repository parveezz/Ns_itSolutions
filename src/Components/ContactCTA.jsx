
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactCTA() {
    const navigate = useNavigate();

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#10151c] text-white">
            {/* Abstract background shapes */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -left-[10%] -top-[90%] h-[180%] w-[75%] rotate-[-25deg] rounded-[45%] bg-[#0b0f14]" />

                <div className="absolute -right-[15%] -top-[55%] h-[150%] w-[65%] rotate-[-30deg] rounded-[45%] bg-[#18212c]" />

                <div className="absolute -bottom-[125%] right-[8%] h-[200%] w-[45%] rotate-[35deg] rounded-[50%] bg-[#222f3d]/70" />
            </div>

            {/* Main row */}
            <div className="mx-auto flex w-full max-w-[1520px] flex-col items-start justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:gap-8 lg:px-16">
                {/* Left side: Label + Heading */}
                <div className="flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent sm:text-sm">
                        LET&apos;S CONNECT
                    </span>

                    <h2 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-3xl">
                        We are here to assist you.
                    </h2>
                </div>

                {/* Right side: Button */}
                <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#10151c] sm:text-sm"
                >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    );
}
