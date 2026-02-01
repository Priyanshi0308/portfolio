import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Home, User, Briefcase, Heart, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#dawn', icon: Home },
    { label: 'About', href: '#learning', icon: User },
    { label: 'Projects', href: '#building', icon: Briefcase },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Interests', href: '#interests', icon: Heart },
    { label: 'Contact', href: '#horizon', icon: Mail },
    { label: 'Blog', href: 'https://substack.com/@priyanshikwatra', icon: BookOpen, external: true },
  ];

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 z-40 h-full w-72 bg-card border-r border-border shadow-2xl"
            >
              <div className="pt-24 px-6">
                {/* <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
                  Navigation
                </h2> */}
                
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href, item.external)}
                        className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors duration-200 group"
                      >
                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium">{item.label}</span>
                        {item.external && (
                          <span className="ml-auto text-xs text-muted-foreground">↗</span>
                        )}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="absolute bottom-8 left-6 right-6">
                  <p className="text-xs text-muted-foreground text-center">
                    A story of growth & curiosity
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
