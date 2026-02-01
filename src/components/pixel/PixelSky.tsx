interface PixelSkyProps {
  variant: 'dawn' | 'day' | 'evening' | 'night';
  showStars?: boolean;
}

const PixelSky = ({ variant, showStars = false }: PixelSkyProps) => {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 60,
    size: Math.random() > 0.7 ? 3 : 2,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient sky background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, hsl(var(--sky-top)), hsl(var(--sky-bottom)))`,
        }}
      />
      
      {/* Pixel clouds */}
      <svg 
        className="absolute w-full h-full pixel-canvas opacity-60"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Cloud 1 */}
        <g transform="translate(50, 40)">
          <rect x="8" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="16" y="0" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="16" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="24" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="24" y="0" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="32" y="4" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="0" y="12" width="8" height="8" className="fill-pixel-cloud" />
        </g>
        
        {/* Cloud 2 */}
        <g transform="translate(280, 60)">
          <rect x="0" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="8" y="4" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="16" y="0" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="16" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="24" y="4" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="32" y="8" width="8" height="8" className="fill-pixel-cloud" />
        </g>
        
        {/* Cloud 3 */}
        <g transform="translate(150, 80)">
          <rect x="4" y="8" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="12" y="4" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="20" y="0" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="28" y="4" width="8" height="8" className="fill-pixel-cloud" />
        </g>
      </svg>
      
      {/* Stars (visible in dark mode) */}
      {showStars && (
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PixelSky;
