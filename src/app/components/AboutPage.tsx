import { Brain, Target, TrendingUp, Zap, Shield, Users, ChartBar, Code } from "lucide-react";
import { Card } from "./ui/card";

export function AboutPage() {
  return (
    <div className="space-y-12">
      {/* About Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl mb-6">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">About OracleFutures</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Empowering traders with cutting-edge AI technology to make informed decisions in the 
          volatile world of cryptocurrency futures trading.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
        <h2 className="text-3xl text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          OracleFutures was created with a singular mission: to democratize access to sophisticated 
          trading analysis tools that were once available only to institutional investors and hedge funds.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By leveraging advanced machine learning algorithms and real-time data processing, we provide 
          retail traders with the insights they need to navigate the complex cryptocurrency futures market 
          with confidence and clarity.
        </p>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl text-gray-900 mb-6">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <ChartBar className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-gray-900">Market Analysis</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our AI continuously monitors cryptocurrency markets, analyzing price movements, volume patterns, 
              technical indicators, and market sentiment to identify potential trading opportunities.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-gray-900">Signal Generation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We generate precise trading signals with entry points, profit targets, and stop-loss levels, 
              each accompanied by a confidence score based on our AI's analysis.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-gray-900">Risk Management</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every signal includes calculated risk-reward ratios and position sizing recommendations 
              to help you manage your portfolio effectively and protect your capital.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-l-orange-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-gray-900">Real-Time Updates</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Stay informed with instant notifications and live updates as market conditions change, 
              ensuring you're always equipped with the latest information.
            </p>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl">Our Technology</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-2 text-blue-400">Machine Learning</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced neural networks trained on years of historical market data to recognize patterns 
              and predict potential price movements.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-purple-400">Data Processing</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Real-time data pipelines processing millions of data points from multiple exchanges 
              to ensure comprehensive market coverage.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-green-400">Sentiment Analysis</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Natural language processing algorithms analyze social media, news, and community sentiment 
              to gauge market psychology.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section>
        <h2 className="text-3xl text-gray-900 mb-6">Our Goals</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              1
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Make professional-grade trading tools accessible to everyone, regardless of experience level 
                or available capital.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              2
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Educate users about market dynamics, risk management, and responsible trading practices 
                to build a community of informed traders.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              3
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously improve our AI models and expand our features to stay ahead of market trends 
                and user needs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              4
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintain transparency in our methodologies and performance metrics, building trust through 
                honest communication and verifiable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl text-gray-900 mb-3">Built by Traders, for Traders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our team consists of experienced traders, data scientists, and software engineers who understand 
            the challenges of navigating cryptocurrency markets. We've been in your shoes, and we're committed 
            to building the tools we wish we had when we started.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
          Join thousands of traders who are already using OracleFutures to enhance their trading strategies 
          and make more informed decisions in the crypto markets.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Live Signals
          </button>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors border border-blue-500">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}