
import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import Industries from "../Components/Industries";
import Insights from "../Components/Insights";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/industries"
          element={
            <div className="pt-20 sm:pt-24 lg:pt-28">
              <Industries />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/insights"
          element={
            <div className="pt-20 sm:pt-24 lg:pt-28">
              <Insights />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="pt-20 sm:pt-24 lg:pt-28">
              <Contact />
            </div>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
