import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AuroraBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000308]">
      {/* Aurora Blobs */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
        <div className="aurora-1 absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500/20 via-cyan-500/20 to-purple-500/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px]">
        <div className="aurora-2 absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-cyan-500/20 via-orange-500/20 to-pink-500/20 blur-[100px] rounded-full" />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px]">
        <div className="aurora-3 absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-purple-500/20 via-orange-500/20 to-cyan-500/20 blur-[110px] rounded-full" />
      </div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />

      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500/50 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: ["-100%", "100vh"],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
    </div>
  );
}
