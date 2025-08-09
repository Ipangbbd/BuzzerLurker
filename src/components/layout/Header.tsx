import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Custom Logo Icon Component
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.3333 16.0001C25.3333 21.1527 21.1526 25.3334 16 25.3334C10.8474 25.3334 6.66663 21.1527 6.66663 16.0001C6.66663 10.8475 10.8474 6.66675 16 6.66675C19.9372 6.66675 23.2851 9.13313 24.6666 12.3334"
      stroke="#dc2626"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 11.3333C18.8889 12.8888 19.3333 16.2222 19.3333 16.6666C19.3333 18.6666 18 20.6666 16 21.3333C14 20.6666 12.6667 18.6666 12.6667 16.6666C12.6667 16.2222 13.1111 12.8888 16 11.3333Z"
      fill="#dc2626"
    />
  </svg>
);

// Animated hamburger icon
const AnimatedBurger = ({ open }: { open: boolean }) => (
  <div className="relative h-6 w-6" aria-hidden>
    <span
      className={`absolute left-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
        open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1.5'
      }`}
    />
    <span
      className={`absolute left-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
        open ? 'top-1/2 -translate-y-1/2 opacity-0 scale-50' : 'top-1/2 -translate-y-1/2 opacity-100'
      }`}
    />
    <span
      className={`absolute left-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
        open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1.5'
      }`}
    />
  </div>
);

type HeaderProps = {
  currentPage: 'theory' | 'team';
  onPageChange: (page: 'theory' | 'team') => void;
};

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (page: 'theory' | 'team') => {
    onPageChange(page);
    closeMobileMenu();
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const scrolledShell = theme === 'dark'
    ? 'bg-primary-dark/70 border-white/10'
    : 'bg-white/80 border-neutral-200';

  const inactiveDesktopBtn = theme === 'dark'
    ? 'bg-white/10 text-text-primary hover:bg-white/20 ring-1 ring-inset ring-white/10'
    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 ring-1 ring-inset ring-neutral-200';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? scrolledShell : 'border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onPageChange('theory')}>
            <LogoIcon />
            <span className={`text-xl font-semibold hidden sm:block ${theme === 'dark' ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500' : 'text-neutral-900'}`}>
              buzzerlurker.com
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 sm:gap-4">
              <li>
                <button
                  onClick={() => handleNavClick('theory')}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    currentPage === 'theory'
                      ? 'bg-accent-teal text-primary-dark hover:bg-opacity-90'
                      : inactiveDesktopBtn
                  }`}
                >
                  Theory Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('team')}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    currentPage === 'team'
                      ? 'bg-accent-teal text-primary-dark hover:bg-opacity-90'
                      : inactiveDesktopBtn
                  }`}
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="ml-2 px-3 py-2 rounded-full text-sm font-medium transition-colors bg-white/10 text-text-primary hover:bg-white/20 ring-1 ring-inset ring-white/10 flex items-center gap-2"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  <span className="hidden lg:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-text-primary p-2 hover:text-accent-teal focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatedBurger open={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-lg border-t ${theme === 'dark' ? 'bg-primary-dark/95 border-white/10' : 'bg-white/95 border-neutral-200'}`}>
          <div className="py-2 px-4">
            <button
              onClick={() => handleNavClick('theory')}
              className={`w-full text-left py-3 px-4 rounded-button my-1 transition-all duration-300 text-sm font-semibold ${
                currentPage === 'theory' 
                  ? 'bg-accent-teal text-primary-dark' 
                  : theme === 'dark' ? 'text-text-primary hover:text-accent-teal hover:bg-white/10' : 'text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              Theory Hub
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className={`w-full text-left py-3 px-4 rounded-button my-1 transition-all duration-300 text-sm font-medium ${
                currentPage === 'team' 
                  ? 'bg-accent-teal text-primary-dark' 
                  : theme === 'dark' ? 'text-text-primary hover:text-accent-teal hover:bg-white/10' : 'text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              Our Team
            </button>
            <button
              onClick={toggleTheme}
              className={`w-full text-left py-3 px-4 rounded-button my-1 transition-all duration-300 text-sm font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-text-primary hover:text-accent-teal hover:bg-white/10' : 'text-neutral-900 hover:bg-neutral-200'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}