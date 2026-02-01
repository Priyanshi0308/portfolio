import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PixelButterflyProps {
  scrollProgress: number;
}

const PixelButterfly = ({ scrollProgress }: PixelButterflyProps) => {
  const [position, setPosition] = useState({ x: 100, y: 200 });
  const [rotation, setRotation] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const lastScrollRef = useRef(0);
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Create a gentle path through the scenes, ending at the girl's head (bottom right)
    const pathPoints = [
      { x: 0.15, y: 0.3 },   // Dawn
      { x: 0.8, y: 0.25 },   // Learning
      { x: 0.2, y: 0.4 },    // Building
      { x: 0.75, y: 0.35 },  // Experience
      { x: 0.25, y: 0.45 },  // Interests
      { x: 0.7, y: 0.3 },    // Reflection
      { x: 0.92, y: 0.72 },  // Horizon - lands on girl's head (bottom right corner)
    ];

    // Calculate which segment we're in
    const segmentCount = pathPoints.length - 1;
    const segmentProgress = scrollProgress * segmentCount;
    const currentSegment = Math.min(Math.floor(segmentProgress), segmentCount - 1);
    const segmentLocalProgress = segmentProgress - currentSegment;

    // Interpolate between points
    const startPoint = pathPoints[currentSegment];
    const endPoint = pathPoints[Math.min(currentSegment + 1, segmentCount)];

    const newX = startPoint.x + (endPoint.x - startPoint.x) * segmentLocalProgress;
    const newY = startPoint.y + (endPoint.y - startPoint.y) * segmentLocalProgress;

    // Add subtle floating motion
    const floatOffset = Math.sin(scrollProgress * Math.PI * 4) * 0.02;

    setPosition({
      x: newX * viewportWidth,
      y: (newY + floatOffset) * viewportHeight,
    });

    // Calculate rotation based on movement direction
    const deltaScroll = scrollProgress - lastScrollRef.current;
    if (Math.abs(deltaScroll) > 0.001) {
      const targetRotation = deltaScroll > 0 ? 5 : -5;
      setRotation(targetRotation);
    } else {
      setRotation(0);
    }
    lastScrollRef.current = scrollProgress;
  }, [scrollProgress]);

  const handleClick = () => {
    setIsClicked(true);
    
    // Create sparkles
    const colors = [
      'hsl(var(--butterfly-primary))',
      'hsl(var(--butterfly-secondary))',
      'hsl(var(--butterfly-accent))',
      'hsl(var(--primary))',
    ];
    
    const newSparkles = Array.from({ length: 8 }, () => ({
      id: sparkleIdRef.current++,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setSparkles(newSparkles);
    
    // Reset after animation
    setTimeout(() => {
      setIsClicked(false);
      setSparkles([]);
    }, 600);
  };

  return (
    <div
      className="butterfly cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'auto',
      }}
      onClick={handleClick}
    >
      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: 24, y: 20 }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              x: 24 + sparkle.x, 
              y: 20 + sparkle.y 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute pointer-events-none"
            style={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%',
              backgroundColor: sparkle.color,
              boxShadow: `0 0 10px ${sparkle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Pixel hearts on click */}
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: -30, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 text-lg"
            >
              ✨
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: 30, scale: 1 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-1/2 top-1/2 text-sm"
            >
              💫
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: -30, scale: 1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute left-1/2 top-1/2 text-sm"
            >
              🦋
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <motion.svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        className="pixel-canvas"
        style={{ imageRendering: 'pixelated' }}
        animate={isClicked ? { 
          scale: [1, 1.3, 1],
          rotate: [0, 15, -15, 0],
        } : {}}
        transition={{ duration: 0.4 }}
      >
        {/* Left Wing */}
        <g className="origin-center" style={{ animation: 'wing-flutter 0.3s ease-in-out infinite' }}>
          {/* Outer wing */}
          <rect x="4" y="8" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="8" y="4" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="8" y="8" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="8" y="12" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="12" y="8" width="4" height="4" className="fill-butterfly-accent" />
          <rect x="12" y="12" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="12" y="16" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="16" y="12" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="16" y="16" width="4" height="4" className="fill-butterfly-secondary" />
          {/* Lower wing */}
          <rect x="8" y="20" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="12" y="24" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="16" y="20" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="16" y="24" width="4" height="4" className="fill-butterfly-accent" />
        </g>

        {/* Right Wing */}
        <g className="origin-center" style={{ animation: 'wing-flutter 0.3s ease-in-out infinite', animationDelay: '0.05s' }}>
          {/* Outer wing */}
          <rect x="40" y="8" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="36" y="4" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="36" y="8" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="36" y="12" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="32" y="8" width="4" height="4" className="fill-butterfly-accent" />
          <rect x="32" y="12" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="32" y="16" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="28" y="12" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="28" y="16" width="4" height="4" className="fill-butterfly-secondary" />
          {/* Lower wing */}
          <rect x="36" y="20" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="32" y="24" width="4" height="4" className="fill-butterfly-secondary" />
          <rect x="28" y="20" width="4" height="4" className="fill-butterfly-primary" />
          <rect x="28" y="24" width="4" height="4" className="fill-butterfly-accent" />
        </g>

        {/* Body */}
        <rect x="22" y="8" width="4" height="4" className="fill-foreground" />
        <rect x="22" y="12" width="4" height="4" className="fill-foreground" />
        <rect x="22" y="16" width="4" height="4" className="fill-foreground" />
        <rect x="22" y="20" width="4" height="4" className="fill-foreground" />
        <rect x="22" y="24" width="4" height="4" className="fill-foreground" />
        
        {/* Antennae */}
        <rect x="20" y="4" width="2" height="4" className="fill-foreground opacity-70" />
        <rect x="26" y="4" width="2" height="4" className="fill-foreground opacity-70" />
        <rect x="18" y="2" width="2" height="2" className="fill-butterfly-accent" />
        <rect x="28" y="2" width="2" height="2" className="fill-butterfly-accent" />
      </motion.svg>
    </div>
  );
};

export default PixelButterfly;
