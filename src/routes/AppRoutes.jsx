import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
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
