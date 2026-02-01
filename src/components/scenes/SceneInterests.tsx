import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelBuilding from '../pixel/PixelBuilding';
import ScrollReveal from '../ScrollReveal';

const skills = {
  languages: ['Python', 'SQL', 'JavaScript', 'HTML/CSS'],
  frameworks: ['Pandas', 'NumPy', 'Scikit-Learn', 'Bootstrap'],
  visualization: ['Tableau', 'PowerBI', 'Excel', 'Google Sheets'],
};

const SceneInterests = () => {
  return (
    <section id="interests" className="scene-section flex items-center">
      {/* Background */}
      <PixelSky variant="day" showStars />
      
      {/* Studio building */}
      <PixelBuilding variant="studio" position="left" className="opacity-70" />
      
      {/* Pixel fabric/color swatches */}
      <div className="absolute bottom-[160px] right-[15%]">
        <svg width="72" height="56" viewBox="0 0 72 56" className="pixel-canvas">
          {/* Color swatches */}
          <rect x="0" y="0" width="16" height="16" className="fill-butterfly-primary" />
          <rect x="20" y="0" width="16" height="16" className="fill-butterfly-secondary" />
          <rect x="40" y="0" width="16" height="16" className="fill-butterfly-accent" />
          <rect x="0" y="20" width="16" height="16" className="fill-accent" />
          <rect x="20" y="20" width="16" height="16" className="fill-secondary" />
          <rect x="40" y="20" width="16" height="16" className="fill-primary" />
          {/* Fabric texture lines */}
          <rect x="0" y="40" width="56" height="4" className="fill-muted opacity-50" />
          <rect x="4" y="44" width="48" height="4" className="fill-muted opacity-30" />
          <rect x="8" y="48" width="40" height="4" className="fill-muted opacity-20" />
        </svg>
      </div>
      
      {/* Pixel heart/care symbol */}
      <div className="absolute bottom-[180px] left-[20%]">
        <svg width="40" height="36" viewBox="0 0 40 36" className="pixel-canvas">
          <rect x="4" y="4" width="8" height="8" className="fill-destructive opacity-70" />
          <rect x="12" y="0" width="8" height="8" className="fill-destructive opacity-70" />
          <rect x="20" y="0" width="8" height="8" className="fill-destructive opacity-70" />
          <rect x="28" y="4" width="8" height="8" className="fill-destructive opacity-70" />
          <rect x="0" y="12" width="8" height="8" className="fill-destructive opacity-80" />
          <rect x="8" y="12" width="8" height="8" className="fill-destructive opacity-80" />
          <rect x="16" y="12" width="8" height="8" className="fill-destructive opacity-80" />
          <rect x="24" y="12" width="8" height="8" className="fill-destructive opacity-80" />
          <rect x="32" y="12" width="8" height="8" className="fill-destructive opacity-80" />
          <rect x="4" y="20" width="8" height="8" className="fill-destructive opacity-90" />
          <rect x="12" y="20" width="16" height="8" className="fill-destructive opacity-90" />
          <rect x="28" y="20" width="8" height="8" className="fill-destructive opacity-90" />
          <rect x="12" y="28" width="16" height="8" className="fill-destructive" />
        </svg>
      </div>
      
      <PixelGround variant="grass" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Chapter Four
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Skills & Interests
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-text text-muted-foreground mb-10 max-w-xl mx-auto">
              Beyond the data lies a deeper curiosity. Fashion sustainability and economic policy—
              two worlds that teach us about human needs and societal impact.
            </p>
          </ScrollReveal>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <ScrollReveal delay={300}>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 text-left">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 text-left">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 text-left">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Visualization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.visualization.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-accent/50 text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={600}>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-left">
                <div className="w-12 h-12 rounded-xl bg-butterfly-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-butterfly-primary">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Fashion & Sustainability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Researching how green fashion influences consumer buying decisions. 
                  Understanding the intersection of economics, ethics, and aesthetics.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={700}>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-left">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary-foreground">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Policy & Research
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led the Academic Research Paper Club as Vice President. 
                  Mentoring students in research skills and facilitating academic collaborations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneInterests;
