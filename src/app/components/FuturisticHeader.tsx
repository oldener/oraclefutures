import { Brain, Menu, X, Activity, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function FuturisticHeader({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HUB", icon: Activity },
    { id: "about", label: "INTEL", icon: Brain },
    { id: "signals", label: "SIGNALS", icon: Zap },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-[#0a0a14]/60 backdrop-blur-xl" />
      
      {/* Energy Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              {/* Hexagon Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative clip-hexagon bg-gradient-to-br from-orange-600 to-orange-500 p-2.5">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-white uppercase tracking-[0.2em] glow-orange">
                Oracle
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-px w-4 bg-gradient-to-r from-orange-500 to-transparent" />
                <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
                  Futures
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    relative px-6 py-2 group
                    ${isActive ? "text-orange-500" : "text-gray-400"}
                    hover:text-orange-400 transition-colors
                    uppercase tracking-widest text-sm
                  `}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-orange-500/10 border-t-2 border-b-2 border-orange-500/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="mono-numeric">{item.label}</span>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              );
            })}
          </nav>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 clip-corner-tl">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative bg-green-500 rounded-full w-2 h-2" />
            </div>
            <span className="text-green-400 text-xs uppercase tracking-wider mono-numeric">LIVE</span>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-orange-500 p-2 hover:bg-orange-500/10 border border-orange-500/30 clip-corner-tl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 space-y-2 border-t border-orange-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-3 flex items-center gap-3
                    ${isActive ? "bg-orange-500/20 text-orange-400 border-l-2 border-orange-500" : "text-gray-400"}
                    hover:bg-orange-500/10 hover:text-orange-400 transition-all
                    uppercase tracking-wider text-sm
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="mono-numeric">{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
