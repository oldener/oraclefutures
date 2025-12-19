import { Brain, Target, Shield, Users, Code, Zap, ChartBar, Activity } from "lucide-react";
import { motion } from "motion/react";
import { GlassPanel } from "./GlassPanel";

export function FuturisticAboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50" />
              <div className="relative clip-hexagon bg-gradient-to-br from-orange-600 to-orange-500 p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            <span className="glow-orange">About</span>{" "}
            <span className="text-cyan-400 glow-cyan">Oracle Futures</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <p className="text-cyan-400 text-sm uppercase tracking-widest mono-numeric">
              Mission Control
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering traders with cutting-edge AI technology to navigate the volatile 
            cryptocurrency futures markets with precision and confidence.
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section>
        <GlassPanel glowColor="cyan" clipCorner="all" className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl text-white uppercase tracking-wider glow-cyan">
                Our Mission
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Oracle Futures was engineered with a singular objective: to democratize access to 
                institutional-grade trading intelligence that was once exclusive to hedge funds and 
                professional trading firms.
              </p>
              <p>
                By leveraging cutting-edge machine learning algorithms, real-time data processing, 
                and advanced sentiment analysis, we provide retail traders with the analytical 
                firepower needed to compete in the fast-paced cryptocurrency futures market.
              </p>
            </div>

            {/* Mission Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "2019", label: "Established" },
                { value: "50K+", label: "Active Users" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-900/30 border border-cyan-500/20 clip-corner-tl text-center"
                >
                  <div className="text-2xl text-cyan-400 glow-cyan mono-numeric mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </GlassPanel>
      </section>

      {/* What We Do */}
      <section>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white uppercase tracking-[0.2em] glow-orange flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6" />
            Core Operations
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              System Capabilities
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: ChartBar,
              title: "Market Analysis",
              description: "Continuous monitoring of cryptocurrency markets with analysis of price movements, volume patterns, technical indicators, and market sentiment.",
              color: "cyan",
              borderColor: "border-l-cyan-500"
            },
            {
              icon: Target,
              title: "Signal Generation",
              description: "Precision trading signals with entry points, profit targets, and stop-loss levels, each with AI confidence scoring.",
              color: "green",
              borderColor: "border-l-green-500"
            },
            {
              icon: Shield,
              title: "Risk Management",
              description: "Automated risk-reward calculations and position sizing recommendations to protect capital and optimize portfolio management.",
              color: "orange",
              borderColor: "border-l-orange-500"
            },
            {
              icon: Zap,
              title: "Real-Time Updates",
              description: "Instant notifications and live updates as market conditions change, ensuring you're always equipped with current intelligence.",
              color: "purple",
              borderColor: "border-l-purple-500"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPanel glowColor={item.color as any} clipCorner="both" className={`p-6 border-l-4 ${item.borderColor}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`
                      p-2 clip-corner-tl
                      ${item.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30" :
                        item.color === "green" ? "bg-green-500/20 border border-green-500/30" :
                        item.color === "orange" ? "bg-orange-500/20 border border-orange-500/30" :
                        "bg-purple-500/20 border border-purple-500/30"}
                    `}>
                      <Icon className={`
                        w-5 h-5
                        ${item.color === "cyan" ? "text-cyan-400" :
                          item.color === "green" ? "text-green-400" :
                          item.color === "orange" ? "text-orange-400" :
                          "text-purple-400"}
                      `} />
                    </div>
                    <h3 className={`
                      uppercase tracking-wider
                      ${item.color === "cyan" ? "text-cyan-400" :
                        item.color === "green" ? "text-green-400" :
                        item.color === "orange" ? "text-orange-400" :
                        "text-purple-400"}
                    `}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <GlassPanel glowColor="purple" clipCorner="all" className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white uppercase tracking-wider">
                Technology Architecture
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Machine Learning",
                  description: "Advanced neural networks trained on extensive historical market data to recognize patterns and predict price movements.",
                  color: "cyan"
                },
                {
                  title: "Data Processing",
                  description: "Real-time data pipelines processing millions of data points from multiple exchanges for comprehensive coverage.",
                  color: "green"
                },
                {
                  title: "Sentiment Analysis",
                  description: "Natural language processing algorithms analyzing social media, news, and community sentiment for market psychology.",
                  color: "orange"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`
                    inline-block px-3 py-1 clip-corner-tl
                    ${tech.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400" :
                      tech.color === "green" ? "bg-green-500/20 border border-green-500/30 text-green-400" :
                      "bg-orange-500/20 border border-orange-500/30 text-orange-400"}
                  `}>
                    <h3 className="uppercase tracking-wider text-sm mono-numeric">{tech.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </GlassPanel>
      </section>

      {/* Objectives */}
      <section>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white uppercase tracking-[0.2em] glow-orange flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6" />
            Strategic Objectives
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              Our Roadmap
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              number: "01",
              title: "Accessibility",
              description: "Make professional-grade trading tools accessible to everyone, regardless of experience level or capital.",
              color: "cyan"
            },
            {
              number: "02",
              title: "Education",
              description: "Educate users about market dynamics, risk management, and responsible trading practices.",
              color: "green"
            },
            {
              number: "03",
              title: "Innovation",
              description: "Continuously evolve AI models and expand features to stay ahead of market trends.",
              color: "orange"
            },
            {
              number: "04",
              title: "Transparency",
              description: "Maintain transparency in methodologies and performance metrics, building trust through honesty.",
              color: "purple"
            }
          ].map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassPanel glowColor={objective.color as any} clipCorner="tl" className="p-6">
                <div className="flex gap-6 items-start">
                  <div className={`
                    w-12 h-12 flex items-center justify-center shrink-0 clip-hexagon mono-numeric
                    ${objective.color === "cyan" ? "bg-gradient-to-br from-cyan-600 to-cyan-500 text-white" :
                      objective.color === "green" ? "bg-gradient-to-br from-green-600 to-green-500 text-white" :
                      objective.color === "orange" ? "bg-gradient-to-br from-orange-600 to-orange-500 text-white" :
                      "bg-gradient-to-br from-purple-600 to-purple-500 text-white"}
                  `}>
                    {objective.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`
                      uppercase tracking-wider mb-2
                      ${objective.color === "cyan" ? "text-cyan-400" :
                        objective.color === "green" ? "text-green-400" :
                        objective.color === "orange" ? "text-orange-400" :
                        "text-purple-400"}
                    `}>
                      {objective.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <GlassPanel glowColor="orange" clipCorner="all" className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 clip-corner-tl mb-6">
              <Users className="w-5 h-5 text-orange-400" />
            </div>
            
            <h2 className="text-2xl md:text-3xl text-white uppercase tracking-wider glow-orange mb-4">
              Built by Traders, for Traders
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our team consists of experienced traders, data scientists, and software engineers 
              who understand the challenges of navigating cryptocurrency markets. We've been in 
              your position, and we're committed to building the tools we wished existed when we started.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {["Traders", "Data Scientists", "Engineers", "Analysts"].map((role, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-900/30 border border-orange-500/20 clip-corner-tl"
                >
                  <div className="text-orange-400 uppercase tracking-wider text-sm mono-numeric">
                    {role}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </GlassPanel>
      </section>

      {/* CTA */}
      <section>
        <GlassPanel glowColor="green" clipCorner="all" className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-white uppercase tracking-wider mb-4">
              <span className="glow-green">Ready to</span>{" "}
              <span className="text-cyan-400 glow-cyan">Begin?</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of traders using Oracle Futures to enhance their strategies 
              and make informed decisions in the crypto markets.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white uppercase tracking-wider clip-corner-both border border-green-400/50 transition-all duration-300 mono-numeric">
                View Live Signals
              </button>
              <button className="px-6 py-3 bg-gray-900/50 hover:bg-gray-800/50 text-cyan-400 uppercase tracking-wider clip-corner-both border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 mono-numeric">
                Learn More
              </button>
            </div>
          </motion.div>
        </GlassPanel>
      </section>
    </div>
  );
}
