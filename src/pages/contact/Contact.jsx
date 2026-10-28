
import { useState } from "react";
import {
    ArrowRight,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import { Input, Select, Textarea } from "../../shared";

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

function ContactDetail({ icon: Icon, title, children }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-400">
                <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 pt-0.5">
                <h4 className="text-sm font-medium text-white">{title}</h4>
                <div className="mt-2 text-sm leading-relaxed text-white/60">
                    {children}
                </div>
            </div>
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

        // Frontend only: no API call or data submission.
        // Connect your backend here when ready.
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative isolate w-full overflow-hidden bg-black text-white"
        >
            {/* Background gradients */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 via-50% to-black/35"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
            />

            {/* Centered heading */}
            <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 pt-40 pb-10 text-center sm:px-10 sm:pt-20 sm:pb-12 lg:pt-24">
                <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
                    Get In Touch
                </span>

                <h2
                    id="contact-heading"
                    className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[46px]"
                >
                    Let's Connect.
                </h2>

                <p className="mx-auto mt-4 max-w-[650px] text-sm font-normal leading-relaxed text-white/70 sm:mt-5 sm:text-base lg:text-lg">
                    Reach out to us for any questions or support.
                    Our dedicated team is here to provide prompt and helpful assistance.
                </p>
            </div>

            {/* Main content: contact information + compact form */}
            <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-12 px-6 pb-16 sm:px-10 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-16 lg:pb-24 xl:grid-cols-[1fr_1fr] xl:gap-20">
                {/* Left: Contact information aligned to the top */}
                <div className="flex min-w-0 flex-col justify-start gap-7 pt-0 lg:gap-8 lg:pr-6">
                    <div className="mb-1">
                        <h3 className="text-xl font-light tracking-tight text-white sm:text-2xl">
                            Contact Information
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                            Have a project in mind? Get in touch with our team.
                            We'd be happy to discuss your requirements.
                        </p>
                    </div>

                    <ContactDetail icon={MapPin} title="Our Address">
                        <p>Add your business address here</p>
                    </ContactDetail>

                    <ContactDetail icon={Mail} title="Email Address">
                        <a
                            href="mailto:your-email@example.com"
                            className="break-all transition-colors hover:text-cyan-400"
                        >
                            your-email@example.com
                        </a>
                    </ContactDetail>

                    <ContactDetail icon={Phone} title="Phone Number">
                        <a
                            href="tel:+10000000000"
                            className="transition-colors hover:text-cyan-400"
                        >
                            Add your phone number
                        </a>
                    </ContactDetail>
                </div>

                {/* Right: Narrower contact form */}
                <div className="min-w-0 w-full max-w-[620px] lg:ml-auto">
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                        {/* Full name */}
                        <Input
                            label="Full Name"
                            id="fullName"
                            name="fullName"
                            autoComplete="name"
                            placeholder="Full name"
                            maxLength={100}
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />

                        {/* Email and phone */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <Input
                                label="Email Address"
                                id="workEmail"
                                name="workEmail"
                                type="email"
                                autoComplete="email"
                                placeholder="Email address"
                                maxLength={254}
                                required
                                value={formData.workEmail}
                                onChange={handleChange}
                            />

                            <Input
                                label="Phone"
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                autoComplete="tel"
                                placeholder="Phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Job title and company */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <Input
                                label="Job Title"
                                id="jobTitle"
                                name="jobTitle"
                                autoComplete="organization-title"
                                placeholder="Job title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                            />

                            <Input
                                label="Company"
                                id="companyName"
                                name="companyName"
                                autoComplete="organization"
                                placeholder="Company name"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* City and employee count */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <Input
                                label="City"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />

                            <Select
                                label="No. of Employees"
                                id="employeeCount"
                                name="employeeCount"
                                placeholder="Select employees*"
                                required
                                value={formData.employeeCount}
                                onChange={handleChange}
                            >
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
                            </Select>
                        </div>

                        {/* Solutions */}
                        <Select
                            label="Solutions"
                            id="serviceInterested"
                            name="serviceInterested"
                            placeholder="Select a solution*"
                            required
                            value={formData.serviceInterested}
                            onChange={handleChange}
                        >
                            <option value="web-development" className="bg-[#141417]">
                                Web Development
                            </option>
                            <option
                                value="mobile-development"
                                className="bg-[#141417]"
                            >
                                Mobile App Development
                            </option>
                            <option value="ui-ux-design" className="bg-[#141417]">
                                UI/UX Design
                            </option>
                            <option
                                value="software-development"
                                className="bg-[#141417]"
                            >
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
                        </Select>

                        {/* Message */}
                        <Textarea
                            label="Message"
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={4}
                            maxLength={3000}
                            minLength={10}
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#0d9488] px-7 py-3 text-xs font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#0f766e] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black sm:text-sm"
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
