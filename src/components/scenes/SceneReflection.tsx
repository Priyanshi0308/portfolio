import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelTree from '../pixel/PixelTree';
import ScrollReveal from '../ScrollReveal';
import { Award, Users, BookOpen } from 'lucide-react';

const SceneReflection = () => {
  return (
    <section id="reflection" className="scene-section flex items-center">
      {/* Night sky background */}
      <PixelSky variant="night" showStars />
      
      {/* Moon instead of sun for night */}
      <div className="absolute top-[15%] right-[20%]">
        <svg width="48" height="48" viewBox="0 0 16 16" className="pixel-canvas">
          <rect x="6" y="2" width="4" height="4" className="fill-pixel-sun opacity-90" />
          <rect x="4" y="4" width="8" height="8" className="fill-pixel-sun opacity-90" />
          <rect x="2" y="6" width="4" height="4" className="fill-pixel-sun opacity-90" />
          <rect x="10" y="6" width="4" height="4" className="fill-pixel-sun opacity-90" />
          <rect x="6" y="10" width="4" height="4" className="fill-pixel-sun opacity-90" />
          {/* Craters */}
          <rect x="5" y="5" width="2" height="2" className="fill-pixel-sun opacity-60" />
          <rect x="9" y="8" width="2" height="2" className="fill-pixel-sun opacity-60" />
        </svg>
      </div>
      
      {/* Silhouette trees */}
      <div className="absolute bottom-[100px] left-[8%] opacity-40">
        <PixelTree variant="pine" />
      </div>
      <div className="absolute bottom-[100px] right-[12%] opacity-40">
        <PixelTree variant="round" />
      </div>
      
      <PixelGround variant="grass" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6">
        <div className="max-w-2xl ml-auto mr-8 md:mr-16 lg:mr-24">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Chapter Five
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Leadership & Growth
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-text text-muted-foreground mb-8">
              Beyond individual achievements lies the joy of lifting others. 
              Leadership is about enabling collective growth.
            </p>
          </ScrollReveal>
          
          {/* Leadership Card */}
          <ScrollReveal delay={300}>
            <div className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Vice President
                  </h4>
                  <p className="text-sm text-primary mb-2">
                    Academic Research Paper Club, Dyal Singh College
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jul 2023 - Jul 2024
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal delay={400}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h5 className="font-display font-medium text-foreground text-sm mb-1">
                  Mentorship
                </h5>
                <p className="text-xs text-muted-foreground">
                  Guided students in research methodologies
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 text-center">
                <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                <h5 className="font-display font-medium text-foreground text-sm mb-1">
                  Collaboration
                </h5>
                <p className="text-xs text-muted-foreground">
                  Facilitated connections with industry experts
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneReflection;
