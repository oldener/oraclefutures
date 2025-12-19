import { Brain, Target, Zap, TrendingUp, Shield } from "lucide-react";
import { CoinAnalysisForm } from "./CoinAnalysisForm";
import { TradingSignals } from "./TradingSignals";
import { Card } from "./ui/card";

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 lg:p-16 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Master Crypto Futures Trading with AI
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            OracleFutures harnesses the power of artificial intelligence to provide you with real-time trading signals, 
            comprehensive market analysis, and data-driven insights for cryptocurrency futures trading.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">AI-Powered</h3>
                <p className="text-sm text-blue-200">Advanced algorithms analyze market patterns</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="bg-purple-500 p-2 rounded-lg shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Precise Signals</h3>
                <p className="text-sm text-blue-200">Entry, target, and stop-loss recommendations</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="bg-green-500 p-2 rounded-lg shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Real-Time</h3>
                <p className="text-sm text-blue-200">Live market updates and instant analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Form Section */}
      <section>
        <CoinAnalysisForm />
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-fit mb-4">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-900 mb-2">Smart Analysis</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our AI analyzes thousands of data points including technical indicators, sentiment analysis, 
            and historical patterns to provide actionable insights.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-900 mb-2">Risk Management</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Every signal includes calculated stop-loss levels and risk-reward ratios to help you 
            protect your capital and trade responsibly.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl w-fit mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-900 mb-2">Instant Alerts</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Receive real-time notifications when new trading opportunities are identified, 
            so you never miss a potential profitable trade.
          </p>
        </Card>
      </section>

      {/* Trading Signals Section */}
      <section>
        <TradingSignals />
      </section>

      {/* Disclaimer */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-yellow-900 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-yellow-800 leading-relaxed">
              Trading cryptocurrencies and futures involves substantial risk of loss. The signals and analysis 
              provided by OracleFutures are for educational and informational purposes only and should not be 
              considered as financial advice. Always conduct your own research and consider consulting with a 
              financial advisor before making any trading decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
