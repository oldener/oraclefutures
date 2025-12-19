import { useState } from "react";
import { AuroraBackground } from "./components/AuroraBackground";
import { FuturisticHeader } from "./components/FuturisticHeader";
import { FuturisticFooter } from "./components/FuturisticFooter";
import { FuturisticHomePage } from "./components/FuturisticHomePage";
import { FuturisticAboutPage } from "./components/FuturisticAboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "signals">("home");

  return (
    <>
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Main Application */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <FuturisticHeader 
          currentPage={currentPage} 
          onNavigate={(page) => setCurrentPage(page as "home" | "about" | "signals")} 
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
    </>
  );
}
