import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-black font-sans antialiased text-white selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      {/* 1. Transparent Floating Corporate Navbar */}
      <div className="absolute top-0 inset-x-0 z-30">
        <Navbar />
      </div>

      {/* 2. Routed Page Body (Rendered via React Router Outlet) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 3. Corporate Footer */}
      <Footer />
    </div>
  );
}
