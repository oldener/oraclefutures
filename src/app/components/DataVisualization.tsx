import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function DataVisualization() {
  const [dataPoints, setDataPoints] = useState<Array<{ id: number; value: number; delay: number }>>([]);

  useEffect(() => {
    const points = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      value: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setDataPoints(points);

    // Update data points periodically
    const interval = setInterval(() => {
      setDataPoints(prev => prev.map(point => ({
        ...point,
        value: Math.random() * 100
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <motion.div
        className="absolute w-16 h-16 rounded-full border-2 border-orange-500/50 bg-orange-500/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-orange-500 blur-xl opacity-30" />
      </motion.div>

      {/* Orbiting Data Points */}
      {dataPoints.map((point, index) => {
        const angle = (index / dataPoints.length) * Math.PI * 2;
        const radius = 80 + (point.value / 100) * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={point.id}
            className="absolute"
            style={{
              width: 8,
              height: 8,
            }}
            animate={{
              x: [x, x * 1.1, x],
              y: [y, y * 1.1, y],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Data Point */}
            <div className={`
              w-full h-full rounded-full
              ${point.value > 66 ? "bg-green-400" : point.value > 33 ? "bg-cyan-400" : "bg-orange-400"}
            `}>
              <div className={`
                absolute inset-0 rounded-full blur-md opacity-50
                ${point.value > 66 ? "bg-green-400" : point.value > 33 ? "bg-cyan-400" : "bg-orange-400"}
              `} />
            </div>

            {/* Connection Line to Center */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: Math.abs(x) * 2 + 100,
                height: Math.abs(y) * 2 + 100,
              }}
            >
              <motion.line
                x1="50%"
                y1="50%"
                x2={`${50 - (x / (Math.abs(x) * 2 + 100)) * 100}%`}
                y2={`${50 - (y / (Math.abs(y) * 2 + 100)) * 100}%`}
                stroke={point.value > 66 ? "#4ade80" : point.value > 33 ? "#22d3ee" : "#fb923c"}
                strokeWidth="1"
                strokeOpacity="0.2"
                animate={{
                  strokeOpacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  delay: point.delay,
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>
        );
      })}

      {/* Rotating Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-orange-500/10 rounded-full"
          style={{
            width: ring * 80,
            height: ring * 80,
          }}
          animate={{
            rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 15 + ring * 5,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}

      {/* Scan Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, rgba(255, 102, 0, 0.1) 60deg, transparent 120deg)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
