interface PixelSunProps {
  size?: 'small' | 'medium' | 'large';
  position?: { x: number; y: number };
}

const PixelSun = ({ size = 'medium', position = { x: 80, y: 15 } }: PixelSunProps) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };
  
  const pixelSize = sizeMap[size];

  return (
    <div 
      className="absolute"
      style={{ 
        right: `${100 - position.x}%`, 
        top: `${position.y}%`,
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute rounded-full blur-xl opacity-60"
        style={{
          width: pixelSize * 2.5,
          height: pixelSize * 2.5,
          background: `radial-gradient(circle, hsl(var(--sun-glow)), transparent 70%)`,
          transform: 'translate(-25%, -25%)',
        }}
      />
      
      {/* Pixel sun */}
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 16 16"
        className="pixel-canvas relative"
      >
        {/* Core */}
        <rect x="6" y="2" width="4" height="4" className="fill-pixel-sun" />
        <rect x="4" y="4" width="8" height="8" className="fill-pixel-sun" />
        <rect x="2" y="6" width="4" height="4" className="fill-pixel-sun" />
        <rect x="10" y="6" width="4" height="4" className="fill-pixel-sun" />
        <rect x="6" y="10" width="4" height="4" className="fill-pixel-sun" />
        
        {/* Rays */}
        <rect x="7" y="0" width="2" height="2" className="fill-pixel-sun opacity-70" />
        <rect x="7" y="14" width="2" height="2" className="fill-pixel-sun opacity-70" />
        <rect x="0" y="7" width="2" height="2" className="fill-pixel-sun opacity-70" />
        <rect x="14" y="7" width="2" height="2" className="fill-pixel-sun opacity-70" />
        <rect x="2" y="2" width="2" height="2" className="fill-pixel-sun opacity-50" />
        <rect x="12" y="2" width="2" height="2" className="fill-pixel-sun opacity-50" />
        <rect x="2" y="12" width="2" height="2" className="fill-pixel-sun opacity-50" />
        <rect x="12" y="12" width="2" height="2" className="fill-pixel-sun opacity-50" />
      </svg>
    </div>
  );
};

export default PixelSun;
