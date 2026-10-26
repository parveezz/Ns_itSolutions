import { useState } from "react";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/NavBar";
import Section from "./Components/Section";
import ServiceCard from "./Components/ServiceCard";
import QuoteModal from "./Components/QuoteModal";
import { services, downloads, jobOpenings, stats } from "./data";
import {
  FaDownload,
  FaFileCode,
  FaFileArchive,
  FaFilePdf,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaServer,
  FaPaperPlane
} from "react-icons/fa";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 4000);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "exe":
        return <FaFileCode className="w-7 h-7 text-brand-orange" />;
      case "zip":
        return <FaFileArchive className="w-7 h-7 text-amber-500" />;
      default:
        return <FaFilePdf className="w-7 h-7 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 1. ABOUT / HERO SECTION (Full h-screen) */}
      <section
        id="about"
        className="min-h-screen w-full bg-brand-brown text-white flex flex-col justify-center px-6 sm:px-12 py-20 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full my-auto text-center z-10">
          <span className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 border border-brand-orange/30">
            Professional IT & Hardware Services
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Complete IT Services & <span className="text-brand-orange">Hardware Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We handle software installation, computer repairs, asset barcode tagging, and office networking so your team can work without interruptions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-brand-orange/40 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Quote
            </button>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg text-base font-bold transition-all transform hover:-translate-y-0.5"
            >
              Our Services
            </a>
            <a
              href="#download"
              className="text-gray-300 hover:text-white px-6 py-3.5 rounded-lg text-base font-medium flex items-center gap-2 transition-colors"
            >
              <FaDownload className="w-4 h-4 text-brand-orange" /> Download Tools
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Full h-screen) */}
      <Section
        id="services"
        title="What We Do"
        subtitle="Simple, reliable computer and IT services for offices, small businesses, and institutions."
        altBg
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Action Callout */}
        <div className="bg-brand-brown text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow">
          <div>
            <h3 className="text-xl font-bold">Have multiple computers that need setup or service?</h3>
            <p className="text-sm text-gray-300 mt-1">
              Contact us for bulk office computer discounts and custom service visits.
            </p>
          </div>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-bold whitespace-nowrap transition-colors shadow cursor-pointer"
          >
            Get a Quote Now
          </button>
        </div>
      </Section>

      {/* 3. DOWNLOADS SECTION (Full h-screen) */}
      <Section
        id="download"
        title="Downloads & Helpful Tools"
        subtitle="Free software utilities, scanner drivers, and setup guides provided by NS IT Solutions."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-orange transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-gray-50 rounded-lg">{getFileIcon(item.type)}</div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {item.size}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-brand-brown mb-1">{item.title}</h3>
                <span className="text-xs text-brand-orange font-semibold block mb-3">
                  Version: {item.version}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <a
                href={item.link}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-800 font-semibold py-2.5 rounded-lg text-sm transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download File</span>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. CAREERS SECTION (Full h-screen) */}
      <Section
        id="career"
        title="Work With Us"
        subtitle="We are looking for friendly hardware technicians and network assistants to join our team."
        altBg
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-brown">{job.role}</h3>
                  <span className="text-xs font-semibold bg-amber-50 text-brand-orange px-2.5 py-1 rounded-full border border-amber-100">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                <div className="flex gap-4 text-xs text-gray-500 font-medium mb-6">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-brand-orange" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaBriefcase className="text-brand-orange" />
                    {job.experience}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto self-start bg-brand-navy hover:bg-brand-brown text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Apply by Contacting Us
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CONTACT SECTION (Full h-screen) */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Need computer support, software installed, or barcode stickers? Send us a quick message."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 bg-brand-brown text-white p-8 rounded-2xl shadow-lg border border-amber-950 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Get in Touch</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Call us directly or send an email. We are happy to help with any office IT need.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-brand-orange mt-0.5">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Office Location</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      NS IT Solutions, HITEC City, Hyderabad, TG
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-brand-orange mt-0.5">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Call Us</h4>
                    <p className="text-gray-300 text-xs mt-0.5">+91 9030264664</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-brand-orange mt-0.5">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email Address</h4>
                    <p className="text-gray-300 text-xs mt-0.5">info@nsitsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-brand-orange mt-0.5">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Working Hours</h4>
                    <p className="text-gray-300 text-xs mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {contactSubmitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-1">Message Received!</h3>
                <p className="text-gray-600 text-sm">
                  Thank you! We will reach out to your phone / email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9030264664"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Service You Need
                  </label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-700">
                    <option>Software Installation</option>
                    <option>Asset Tagging & Barcode Stickers</option>
                    <option>Hardware Repairs & Upgrades</option>
                    <option>Office WiFi & Networking</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe how we can help..."
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-brand-brown text-white py-8 px-6 border-t border-amber-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-orange text-white rounded-lg">
              <FaServer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">NS IT SOLUTIONS</div>
              <p className="text-xs text-gray-400">Office Computer & Hardware Services</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 font-medium">
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#download" className="hover:text-brand-orange transition-colors">Downloads</a>
            <a href="#career" className="hover:text-brand-orange transition-colors">Careers</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NS IT Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Interactive Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}