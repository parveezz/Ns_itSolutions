
import { Outlet } from "react-router-dom";
import Navbar from "../shared/NavBar";
import Footer from "../shared/Footer";
import WhatsAppButton from "../shared/WhatsAppButton";

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black font-sans antialiased text-white selection:bg-cyan-500 selection:text-black">
      {/* Floating Navbar */}
      <div className="absolute inset-x-0 top-0 z-30">
        <Navbar />
      </div>

      {/* Routed Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
