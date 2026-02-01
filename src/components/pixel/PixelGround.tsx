interface PixelGroundProps {
  variant?: 'grass' | 'path' | 'city' | 'campus';
  className?: string;
}

const PixelGround = ({ variant = 'grass', className = '' }: PixelGroundProps) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`}>
      <svg
        className="w-full pixel-canvas"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
        style={{ height: '120px' }}
      >
        {/* Base ground layer */}
        <rect x="0" y="20" width="400" height="60" className="fill-pixel-ground" />
        
        {/* Top grass/terrain texture */}
        {variant === 'grass' && (
          <>
            {Array.from({ length: 50 }, (_, i) => (
              <g key={i}>
                <rect 
                  x={i * 8} 
                  y={16 + Math.sin(i * 0.5) * 4} 
                  width="8" 
                  height="8" 
                  className="fill-pixel-ground" 
                />
                {i % 3 === 0 && (
                  <rect 
                    x={i * 8 + 2} 
                    y={12 + Math.sin(i * 0.5) * 4} 
                    width="4" 
                    height="6" 
                    className="fill-pixel-tree" 
                  />
                )}
              </g>
            ))}
          </>
        )}
        
        {variant === 'path' && (
          <>
            <rect x="0" y="16" width="400" height="8" className="fill-pixel-ground" />
            {/* Path */}
            <rect x="160" y="24" width="80" height="56" className="fill-pixel-path" />
            <rect x="150" y="30" width="100" height="50" className="fill-pixel-path opacity-80" />
            {/* Path texture */}
            {Array.from({ length: 8 }, (_, i) => (
              <rect 
                key={i}
                x={160 + (i % 4) * 20} 
                y={30 + Math.floor(i / 4) * 25} 
                width="12" 
                height="4" 
                className="fill-pixel-ground-dark opacity-30" 
              />
            ))}
          </>
        )}
        
        {variant === 'city' && (
          <>
            <rect x="0" y="20" width="400" height="60" className="fill-pixel-building-dark" />
            {/* Road markings */}
            {Array.from({ length: 10 }, (_, i) => (
              <rect 
                key={i}
                x={i * 45 + 10} 
                y="45" 
                width="20" 
                height="4" 
                className="fill-pixel-cloud opacity-60" 
              />
            ))}
          </>
        )}
        
        {variant === 'campus' && (
          <>
            <rect x="0" y="16" width="400" height="8" className="fill-pixel-ground" />
            {/* Brick path */}
            <rect x="140" y="24" width="120" height="56" className="fill-pixel-path" />
            {Array.from({ length: 15 }, (_, i) => (
              <rect 
                key={i}
                x={145 + (i % 5) * 22} 
                y={28 + Math.floor(i / 5) * 18} 
                width="18" 
                height="14" 
                className="fill-pixel-building opacity-40" 
                rx="1"
              />
            ))}
          </>
        )}
        
        {/* Dark shadow at very bottom */}
        <rect x="0" y="72" width="400" height="8" className="fill-pixel-ground-dark" />
      </svg>
    </div>
  );
};

export default PixelGround;
