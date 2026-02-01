interface PixelTreeProps {
  variant?: 'pine' | 'round' | 'small';
  className?: string;
}

const PixelTree = ({ variant = 'round', className = '' }: PixelTreeProps) => {
  return (
    <div className={`${className}`}>
      {variant === 'pine' && (
        <svg width="40" height="80" viewBox="0 0 40 80" className="pixel-canvas">
          {/* Tree layers */}
          <rect x="16" y="60" width="8" height="20" className="fill-pixel-tree-dark" />
          <polygon points="4,60 20,30 36,60" className="fill-pixel-tree" />
          <polygon points="8,45 20,20 32,45" className="fill-pixel-tree" />
          <polygon points="12,30 20,10 28,30" className="fill-pixel-tree" />
          {/* Highlight */}
          <polygon points="16,45 20,30 24,45" className="fill-pixel-tree opacity-70" />
        </svg>
      )}
      
      {variant === 'round' && (
        <svg width="48" height="72" viewBox="0 0 48 72" className="pixel-canvas">
          {/* Trunk */}
          <rect x="20" y="48" width="8" height="24" className="fill-pixel-tree-dark" />
          
          {/* Foliage - pixelated circle */}
          <rect x="16" y="8" width="16" height="8" className="fill-pixel-tree" />
          <rect x="8" y="16" width="32" height="8" className="fill-pixel-tree" />
          <rect x="4" y="24" width="40" height="16" className="fill-pixel-tree" />
          <rect x="8" y="40" width="32" height="8" className="fill-pixel-tree" />
          <rect x="16" y="48" width="16" height="4" className="fill-pixel-tree" />
          
          {/* Highlight */}
          <rect x="12" y="20" width="8" height="8" className="fill-pixel-tree opacity-70" />
        </svg>
      )}
      
      {variant === 'small' && (
        <svg width="24" height="40" viewBox="0 0 24 40" className="pixel-canvas">
          {/* Trunk */}
          <rect x="10" y="28" width="4" height="12" className="fill-pixel-tree-dark" />
          
          {/* Foliage */}
          <rect x="8" y="8" width="8" height="4" className="fill-pixel-tree" />
          <rect x="4" y="12" width="16" height="8" className="fill-pixel-tree" />
          <rect x="6" y="20" width="12" height="8" className="fill-pixel-tree" />
        </svg>
      )}
    </div>
  );
};

export default PixelTree;
