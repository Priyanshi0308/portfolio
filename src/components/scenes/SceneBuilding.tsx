import { useState } from 'react';
import PixelSky from '../pixel/PixelSky';
import PixelGround from '../pixel/PixelGround';
import PixelBuilding from '../pixel/PixelBuilding';
import ScrollReveal from '../ScrollReveal';
import ProjectOverlay, { ProjectSignboard } from '../ProjectOverlay';

const projects = [
  {
    id: '1',
    title: 'QuizMaster',
    description: 'Flask app to manage quizzes, track performance, and generate automated reports.',
    tags: ['Flask', 'SQLite', 'REST APIs', 'Redis'],
    details: 'Developed QuizMaster Flask app to manage quizzes, track performance, and generate automated reports. Implemented SQLite, REST APIs, Redis caching, and Celery task automation for efficient data handling.',
    link: 'https://github.com/Priyanshi0308/QuizMaster/tree/master',
  },
  {
    id: '2',
    title: 'CrimeCast: Forecasting Crime',
    description: 'Crime categorization model with 83% accuracy using ML algorithms.',
    tags: ['Python', 'Scikit-Learn', 'XGBoost'],
    details: 'Developed a crime categorization model with 83% accuracy using Logistic Regression, Random Forest, and XGBoost. Performed EDA, feature engineering, and model optimization with GridSearchCV.',
    link: 'https://github.com/Priyanshi0308/CrimeCast-Forecasting-Crime-Categories-IITM',
  },
  {
    id: '3',
    title: 'Crime Analytics Dashboard',
    description: 'Interactive Tableau dashboard analyzing 142K+ crime incidents in Washington, D.C.',
    tags: ['Tableau', 'Data Viz', 'Analytics'],
    details: 'Developed an interactive Tableau dashboard analyzing 142K+ crime incidents in Washington, D.C. (2025), uncovering spatial, temporal, and demographic patterns to identify high-risk areas and support data-driven policing.',
    link: 'https://public.tableau.com/views/CrimeAnalyticsDashboard_17612426385910/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: '4',
    title: 'Fashion & Sustainability Research',
    description: 'Research on how green fashion influences consumer buying decisions.',
    tags: ['Research', 'Economics', 'Fashion'],
    details: 'Conducted research on how green fashion influences consumer buying decisions, utilizing quantitative and economic tools to analyze the study results.',
    link: 'https://drive.google.com/file/d/1JhCZSAeluITQDcXYObMg6ByKeuiA89_3/view',
  },
  {
    id: '5',
    title: 'Bengaluru Real Estate Predictor',
    description: 'Predictive model for housing prices using advanced econometric techniques.',
    tags: ['Econometrics', 'Regression', 'Python'],
    details: 'Applied advanced econometric techniques, including multiple regression models, to predict housing prices in Bengaluru, offering valuable insights into the city\'s real estate market trends.',
    link: 'https://drive.google.com/file/d/1RRgIb-onm55GSGAgX7kXXCxQ32OjpUbf/view?usp=sharing',
  },
];

const SceneBuilding = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="building" className="scene-section flex items-center">
      {/* Background */}
      <PixelSky variant="day" showStars />
      
      {/* City buildings */}
      <PixelBuilding variant="office" position="left" />
      <PixelBuilding variant="studio" position="right" />
      
      {/* Pixel desk decoration */}
      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2">
        <svg width="80" height="48" viewBox="0 0 80 48" className="pixel-canvas">
          {/* Desk */}
          <rect x="0" y="32" width="80" height="8" className="fill-pixel-building" />
          <rect x="4" y="40" width="8" height="8" className="fill-pixel-building-dark" />
          <rect x="68" y="40" width="8" height="8" className="fill-pixel-building-dark" />
          
          {/* Monitor */}
          <rect x="24" y="8" width="32" height="24" className="fill-pixel-building-dark" />
          <rect x="28" y="12" width="24" height="16" className="fill-pixel-sky-bottom opacity-70" />
          <rect x="36" y="32" width="8" height="4" className="fill-pixel-building-dark" />
          
          {/* Coffee cup */}
          <rect x="64" y="24" width="8" height="8" className="fill-pixel-cloud" />
          <rect x="72" y="26" width="4" height="4" className="fill-pixel-cloud" />
        </svg>
      </div>
      
      <PixelGround variant="city" />
      
      {/* Content */}
      <div className="scene-content container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Chapter Two
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Building & Creating
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-text text-muted-foreground mb-8">
              Theory became practice. Each project a new adventure, 
              each dataset a puzzle waiting to be solved.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.slice(0, 3).map((project) => (
                <ProjectSignboard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {projects.slice(3).map((project) => (
                <ProjectSignboard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <p className="text-sm text-muted-foreground mt-6 text-center italic">
              Click on a project to learn more
            </p>
          </ScrollReveal>
        </div>
      </div>
      
      <ProjectOverlay
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default SceneBuilding;
