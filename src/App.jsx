import { useState } from "react";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/NavBar";
import Section from "./Components/Section";
import ProductCard from "./Components/ProductCard";
import ServiceCard from "./Components/ServiceCard";
import LiveCableSimulator from "./Components/LiveCableSimulator";
import QuoteModal from "./Components/QuoteModal";
import { hardwareProducts, softwareSolutions, downloads, stats } from "./data";
import { FaDownload, FaFileCode, FaFilePdf, FaServer } from "react-icons/fa";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState("");

  const openQuoteWithProduct = (productName) => {
    setQuotePrefill(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased overflow-x-hidden">
      <TopBar />
      <Navbar onOpenQuote={() => openQuoteWithProduct("")} />

      {/* 1. HERO SECTION */}
      <section
        id="about"
        className="min-h-screen w-full bg-brand-brown text-white flex flex-col justify-center px-4 sm:px-8 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto w-full my-auto text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-brand-orange/30">
            Hardware + Software Integration
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered Cables & Wires. <br />
            <span className="text-brand-orange">Powered by Smart Software.</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 font-normal">
            Commercial copper LAN cables, fiber optic lines, and server wiring — bundled with free companion software to test speeds and map ports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto mb-12">
            <a
              href="#cables"
              className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md text-center"
            >
              Browse Cables
            </a>
            <a
              href="#simulator"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all text-center"
            >
              Test Live Demo
            </a>
            <button
              onClick={() => openQuoteWithProduct("")}
              className="w-full sm:w-auto text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors cursor-pointer text-center"
            >
              Get Pricing
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/5">
                <div className="text-xl sm:text-2xl font-bold text-brand-orange">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CABLES & WIRES (Hardware) */}
      <Section
        id="cables"
        title="Physical Cables & Wires"
        subtitle="Manufactured with 100% pure copper and flame-retardant shielding for maximum signal speed."
        altBg
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {hardwareProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={(name) => openQuoteWithProduct(name)}
            />
          ))}
        </div>
      </Section>

      {/* 3. COMPANION SOFTWARE */}
      <Section
        id="software"
        title="Companion Software Tools"
        subtitle="Desktop and mobile tools that monitor your cables, test throughput, and track asset tags."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {softwareSolutions.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* 4. LIVE SIMULATION DEMO */}
      <Section
        id="simulator"
        title="Live Cable Diagnostic Demo"
        subtitle="Click below to see how our software measures physical cable speed and signal health in real time."
        altBg
      >
        <LiveCableSimulator onOpenQuote={() => openQuoteWithProduct("Diagnostic Tested Cable")} />
      </Section>

      {/* 5. DOWNLOADS */}
      <Section
        id="download"
        title="Downloads & Catalog"
        subtitle="Free diagnostic software utilities and product specification catalog."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {item.type === "exe" ? (
                    <FaFileCode className="w-6 h-6 text-brand-orange" />
                  ) : (
                    <FaFilePdf className="w-6 h-6 text-red-500" />
                  )}
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {item.size}
                  </span>
                </div>
                <h3 className="font-bold text-base text-brand-brown mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 mb-4">{item.description}</p>
              </div>

              <a
                href={item.link}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-800 font-semibold py-2 rounded-lg text-xs transition-colors"
              >
                <FaDownload className="w-3 h-3" />
                <span>Download ({item.version})</span>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-brand-brown text-white py-6 px-4 border-t border-amber-950">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
          <div className="flex items-center gap-2">
            <FaServer className="text-brand-orange w-4 h-4" />
            <span className="font-bold">NS IT SOLUTIONS</span>
            <span className="text-gray-400">| Cables & Smart Software</span>
          </div>

          <div className="flex gap-4 text-gray-300">
            <a href="#about" className="hover:text-brand-orange">About</a>
            <a href="#cables" className="hover:text-brand-orange">Cables</a>
            <a href="#software" className="hover:text-brand-orange">Software</a>
            <a href="#simulator" className="hover:text-brand-orange">Demo</a>
            <a href="#download" className="hover:text-brand-orange">Downloads</a>
          </div>

          <p className="text-gray-400">
            © {new Date().getFullYear()} NS IT Solutions.
          </p>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quotePrefill}
      />
    </div>
  );
}