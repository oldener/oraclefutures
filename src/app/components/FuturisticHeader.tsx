import { Brain, Menu, X, Activity, Zap, Globe, ChevronDown, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Language } from "../i18n/translations";

interface HeaderProps {
  currentPage: "home" | "about" | "signals";
  onNavigate: (page: "home" | "about" | "signals") => void;
}

export function FuturisticHeader({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: "home" | "about" | "signals"; label: string; icon: any }[] = [
    { id: "home", label: t.header.hub, icon: Activity },
    { id: "about", label: t.header.intel, icon: Brain },
    { id: "signals", label: t.header.signals, icon: Zap },
  ];

  const languages = [
    { code: "uk" as Language, name: "Українська", flag: "🇺🇦" },
    { code: "en" as Language, name: "English", flag: "🇬🇧" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

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

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-cyan-500/30 hover:border-cyan-500/50 clip-corner-tl transition-all"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm mono-numeric">{currentLanguage?.flag}</span>
                <ChevronDown className={`w-3 h-3 text-cyan-400 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`} />
              </motion.button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 bg-[#0a0a14]/95 backdrop-blur-xl border border-cyan-500/30 clip-corner-all overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`
                          w-full px-4 py-3 flex items-center gap-3 text-left
                          ${language === lang.code ? "bg-cyan-500/20 text-cyan-400" : "text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400"}
                          transition-all border-b border-cyan-500/10 last:border-b-0
                        `}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageMenuOpen(false);
                        }}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm mono-numeric">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login / Register Button */}
            <motion.button
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 border border-orange-400/50 clip-corner-both transition-all text-white uppercase tracking-wider text-sm mono-numeric"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogIn className="w-4 h-4" />
              <span>{t.header.login} / {t.header.register}</span>
            </motion.button>
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
            {/* Navigation Items */}
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

            {/* Language Selector Mobile */}
            <div className="px-4 py-2">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <Globe className="w-3 h-3" />
                Language
              </div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`
                      w-full px-3 py-2 flex items-center gap-2 text-left clip-corner-tl
                      ${language === lang.code ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-gray-900/30 text-gray-400 border border-gray-700/30"}
                      hover:bg-cyan-500/10 hover:text-cyan-400 transition-all text-sm
                    `}
                    onClick={() => {
                      setLanguage(lang.code);
                    }}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="mono-numeric">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Login Button Mobile */}
            <div className="px-4 pt-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 border border-orange-400/50 clip-corner-both text-white uppercase tracking-wider text-sm mono-numeric">
                <LogIn className="w-4 h-4" />
                <span>{t.header.login} / {t.header.register}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
