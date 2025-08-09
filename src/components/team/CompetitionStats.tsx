import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 500, label: 'Participants Nationwide', suffix: '+' },
  { value: 50, label: 'Universities Represented' },
  { value: 12, label: 'Research Categories' },
  { value: 3, label: 'Months of Preparation' }
];

export default function CompetitionStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="bg-gradient-to-r from-primary-light to-primary-dark rounded-card p-8 md:p-12 text-center border border-primary-dark shadow-subtle light:from-white light:to-neutral-100 light:border-neutral-300"
    >
      <h2 className="text-h2 font-bold text-text-primary mb-4">
        National Science Theory Competition 2025
      </h2>
      <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-10">
        Our team is proud to participate in this year's National Science Theory Competition, 
        showcasing innovative research in quantum mechanics and its practical applications. 
        This competition brings together the brightest minds in theoretical physics to explore 
        the frontiers of scientific knowledge.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-primary-dark p-6 rounded-card shadow-subtle border border-primary-light light:bg-white light:border-neutral-300 
              transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-teal to-neutral-400 mb-2 light:text-neutral-900 light:bg-none">
              {stat.value}{stat.suffix || ''}
            </div>
            <div className="text-text-secondary font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}