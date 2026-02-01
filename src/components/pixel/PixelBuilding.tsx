interface PixelBuildingProps {
  variant: 'office' | 'campus' | 'studio' | 'house';
  position?: 'left' | 'center' | 'right';
  className?: string;
}

const PixelBuilding = ({ variant, position = 'center', className = '' }: PixelBuildingProps) => {
  const positionClasses = {
    left: 'left-[10%]',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-[10%]',
  };

  return (
    <div className={`absolute bottom-[100px] ${positionClasses[position]} ${className}`}>
      {variant === 'office' && (
        <svg width="120" height="160" viewBox="0 0 120 160" className="pixel-canvas">
          {/* Main building */}
          <rect x="20" y="40" width="80" height="120" className="fill-pixel-building" />
          <rect x="20" y="40" width="80" height="8" className="fill-pixel-building-dark" />
          
          {/* Windows grid */}
          {Array.from({ length: 4 }, (_, row) =>
            Array.from({ length: 3 }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={32 + col * 24}
                y={56 + row * 28}
                width="16"
                height="20"
                className="fill-pixel-sky-bottom opacity-70"
              />
            ))
          )}
          
          {/* Door */}
          <rect x="48" y="136" width="24" height="24" className="fill-pixel-building-dark" />
          <rect x="52" y="140" width="16" height="20" className="fill-pixel-sky-top opacity-50" />
        </svg>
      )}
      
      {variant === 'campus' && (
        <svg width="180" height="140" viewBox="0 0 180 140" className="pixel-canvas">
          {/* Main building */}
          <rect x="20" y="50" width="140" height="90" className="fill-pixel-building" />
          <rect x="20" y="50" width="140" height="8" className="fill-pixel-building-dark" />
          
          {/* Tower */}
          <rect x="75" y="20" width="30" height="30" className="fill-pixel-building" />
          <rect x="75" y="20" width="30" height="6" className="fill-pixel-building-dark" />
          <rect x="85" y="8" width="10" height="12" className="fill-pixel-building-dark" />
          
          {/* Windows */}
          {Array.from({ length: 2 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={30 + col * 26}
                y={66 + row * 30}
                width="18"
                height="22"
                className="fill-pixel-sky-bottom opacity-60"
              />
            ))
          )}
          
          {/* Entrance */}
          <rect x="70" y="110" width="40" height="30" className="fill-pixel-building-dark" />
          <rect x="78" y="115" width="24" height="25" className="fill-pixel-sky-top opacity-40" />
          
          {/* Columns */}
          <rect x="60" y="110" width="8" height="30" className="fill-pixel-cloud" />
          <rect x="112" y="110" width="8" height="30" className="fill-pixel-cloud" />
        </svg>
      )}
      
      {variant === 'studio' && (
        <svg width="100" height="120" viewBox="0 0 100 120" className="pixel-canvas">
          {/* Main structure */}
          <rect x="10" y="40" width="80" height="80" className="fill-pixel-building" />
          
          {/* Slanted roof */}
          <polygon points="10,40 50,10 90,40" className="fill-pixel-building-dark" />
          
          {/* Large window */}
          <rect x="20" y="50" width="60" height="40" className="fill-pixel-sky-bottom opacity-80" />
          <rect x="48" y="50" width="4" height="40" className="fill-pixel-building-dark" />
          <rect x="20" y="68" width="60" height="4" className="fill-pixel-building-dark" />
          
          {/* Door */}
          <rect x="35" y="100" width="30" height="20" className="fill-pixel-building-dark" />
        </svg>
      )}
      
      {variant === 'house' && (
        <svg width="80" height="100" viewBox="0 0 80 100" className="pixel-canvas">
          {/* Main structure */}
          <rect x="10" y="40" width="60" height="60" className="fill-pixel-building" />
          
          {/* Roof */}
          <polygon points="5,40 40,10 75,40" className="fill-pixel-tree-dark" />
          
          {/* Window */}
          <rect x="20" y="50" width="16" height="20" className="fill-pixel-sky-bottom opacity-70" />
          <rect x="44" y="50" width="16" height="20" className="fill-pixel-sky-bottom opacity-70" />
          
          {/* Door */}
          <rect x="30" y="75" width="20" height="25" className="fill-pixel-building-dark" />
          
          {/* Chimney */}
          <rect x="55" y="18" width="10" height="22" className="fill-pixel-building-dark" />
        </svg>
      )}
    </div>
  );
};

export default PixelBuilding;
