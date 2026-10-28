
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

            <div className="mx-auto flex w-full max-w-[1520px] flex-col items-center justify-between gap-5 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:gap-8 lg:px-16">
                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl md:text-left">
                    We are here to assist you
                </h2>

                {/* Learn More Button */}
                <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#10151c]"
                >
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
}
