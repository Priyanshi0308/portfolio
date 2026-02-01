import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelBuilding from '../pixel/PixelBuilding';
import PixelTree from '../pixel/PixelTree';
import ScrollReveal from '../ScrollReveal';

const SceneLearning = () => {
  return (
    <section id="learning" className="scene-section flex items-center">
      {/* Background */}
      <PixelSky variant="day" showStars />
      
      {/* Campus buildings */}
      <PixelBuilding variant="campus" position="center" />
      
      {/* Trees */}
      <div className="absolute bottom-[100px] left-[3%]">
        <PixelTree variant="round" />
      </div>
      <div className="absolute bottom-[100px] right-[5%]">
        <PixelTree variant="round" />
      </div>
      
      {/* Pixel books decoration */}
      <div className="absolute bottom-[140px] left-[25%]">
        <svg width="48" height="40" viewBox="0 0 48 40" className="pixel-canvas">
          {/* Stack of books */}
          <rect x="0" y="28" width="40" height="8" className="fill-primary" />
          <rect x="4" y="20" width="36" height="8" className="fill-secondary" />
          <rect x="2" y="12" width="38" height="8" className="fill-accent" />
          <rect x="6" y="4" width="32" height="8" className="fill-primary opacity-70" />
        </svg>
      </div>
      
      {/* Pixel graph decoration */}
      <div className="absolute bottom-[160px] right-[22%]">
        <svg width="64" height="48" viewBox="0 0 64 48" className="pixel-canvas">
          {/* Chart bars */}
          <rect x="0" y="32" width="8" height="16" className="fill-primary opacity-60" />
          <rect x="12" y="24" width="8" height="24" className="fill-primary opacity-70" />
          <rect x="24" y="16" width="8" height="32" className="fill-primary opacity-80" />
          <rect x="36" y="8" width="8" height="40" className="fill-primary opacity-90" />
          <rect x="48" y="4" width="8" height="44" className="fill-primary" />
          {/* Axis */}
          <rect x="0" y="46" width="64" height="2" className="fill-foreground opacity-30" />
        </svg>
      </div>
      
      <PixelGround variant="campus" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6">
        <div className="max-w-2xl ml-auto mr-8 md:mr-16 lg:mr-24">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Chapter One
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              The Foundation
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-text text-muted-foreground mb-6">
              It began with numbers that told stories. Economics revealed the poetry 
              in markets, while data science taught the art of finding patterns 
              in chaos.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-display font-medium text-foreground">B.A. (Hons) Economics</h4>
                  <p className="text-sm text-muted-foreground">Dyal Singh College, University of Delhi • GPA: 7.85</p>
                  <p className="text-xs text-muted-foreground mt-1">Econometrics, Data Analysis, Statistical Methods, Game Theory</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-display font-medium text-foreground">B.S. Data Science & Applications</h4>
                  <p className="text-sm text-muted-foreground">IIT Madras • GPA: 8.26</p>
                  <p className="text-xs text-muted-foreground mt-1">Machine Learning, Python, Database Systems, Data Science Tools</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SceneLearning;
