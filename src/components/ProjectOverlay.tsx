import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  details: string;
  link?: string;
}

interface ProjectOverlayProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectOverlay = ({ project, onClose }: ProjectOverlayProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="project-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="project-card p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="editorial-text text-muted-foreground mb-6">
            {project.description}
          </p>
          
          <div className="prose prose-lg text-foreground">
            <p className="font-body text-base leading-relaxed">
              {project.details}
            </p>
          </div>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Project
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface ProjectSignboardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectSignboard = ({ project, onClick }: ProjectSignboardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-card hover:bg-card/80 border border-border rounded-xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h4>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Pixel corner accent */}
      <div className="absolute top-0 right-0 w-4 h-4">
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary/20" />
        <div className="absolute top-2 right-0 w-2 h-2 bg-primary/10" />
        <div className="absolute top-0 right-2 w-2 h-2 bg-primary/10" />
      </div>
    </button>
  );
};

export default ProjectOverlay;
