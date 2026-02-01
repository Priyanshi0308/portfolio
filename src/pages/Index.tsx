import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import PixelButterfly from '../components/pixel/PixelButterfly';
import SceneDawn from '../components/scenes/SceneDawn';
import SceneLearning from '../components/scenes/SceneLearning';
import SceneBuilding from '../components/scenes/SceneBuilding';
import SceneExperience from '../components/scenes/SceneExperience';
import SceneInterests from '../components/scenes/SceneInterests';
import SceneReflection from '../components/scenes/SceneReflection';
import SceneHorizon from '../components/scenes/SceneHorizon';
import useScrollProgress from '../hooks/useScrollProgress';
import useTheme from '../hooks/useTheme';

const Index = () => {
  const scrollProgress = useScrollProgress();
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Day/Night Toggle */}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      {/* Scroll-linked Butterfly */}
      <PixelButterfly scrollProgress={scrollProgress} />
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-primary/50 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Scenes */}
      <SceneDawn />
      <SceneLearning />
      <SceneBuilding />
      <SceneExperience />
      <SceneInterests />
      <SceneReflection />
      <SceneHorizon />
    </main>
  );
};

export default Index;
