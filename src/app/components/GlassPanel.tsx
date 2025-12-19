import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glowColor?: "orange" | "cyan" | "green" | "red" | "purple";
  hover?: boolean;
  clipCorner?: "none" | "tl" | "tr" | "both" | "all";
  animate?: boolean;
}

export function GlassPanel({ 
  children, 
  className = "", 
  glowColor = "orange",
  hover = true,
  clipCorner = "both",
  animate = false
}: GlassPanelProps) {
  const glowColors = {
    orange: "hover:shadow-[0_0_30px_rgba(255,102,0,0.3),inset_0_0_30px_rgba(255,102,0,0.05)]",
    cyan: "hover:shadow-[0_0_30px_rgba(0,255,255,0.3),inset_0_0_30px_rgba(0,255,255,0.05)]",
    green: "hover:shadow-[0_0_30px_rgba(0,255,136,0.3),inset_0_0_30px_rgba(0,255,136,0.05)]",
    red: "hover:shadow-[0_0_30px_rgba(255,51,102,0.3),inset_0_0_30px_rgba(255,51,102,0.05)]",
    purple: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3),inset_0_0_30px_rgba(168,85,247,0.05)]"
  };

  const borderColors = {
    orange: "border-orange-500/20 hover:border-orange-500/50",
    cyan: "border-cyan-500/20 hover:border-cyan-500/50",
    green: "border-green-500/20 hover:border-green-500/50",
    red: "border-red-500/20 hover:border-red-500/50",
    purple: "border-purple-500/20 hover:border-purple-500/50"
  };

  const cornerClips = {
    none: "",
    tl: "clip-corner-tl",
    tr: "clip-corner-tr",
    both: "clip-corner-both",
    all: "clip-corner-all"
  };

  const Component = animate ? motion.div : "div";
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <Component
      className={`
        relative overflow-hidden
        bg-[#0a0a14]/40 backdrop-blur-xl
        border ${borderColors[glowColor]}
        ${hover ? glowColors[glowColor] : ""}
        ${cornerClips[clipCorner]}
        transition-all duration-500
        ${className}
      `}
      {...animationProps}
    >
      {/* Corner Decorations */}
      {clipCorner !== "none" && (
        <>
          {/* Top Left Corner */}
          {(clipCorner === "tl" || clipCorner === "both" || clipCorner === "all") && (
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
          )}
          
          {/* Top Right Corner */}
          {(clipCorner === "tr" || clipCorner === "both" || clipCorner === "all") && (
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
          )}
          
          {/* Bottom Corners for 'all' */}
          {clipCorner === "all" && (
            <>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
            </>
          )}
        </>
      )}

      {/* Inner Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}
