import { ChevronRight, BarChart3, CalendarDays, Trophy, Target, Search } from 'lucide-react';

type TheorySidebarProps = {
  onTheorySelect: (theoryId: string) => void;
  currentTheory: string;
  filteredTheories: [string, any][]; // Add filteredTheories prop
  onSearchChange: (searchTerm: string) => void; // Add onSearchChange prop
};

export default function TheorySidebar({ onTheorySelect, currentTheory, filteredTheories, onSearchChange }: TheorySidebarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary-light rounded-card shadow-subtle border border-primary-dark p-4 light:bg-white light:border-neutral-300">
        <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2 light:text-neutral-900">
          <span className="text-accent-teal">
            <BarChart3 size={18} />
          </span>
          Featured Theories
        </h3>
        {/* Search Input */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search theories..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-primary-dark text-text-primary placeholder-text-secondary border border-primary-dark focus:outline-none focus:border-accent-teal light:bg-neutral-100 light:text-neutral-900 light:border-neutral-300"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <ul className="space-y-0.5">
          {filteredTheories.map(([id, theory]) => (
            <li 
              key={id}
              onClick={() => onTheorySelect(id)}
              className={`flex items-center py-2 px-3 rounded-button text-sm cursor-pointer transition-all duration-300 ${
                currentTheory === id 
                  ? 'bg-primary-dark text-accent-teal font-semibold border-l-4 border-accent-teal pl-3 light:bg-neutral-900 light:text-accent-teal' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-primary-dark hover:translate-x-1 light:text-neutral-600 light:hover:text-neutral-900 light:hover:bg-neutral-100'
              }`}
            >
              <ChevronRight 
                size={16} 
                className={`mr-2 transition-transform duration-300 ${
                  currentTheory === id ? 'rotate-90 text-accent-teal' : ''
                }`} 
              />
              {theory.shortTitle}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary-light rounded-card shadow-subtle border border-primary-dark p-4 light:bg-white light:border-neutral-300">
        <h3 className="text-lg font-semibold text-text-primary mb-3">
          Quick Facts
        </h3>
        <div className="space-y-3">
          <div className="flex items-center text-text-secondary gap-2">
            <Trophy size={16} className="text-accent-teal" />
            <div>
              <div className="text-xs text-text-secondary">Competition Category</div>
              <div className="font-semibold text-text-primary text-sm">Advanced Social Media</div>
            </div>
          </div>
          <div className="flex items-center text-text-secondary gap-2">
            <CalendarDays size={16} className="text-accent-teal" />
            <div>
              <div className="text-xs text-text-secondary">Research Period</div>
              <div className="font-semibold text-text-primary text-sm">4 months</div>
            </div>
          </div>
          <div className="flex items-center text-text-secondary gap-2">
            <Target size={16} className="text-accent-teal" />
            <div>
              <div className="text-xs text-text-secondary">Target</div>
              <div className="font-semibold text-text-primary text-sm">International Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}