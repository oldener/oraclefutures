import { TrendingUp, TrendingDown, Target, Zap, Activity } from "lucide-react";
import { motion } from "motion/react";
import { GlassPanel } from "./GlassPanel";
import { Badge } from "./ui/badge";
import { useLanguage } from "../i18n/LanguageContext";

interface Signal {
  id: number;
  coin: string;
  type: "LONG" | "SHORT";
  entry: string;
  target: string;
  stopLoss: string;
  confidence: number;
  timestamp: string;
  leverage: string;
  pnl: string;
}

const mockSignals: Signal[] = [
  {
    id: 1,
    coin: "BTC/USDT",
    type: "LONG",
    entry: "$42,350",
    target: "$44,200",
    stopLoss: "$41,800",
    confidence: 85,
    timestamp: "02:34:18",
    leverage: "10x",
    pnl: "+4.37%"
  },
  {
    id: 2,
    coin: "ETH/USDT",
    type: "LONG",
    entry: "$2,245",
    target: "$2,380",
    stopLoss: "$2,200",
    confidence: 78,
    timestamp: "01:15:42",
    leverage: "8x",
    pnl: "+6.01%"
  },
  {
    id: 3,
    coin: "SOL/USDT",
    type: "SHORT",
    entry: "$98.50",
    target: "$94.20",
    stopLoss: "$100.80",
    confidence: 72,
    timestamp: "00:48:29",
    leverage: "12x",
    pnl: "-1.15%"
  },
  {
    id: 4,
    coin: "XRP/USDT",
    type: "LONG",
    entry: "$0.62",
    target: "$0.68",
    stopLoss: "$0.60",
    confidence: 81,
    timestamp: "23:22:05",
    leverage: "15x",
    pnl: "+9.68%"
  }
];

export function HUDTradingSignals() {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-white uppercase tracking-[0.2em] glow-orange flex items-center gap-3">
            <Activity className="w-6 h-6" />
            {t.tradingSignals.title}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              {t.tradingSignals.subtitle}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 clip-corner-both">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
            <div className="relative bg-green-500 rounded-full w-2 h-2" />
          </div>
          <span className="text-green-400 text-xs uppercase tracking-wider mono-numeric flex items-center gap-1">
            <Zap className="w-3 h-3" />
            {t.tradingSignals.liveFeed}
          </span>
        </div>
      </motion.div>

      {/* Signals Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockSignals.map((signal, index) => {
          const isLong = signal.type === "LONG";
          const glowColor = isLong ? "green" : "red";
          
          return (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassPanel 
                glowColor={glowColor}
                clipCorner="all"
                className="p-0 overflow-hidden group cursor-pointer"
                hover={true}
              >
                {/* Header */}
                <div className={`
                  p-4 border-b flex items-center justify-between
                  ${isLong ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}
                `}>
                  <div className="flex items-center gap-3">
                    <div className={`
                      relative p-2 clip-hexagon
                      ${isLong ? "bg-gradient-to-br from-green-600 to-green-500" : "bg-gradient-to-br from-red-600 to-red-500"}
                    `}>
                      {isLong ? (
                        <TrendingUp className="w-4 h-4 text-white" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-white" />
                      )}
                      <div className={`
                        absolute inset-0 blur-lg opacity-50
                        ${isLong ? "bg-green-500" : "bg-red-500"}
                      `} />
                    </div>
                    
                    <div>
                      <div className={`
                        mono-numeric tracking-wider
                        ${isLong ? "text-green-400 glow-green" : "text-red-400 glow-red"}
                      `}>
                        {signal.coin}
                      </div>
                      <div className="text-gray-500 text-xs mono-numeric">{signal.timestamp}</div>
                    </div>
                  </div>

                  <Badge
                    className={`
                      uppercase tracking-widest text-xs mono-numeric
                      ${isLong 
                        ? "bg-green-500/20 text-green-400 border-green-500/50" 
                        : "bg-red-500/20 text-red-400 border-red-500/50"
                      }
                    `}
                  >
                    {signal.type}
                  </Badge>
                </div>

                {/* Data Grid */}
                <div className="p-4 grid grid-cols-2 gap-4">
                  {/* Entry */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{t.tradingSignals.entry}</div>
                    <div className="text-white mono-numeric">{signal.entry}</div>
                  </div>

                  {/* Leverage */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{t.tradingSignals.leverage}</div>
                    <div className="text-orange-400 mono-numeric">{signal.leverage}</div>
                  </div>

                  {/* Target */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs uppercase tracking-wider flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {t.tradingSignals.target}
                    </div>
                    <div className={`
                      mono-numeric
                      ${isLong ? "text-green-400" : "text-red-400"}
                    `}>
                      {signal.target}
                    </div>
                  </div>

                  {/* Stop Loss */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{t.tradingSignals.stopLoss}</div>
                    <div className="text-gray-400 mono-numeric">{signal.stopLoss}</div>
                  </div>
                </div>

                {/* Footer */}
                <div className={`
                  px-4 py-3 border-t flex items-center justify-between
                  ${isLong ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}
                `}>
                  {/* AI Confidence */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">{t.tradingSignals.confidence}</span>
                      <span className="text-orange-400 text-xs mono-numeric">{signal.confidence}%</span>
                    </div>
                    <div className="relative h-1.5 bg-gray-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`
                          absolute top-0 left-0 h-full rounded-full
                          ${signal.confidence >= 80 ? "bg-gradient-to-r from-green-600 to-green-400" :
                            signal.confidence >= 70 ? "bg-gradient-to-r from-yellow-600 to-yellow-400" :
                            "bg-gradient-to-r from-orange-600 to-orange-400"}
                        `}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${signal.confidence}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>

                  {/* PNL */}
                  <div className="ml-4 px-3 py-1 bg-gray-900/50 border border-gray-700/50 clip-corner-tl">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">P&L</div>
                    <div className={`
                      mono-numeric text-sm
                      ${signal.pnl.startsWith('+') ? "text-green-400 glow-green" : "text-red-400 glow-red"}
                    `}>
                      {signal.pnl}
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
