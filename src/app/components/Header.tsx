import { Brain, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-xl tracking-tight">OracleFutures</h1>
              <p className="text-gray-400 text-xs">AI Trading Assistant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant={currentPage === "home" ? "secondary" : "ghost"}
              onClick={() => onNavigate("home")}
              className={currentPage === "home" ? "text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"}
            >
              Home
            </Button>
            <Button
              variant={currentPage === "about" ? "secondary" : "ghost"}
              onClick={() => onNavigate("about")}
              className={currentPage === "about" ? "text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              Signals
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              Analysis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-2">
            <Button
              variant={currentPage === "home" ? "secondary" : "ghost"}
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
              }}
              className={`w-full justify-start ${currentPage === "home" ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              Home
            </Button>
            <Button
              variant={currentPage === "about" ? "secondary" : "ghost"}
              onClick={() => {
                onNavigate("about");
                setMobileMenuOpen(false);
              }}
              className={`w-full justify-start ${currentPage === "about" ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white"
            >
              Signals
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white"
            >
              Analysis
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
