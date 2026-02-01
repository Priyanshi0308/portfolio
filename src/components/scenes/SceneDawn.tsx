import PixelSky from '../pixel/PixelSky';
import PixelSun from '../pixel/PixelSun';
import PixelGround from '../pixel/PixelGround';
import PixelTree from '../pixel/PixelTree';
import ScrollReveal from '../ScrollReveal';

const SceneDawn = () => {
  return (
    <section id="dawn" className="scene-section flex items-center justify-center">
      {/* Background */}
      <PixelSky variant="dawn" showStars />
      <PixelSun size="large" position={{ x: 85, y: 20 }} />
      
      {/* Decorative trees */}
      <div className="absolute bottom-[100px] left-[5%]">
        <PixelTree variant="pine" />
      </div>
      <div className="absolute bottom-[100px] left-[15%]">
        <PixelTree variant="round" />
      </div>
      <div className="absolute bottom-[100px] right-[8%]">
        <PixelTree variant="small" />
      </div>
      <div className="absolute bottom-[100px] right-[18%]">
        <PixelTree variant="pine" />
      </div>
      
      <PixelGround variant="grass" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
            A Story of Growth
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground">
            Priyanshi Kwatra
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="editorial-subheading text-muted-foreground max-w-xl mx-auto mb-8">
            Where economics meets data science, creativity dances with analytics,
            and every question leads to a new pattern.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={600}>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-border">Data Science</span>
            <span className="px-3 py-1 rounded-full border border-border">Economics</span>
            <span className="px-3 py-1 rounded-full border border-border">Machine Learning</span>
            <span className="px-3 py-1 rounded-full border border-border">Research</span>
          </div>
        </ScrollReveal>
        
        
        <ScrollReveal delay={900}>
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-muted-foreground"
              >
                <path 
                  d="M12 5v14m0 0l-6-6m6 6l6-6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SceneDawn;
