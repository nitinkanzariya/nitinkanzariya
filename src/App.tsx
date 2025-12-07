import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { AllProjects } from "./pages/AllProjects";
import { AllExperience } from "./pages/AllExperience";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    // Add Sora font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/experience" element={<AllExperience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
