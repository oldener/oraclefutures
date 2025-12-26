import { Brain, Target, Zap, Shield, Activity, TrendingUp, Database, Cpu, Network } from "lucide-react";
import { motion } from "motion/react";
import { GlassPanel } from "./GlassPanel";
import { HUDAnalysisForm } from "./HUDAnalysisForm";
import { HUDTradingSignals } from "./HUDTradingSignals";
import { DataVisualization } from "./DataVisualization";
import { LiveStats } from "./LiveStats";
import { useLanguage } from "../i18n/LanguageContext";

export function FuturisticHomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section - Command Center Style */}
      <section className="relative -mt-4">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Hero Panel */}
          <GlassPanel glowColor="orange" clipCorner="all" className="p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 clip-corner-tl mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-sm uppercase tracking-widest mono-numeric">
                  {t.hero.badge}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="glow-orange">{t.hero.title1}</span>
                <br />
                <span className="text-cyan-400 glow-cyan">{t.hero.title2}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { value: "95%", label: t.hero.stats.accuracy, color: "green" },
                  { value: "24/7", label: t.hero.stats.monitoring, color: "cyan" },
                  { value: "< 1s", label: t.hero.stats.speed, color: "orange" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/30 border border-gray-700/50 clip-corner-tl"
                  >
                    <div className={`
                      text-2xl md:text-3xl mono-numeric mb-1
                      ${stat.color === "green" ? "text-green-400 glow-green" :
                        stat.color === "cyan" ? "text-cyan-400 glow-cyan" :
                        "text-orange-400 glow-orange"}
                    `}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-32 h-32 opacity-10">
              <motion.div
                className="w-full h-full border-2 border-orange-500 clip-corner-all"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </GlassPanel>
        </motion.div>
      </section>

      {/* Live Market Stats */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          <span className="text-gray-500 text-xs uppercase tracking-widest mono-numeric">{t?.liveStats?.marketFeed || ''}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </div>
        <LiveStats />
      </motion.section>

      {/* Analysis Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HUDAnalysisForm />
      </motion.section>

      {/* Core Features Section */}
      <section>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white uppercase tracking-[0.2em] glow-orange flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6" />
            {t.features.title}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              {t.features.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: t.features.neural.title,
              description: t.features.neural.description,
              color: "cyan",
              stats: t.features.neural.stats
            },
            {
              icon: Shield,
              title: t.features.risk.title,
              description: t.features.risk.description,
              color: "green",
              stats: t.features.risk.stats
            },
            {
              icon: Zap,
              title: t.features.realtime.title,
              description: t.features.realtime.description,
              color: "orange",
              stats: t.features.realtime.stats
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPanel glowColor={feature.color as any} clipCorner="all" className="p-6 h-full">
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className={`
                      absolute inset-0 blur-xl opacity-50
                      ${feature.color === "cyan" ? "bg-cyan-500" :
                        feature.color === "green" ? "bg-green-500" :
                        "bg-orange-500"}
                    `} />
                    <div className={`
                      relative clip-hexagon p-3 w-fit
                      ${feature.color === "cyan" ? "bg-gradient-to-br from-cyan-600 to-cyan-500" :
                        feature.color === "green" ? "bg-gradient-to-br from-green-600 to-green-500" :
                        "bg-gradient-to-br from-orange-600 to-orange-500"}
                    `}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`
                    uppercase tracking-wider mb-3
                    ${feature.color === "cyan" ? "text-cyan-400 glow-cyan" :
                      feature.color === "green" ? "text-green-400 glow-green" :
                      "text-orange-400 glow-orange"}
                  `}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-700/50 clip-corner-tl">
                    <Activity className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-400 text-xs mono-numeric">{feature.stats}</span>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Technology Visualization Section */}
      <section>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white uppercase tracking-[0.2em] glow-orange flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6" />
            {t.technology.title}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-cyan-400 text-xs uppercase tracking-widest mono-numeric">
              {t.technology.subtitle}
            </p>
          </div>
        </motion.div>

        <GlassPanel glowColor="purple" clipCorner="all" className="p-8">
          {/* Interactive Data Visualization */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DataVisualization />
            </motion.div>
            <div className="text-center mt-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mono-numeric">
                {t.technology.visualization}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t.technology.ml.title,
                description: t.technology.ml.description,
                icon: Brain,
                metrics: t.technology.ml.metrics
              },
              {
                title: t.technology.data.title,
                description: t.technology.data.description,
                icon: Database,
                metrics: t.technology.data.metrics
              },
              {
                title: t.technology.network.title,
                description: t.technology.network.description,
                icon: Network,
                metrics: t.technology.network.metrics
              }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 border border-purple-500/30 clip-corner-tl">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-purple-400 uppercase tracking-wider">{tech.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                  
                  <div className="space-y-2">
                    {tech.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full" />
                        <span className="text-gray-500 text-xs mono-numeric">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </GlassPanel>
      </section>

      {/* Trading Signals Section */}
      <section>
        <HUDTradingSignals />
      </section>

      {/* Performance Metrics */}
      <section>
        <GlassPanel glowColor="green" clipCorner="all" className="p-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl text-white uppercase tracking-wider glow-green mb-3">
                {t.performance.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {t.performance.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: t.performance.winRate, value: "73.2%" },
                  { label: t.performance.avgRoi, value: "+127%" },
                  { label: t.performance.signalsPerDay, value: "48" },
                  { label: t.performance.markets, value: "200+" }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/30 border border-green-500/20 clip-corner-tl"
                  >
                    <div className="text-2xl text-green-400 glow-green mono-numeric mb-1">
                      {metric.value}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </GlassPanel>
      </section>

      {/* Disclaimer */}
      <section>
        <GlassPanel glowColor="red" clipCorner="all" className="p-6">
          <div className="flex gap-4">
            <Shield className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-yellow-500 uppercase tracking-wider mb-2">{t.warning.title}</h4>
              <p className="text-yellow-400/80 text-sm leading-relaxed mono-numeric">
                {t.warning.text}
              </p>
            </div>
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}