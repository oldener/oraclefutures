import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Signal {
  id: number;
  coin: string;
  type: "LONG" | "SHORT";
  entry: string;
  target: string;
  stopLoss: string;
  confidence: number;
  timestamp: string;
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
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    coin: "ETH/USDT",
    type: "LONG",
    entry: "$2,245",
    target: "$2,380",
    stopLoss: "$2,200",
    confidence: 78,
    timestamp: "3 hours ago"
  },
  {
    id: 3,
    coin: "SOL/USDT",
    type: "SHORT",
    entry: "$98.50",
    target: "$94.20",
    stopLoss: "$100.80",
    confidence: 72,
    timestamp: "5 hours ago"
  },
  {
    id: 4,
    coin: "XRP/USDT",
    type: "LONG",
    entry: "$0.62",
    target: "$0.68",
    stopLoss: "$0.60",
    confidence: 81,
    timestamp: "6 hours ago"
  },
  {
    id: 5,
    coin: "MATIC/USDT",
    type: "SHORT",
    entry: "$0.88",
    target: "$0.82",
    stopLoss: "$0.91",
    confidence: 69,
    timestamp: "8 hours ago"
  }
];

export function TradingSignals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Active Trading Signals</h2>
          <p className="text-gray-600 text-sm mt-1">AI-generated signals based on market analysis</p>
        </div>
        <Badge variant="outline" className="gap-1.5">
          <Zap className="w-3 h-3" />
          Live
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockSignals.map((signal) => (
          <Card
            key={signal.id}
            className={`p-4 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              signal.type === "LONG"
                ? "border-green-200 hover:border-green-300 bg-green-50/50"
                : "border-red-200 hover:border-red-300 bg-red-50/50"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {signal.type === "LONG" ? (
                  <div className="bg-green-500 p-1.5 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="bg-red-500 p-1.5 rounded-lg">
                    <TrendingDown className="w-4 h-4 text-white" />
                  </div>
                )}
                <div>
                  <div className="text-gray-900">{signal.coin}</div>
                  <div className="text-xs text-gray-500">{signal.timestamp}</div>
                </div>
              </div>
              <Badge
                variant={signal.type === "LONG" ? "default" : "destructive"}
                className={signal.type === "LONG" ? "bg-green-600" : "bg-red-600"}
              >
                {signal.type}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Entry</span>
                <span className="text-sm text-gray-900">{signal.entry}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  Target
                </span>
                <span className={`text-sm ${signal.type === "LONG" ? "text-green-700" : "text-red-700"}`}>
                  {signal.target}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Stop Loss</span>
                <span className="text-sm text-gray-700">{signal.stopLoss}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">AI Confidence</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        signal.confidence >= 80
                          ? "bg-green-500"
                          : signal.confidence >= 70
                          ? "bg-yellow-500"
                          : "bg-orange-500"
                      }`}
                      style={{ width: `${signal.confidence}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{signal.confidence}%</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
