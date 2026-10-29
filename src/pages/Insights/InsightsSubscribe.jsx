import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InsightsSubscribe() {
    return (
        <section className="relative w-full overflow-hidden border-y border-white/5 bg-[#0b1020] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-14">
            {/* Subtle background accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 h-full w-64 -skew-x-12 bg-gradient-to-r from-white/[0.025] to-transparent"
            />

            <div className="relative mx-auto flex max-w-[1720px] flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12">
                {/* Text Content */}
                <div className="max-w-2xl">
                    <span className="mb-4 block text-sm font-medium tracking-wide text-blue-300">
                        News &amp; Insights
                    </span>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Never Miss an Update
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                        Subscribe to receive the latest technology insights, innovation
                        stories, and industry updates directly in your inbox.
                    </p>
                </div>

                {/* Subscribe Button */}
                <Link
                    to="/contact"
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff6900] px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,105,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7a1a] hover:shadow-[0_12px_28px_rgba(255,105,0,0.3)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0b1020] sm:px-9 sm:py-[18px]"
                >
                    Subscribe Now
                    <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </Link>
            </div>
        </section>
    );
}