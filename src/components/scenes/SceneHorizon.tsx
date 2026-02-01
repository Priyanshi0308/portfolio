import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelTree from '../pixel/PixelTree';
import PixelGirl from '../pixel/PixelGirl';
import ScrollReveal from '../ScrollReveal';
import { Mail, Linkedin } from 'lucide-react';

const SceneHorizon = () => {
  return (
    <section id="horizon" className="scene-section flex items-center justify-center">
      {/* Background - transitional sky */}
      <PixelSky variant="evening" showStars />
      
      {/* Distant hills/horizon */}
      <div className="absolute bottom-[100px] left-0 right-0">
        <svg 
          className="w-full pixel-canvas" 
          viewBox="0 0 400 60" 
          preserveAspectRatio="none"
          style={{ height: '80px' }}
        >
          {/* Distant hills */}
          <polygon 
            points="0,60 0,40 50,30 100,35 150,25 200,30 250,20 300,28 350,22 400,35 400,60" 
            className="fill-pixel-ground-dark opacity-40" 
          />
          <polygon 
            points="0,60 0,50 80,40 160,45 240,35 320,42 400,38 400,60" 
            className="fill-pixel-ground-dark opacity-60" 
          />
        </svg>
      </div>
      
      {/* Scattered trees on horizon */}
      <div className="absolute bottom-[120px] left-[15%] opacity-30 scale-50">
        <PixelTree variant="pine" />
      </div>
      <div className="absolute bottom-[110px] left-[35%] opacity-25 scale-[0.4]">
        <PixelTree variant="round" />
      </div>
      <div className="absolute bottom-[115px] right-[25%] opacity-30 scale-50">
        <PixelTree variant="pine" />
      </div>
      
      <PixelGround variant="path" />
      
      {/* Pixel Girl at bottom right corner */}
      <div className="absolute bottom-[100px] right-[5%] z-[3]">
        <PixelGirl />
      </div>
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            The Road Ahead
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Every End is a Beginning
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="editorial-text text-muted-foreground max-w-lg mx-auto mb-10">
            The journey continues. New questions emerge, new patterns await.
            If you'd like to be part of the story, let's connect.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:priyanshi.kw@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/priyanshi-kwatra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-xs text-muted-foreground">
            Designed with curiosity. Built with care.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SceneHorizon;
