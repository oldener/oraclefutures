import { Search, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { GlassPanel } from "./GlassPanel";
import { Input } from "./ui/input";
import { useLanguage } from "../i18n/LanguageContext";

export function HUDAnalysisForm() {
  const [coin, setCoin] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coin.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      alert(`AI Analysis for ${coin} initialized. Full integration coming soon.`);
      setCoin("");
    }, 2000);
  };

  const quickCoins = ["BTC", "ETH", "SOL", "XRP", "MATIC", "AVAX"];

  return (
    <GlassPanel glowColor="cyan" clipCorner="all" className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50" />
          <div className="relative clip-hexagon bg-gradient-to-br from-cyan-600 to-cyan-500 p-2.5">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-white uppercase tracking-wider glow-cyan">
            {t.analysisForm.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-px w-6 bg-gradient-to-r from-cyan-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              {t.analysisForm.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          {/* Input with custom styling */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500 z-10" />
            <Input
              type="text"
              placeholder={t.analysisForm.placeholder}
              value={coin}
              onChange={(e) => setCoin(e.target.value.toUpperCase())}
              className="
                w-full pl-12 pr-4 py-3 
                bg-gray-900/50 border border-cyan-500/30 
                text-white placeholder:text-gray-500
                focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20
                clip-corner-tl
                mono-numeric tracking-wider
                transition-all duration-300
              "
            />
            {/* Animated border effect */}
            <div className="absolute inset-0 clip-corner-tl pointer-events-none">
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          type="submit"
          disabled={isAnalyzing || !coin.trim()}
          className={`
            w-full py-3 px-6 
            bg-gradient-to-r from-cyan-600 to-cyan-500
            hover:from-cyan-500 hover:to-cyan-400
            border border-cyan-400/50
            text-white uppercase tracking-widest
            clip-corner-both
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            relative overflow-hidden
            group
          `}
          whileHover={{ scale: isAnalyzing ? 1 : 1.02 }}
          whileTap={{ scale: isAnalyzing ? 1 : 0.98 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Button content */}
          <div className="relative flex items-center justify-center gap-2 mono-numeric">
                {isAnalyzing ? (
              <>
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>{t.analysisForm.analyzing}</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>{t.analysisForm.button}</span>
              </>
            )}
          </div>
        </motion.button>
      </form>

      {/* Quick Select */}
      <div className="mt-6 pt-6 border-t border-cyan-500/20">
          <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <span className="text-gray-500 text-xs uppercase tracking-widest">{t.analysisForm.quickAccess}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {quickCoins.map((symbol, index) => (
            <motion.button
              key={symbol}
              type="button"
              onClick={() => setCoin(symbol)}
              className="
                px-4 py-2 
                bg-gray-900/30 border border-cyan-500/20
                hover:bg-cyan-500/10 hover:border-cyan-500/50
                text-cyan-400 hover:text-cyan-300
                text-sm uppercase tracking-wider mono-numeric
                clip-corner-tl
                transition-all duration-300
                relative group
              "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {symbol}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      <motion.div
        className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
        <span className="mono-numeric uppercase tracking-wider">{t.analysisForm.systemReady}</span>
      </motion.div>
    </GlassPanel>
  );
}
