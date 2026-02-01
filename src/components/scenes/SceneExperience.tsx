import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelBuilding from '../pixel/PixelBuilding';
import ScrollReveal from '../ScrollReveal';

const experiences = [
  {
    company: 'YAMADA Consulting & Spire',
    role: 'Junior Analyst',
    period: 'Nov 2024 - Present',
    type: 'Full-time',
    description: 'Leveraging research, consulting, and data analysis to drive insights across M&A, market entry, and business development projects in sectors including logistics, pharma, and smart cities. Creating dashboards and presentations for strategic decision-making.',
  },
  {
    company: 'State Bank of India',
    role: 'Summer Intern',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    description: 'Performed comparative statistical analysis of home loan products and customer behavior to identify improvement opportunities and optimize offerings.',
  },
  {
    company: 'Nation First Policy Research Centre',
    role: 'Research Intern',
    period: 'Jun 2023 - Aug 2023',
    type: 'Internship',
    description: 'Conducted district-level data analysis for the One District One Product initiative, generating insights to optimize local economic opportunities.',
  },
];

const SceneExperience = () => {
  return (
    <section id="experience" className="scene-section flex items-center">
      {/* Background */}
      <PixelSky variant="day" showStars />
      
      {/* Office building */}
      <PixelBuilding variant="office" position="right" className="opacity-60" />
      
      <PixelGround variant="path" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6">
        <div className="max-w-2xl mr-auto ml-8 md:ml-16 lg:ml-24">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Chapter Three
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              The Journey
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-text text-muted-foreground mb-8">
              Each role a stepping stone, each team a new perspective.
              Learning never ends—it only deepens.
            </p>
          </ScrollReveal>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="relative pl-10">
                    {/* Milestone marker */}
                    <div className="absolute left-0 top-1 milestone-marker" />
                    
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-5">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="font-display font-semibold text-foreground">
                          {exp.company}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-sm font-medium text-primary">{exp.role}</p>
                        <span className="text-xs text-muted-foreground">• {exp.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneExperience;
