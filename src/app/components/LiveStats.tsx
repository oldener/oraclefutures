import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Stat {
  symbol: string;
  price: number;
  change: number;
  volume: string;
}

export function LiveStats() {
  const [stats, setStats] = useState<Stat[]>([
    { symbol: "BTC", price: 42350, change: 2.45, volume: "$2.1B" },
    { symbol: "ETH", price: 2245, change: -1.23, volume: "$1.3B" },
    { symbol: "SOL", price: 98.5, change: 5.67, volume: "$456M" },
    { symbol: "XRP", price: 0.62, change: 3.21, volume: "$789M" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        price: stat.price + (Math.random() - 0.5) * stat.price * 0.001,
        change: stat.change + (Math.random() - 0.5) * 0.5
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.symbol}
          className="p-3 bg-gray-900/30 border border-gray-700/50 clip-corner-tl relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Glow effect on hover */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${stat.change >= 0 ? "bg-green-500/5" : "bg-red-500/5"}
          `} />

          {/* Content */}
          <div className="relative z-10">
            {/* Symbol */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs uppercase tracking-wider mono-numeric">
                {stat.symbol}
              </span>
              {stat.change >= 0 ? (
                <TrendingUp className="w-3 h-3 text-green-400" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-400" />
              )}
            </div>

            {/* Price */}
            <motion.div
              className="text-white mono-numeric mb-1"
              key={stat.price}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              ${stat.price.toFixed(stat.symbol === "XRP" ? 2 : 0)}
            </motion.div>

            {/* Change */}
            <div className={`
              text-xs mono-numeric
              ${stat.change >= 0 ? "text-green-400" : "text-red-400"}
            `}>
              {stat.change >= 0 ? "+" : ""}{stat.change.toFixed(2)}%
            </div>

            {/* Volume */}
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
              <Activity className="w-3 h-3" />
              <span className="mono-numeric">{stat.volume}</span>
            </div>
          </div>

          {/* Corner accent */}
          <div className={`
            absolute top-0 left-0 w-1 h-1 
            ${stat.change >= 0 ? "bg-green-500" : "bg-red-500"}
          `} />
        </motion.div>
      ))}
    </div>
  );
}
