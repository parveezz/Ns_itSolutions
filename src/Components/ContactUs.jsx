
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const initialFormData = {
  fullName: "",
  workEmail: "",
  phoneNumber: "",
  jobTitle: "",
  companyName: "",
  city: "",
  employeeCount: "",
  serviceInterested: "",
  message: "",
};

const labelClass =
  "mb-3 block text-xs font-medium uppercase tracking-[0.1em] text-white/60";

const inputClass =
  "h-[60px] sm:h-[65px] w-full rounded-[10px] border border-white/15 bg-[#141417] px-6 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30";

const selectClass =
  "h-[60px] sm:h-[65px] w-full cursor-pointer appearance-none rounded-[10px] border border-white/15 bg-[#141417] px-6 pr-12 text-[15px] text-white outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30";

function Field({ label, htmlFor, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Frontend only: no API call and no data submission.
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white"
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

      {/* Main layout */}
      <div className="mx-auto grid w-full max-w-[1740px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.76fr_1fr] lg:gap-16 lg:px-[6.1%] lg:py-20 xl:gap-20">
        {/* Left side */}
        <div className="min-w-0 pt-0 lg:pt-0">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            Get In Touch
          </span>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-light leading-[1.15] tracking-tight text-white"
          >
            Let's Connect.
          </h2>

          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-white/70 font-normal sm:text-lg">
            Reach out to us for any questions or support.
            <br className="hidden xl:block" /> Our dedicated team is here to
            provide prompt and helpful assistance.
          </p>
        </div>

        {/* Right side: Contact form */}
        <div className="min-w-0">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Full Name */}
            <Field label="Full Name" htmlFor="fullName">
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                maxLength={100}
                required
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="Email Address" htmlFor="workEmail">
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  maxLength={254}
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Phone" htmlFor="phoneNumber">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Job Title and Company */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="Job Title" htmlFor="jobTitle">
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  autoComplete="organization-title"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Company" htmlFor="companyName">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>

            {/* City and Number of Employees */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="City" htmlFor="city">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field
                label="No. of Employees"
                htmlFor="employeeCount"
              >
                <div className="relative">
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    required
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" disabled className="bg-[#141417]">
                      No. of Employees*
                    </option>
                    <option value="1-10" className="bg-[#141417]">
                      1–10
                    </option>
                    <option value="11-50" className="bg-[#141417]">
                      11–50
                    </option>
                    <option value="51-200" className="bg-[#141417]">
                      51–200
                    </option>
                    <option value="201-500" className="bg-[#141417]">
                      201–500
                    </option>
                    <option value="500+" className="bg-[#141417]">
                      500+
                    </option>
                  </select>

                  <ChevronIcon />
                </div>
              </Field>
            </div>

            {/* Solutions */}
            <Field
              label="Solutions"
              htmlFor="serviceInterested"
            >
              <div className="relative">
                <select
                  id="serviceInterested"
                  name="serviceInterested"
                  required
                  value={formData.serviceInterested}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" disabled className="bg-[#141417]">
                    Solutions*
                  </option>
                  <option value="web-development" className="bg-[#141417]">
                    Web Development
                  </option>
                  <option value="mobile-development" className="bg-[#141417]">
                    Mobile App Development
                  </option>
                  <option value="ui-ux-design" className="bg-[#141417]">
                    UI/UX Design
                  </option>
                  <option value="software-development" className="bg-[#141417]">
                    Software Development
                  </option>
                  <option value="cloud-solutions" className="bg-[#141417]">
                    Cloud Solutions
                  </option>
                  <option value="it-consulting" className="bg-[#141417]">
                    IT Consulting
                  </option>
                  <option value="other" className="bg-[#141417]">
                    Other
                  </option>
                </select>

                <ChevronIcon />
              </div>
            </Field>

            {/* Message */}
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                maxLength={3000}
                required
                minLength={10}
                value={formData.message}
                onChange={handleChange}
                className="min-h-[135px] w-full resize-y rounded-[10px] border border-white/15 bg-[#141417] px-6 py-5 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30"
              />
            </Field>

            {/* Hero-matched CTA Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-teal-950/40 transition-all duration-300 hover:shadow-xl hover:translate-x-0.5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
            >
              <span>Send Message</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
