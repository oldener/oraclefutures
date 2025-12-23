import { useState, useEffect } from "react";
import { AuroraBackground } from "./components/AuroraBackground";
import { FuturisticHeader } from "./components/FuturisticHeader";
import { FuturisticFooter } from "./components/FuturisticFooter";
import { FuturisticHomePage } from "./components/FuturisticHomePage";
import { FuturisticAboutPage } from "./components/FuturisticAboutPage";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "signals">("home");

  const handlePageChange = (page: "home" | "about" | "signals") => {
    setCurrentPage(page);
    // Scroll до початку сторінки
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll до верху при зміні сторінки
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <LanguageProvider>
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Main Application */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <FuturisticHeader 
          currentPage={currentPage} 
          onNavigate={handlePageChange} 
        />
        
        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {currentPage === "home" && <FuturisticHomePage />}
          {currentPage === "about" && <FuturisticAboutPage />}
          {currentPage === "signals" && <FuturisticHomePage />}
        </main>

        {/* Footer */}
        <FuturisticFooter />
      </div>
    </LanguageProvider>
  );
}
