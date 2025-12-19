import { Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Card } from "./ui/card";

export function CoinAnalysisForm() {
  const [coin, setCoin] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coin.trim()) return;

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      alert(`Analysis for ${coin} would be displayed here. This will be connected to AI in the future.`);
      setCoin("");
    }, 2000);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-gray-900">Request AI Analysis</h3>
          <p className="text-sm text-gray-600">Get instant insights on any cryptocurrency</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter coin symbol (e.g., BTC, ETH, SOL)"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
            className="pl-10 bg-white border-blue-200 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
        <Button
          type="submit"
          disabled={isAnalyzing || !coin.trim()}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Analyze
            </>
          )}
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-xs text-gray-600">Quick select:</span>
        {["BTC", "ETH", "SOL", "XRP", "MATIC"].map((symbol) => (
          <button
            key={symbol}
            type="button"
            onClick={() => setCoin(symbol)}
            className="px-3 py-1 text-xs bg-white border border-blue-200 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-colors"
          >
            {symbol}
          </button>
        ))}
      </div>
    </Card>
  );
}
