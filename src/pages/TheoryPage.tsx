import { useState, useEffect } from 'react';
import TheorySidebar from '../components/theory/TheorySidebar';
import TheoryContent from '../components/theory/TheoryContent';
// import FeaturedSection from '../components/theory/FeaturedSection';
import ResearchGallery from '../components/theory/ResearchGallery';
import FeedbackCTA from '../components/theory/FeedBackCTA';
import Chatbot from '../components/theory/Chatbot';
import SocialMediaCharts from '../components/charts/SocialMediaCharts'; // Import the new component
import VideoGallery from '../components/media/VideoGallery';
import { theories } from '../data/theories';
import { Search, ChevronDown, ChevronUp } from 'lucide-react'; // Added Chevron icons

export default function TheoryPage() {
  const [currentTheory, setCurrentTheory] = useState('buzzer_introduction');
  const [searchTerm, setSearchTerm] = useState(''); // For sidebar filtering
  const [highlightSearchTerm, setHighlightSearchTerm] = useState(''); // For in-content highlighting
  const [highlightedElements, setHighlightedElements] = useState<HTMLElement[]>([]); // To store highlighted elements
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(-1); // To track current highlight

  // Effect to manage scrolling and current highlight class
  useEffect(() => {
    // Remove 'current-highlight' class from all elements first
    highlightedElements.forEach(el => el.classList.remove('current-highlight'));

    if (highlightedElements.length > 0 && currentHighlightIndex !== -1) {
      const targetElement = highlightedElements[currentHighlightIndex];
      targetElement.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
      targetElement.classList.add('current-highlight');
    }
  }, [currentHighlightIndex, highlightedElements]);

  // Effect to re-collect highlights when search term or theory changes
  useEffect(() => {
    if (highlightSearchTerm && theoryData) {
      // Use a timeout to ensure DOM updates have occurred after render
      const timeoutId = setTimeout(() => {
        const newHighlights = Array.from(document.querySelectorAll<HTMLElement>('[data-highlight-id]'));
        setHighlightedElements(newHighlights);
        if (newHighlights.length > 0) {
          setCurrentHighlightIndex(0);
        } else {
          setCurrentHighlightIndex(-1);
        }
      }, 0); // Small delay to allow DOM to update

      return () => clearTimeout(timeoutId);
    } else {
      // Clear highlights if search term is empty
      setHighlightedElements([]);
      setCurrentHighlightIndex(-1);
    }
  }, [highlightSearchTerm, currentTheory]); // Depend on highlightSearchTerm and currentTheory

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleHighlightSearchChange = (term: string) => {
    setHighlightSearchTerm(term);
  };

  // No longer need onHighlightsFound as elements are re-queried in useEffect
  // const handleHighlightsFound = (elements: HTMLElement[]) => {
  //   setHighlightedElements(elements);
  //   if (elements.length > 0) {
  //     setCurrentHighlightIndex(0);
  //   } else {
  //     setCurrentHighlightIndex(-1);
  //   }
  // };

  const navigateHighlight = (direction: 'next' | 'prev') => {
    if (highlightedElements.length === 0) return;

    let newIndex = currentHighlightIndex;
    if (direction === 'next') {
      newIndex = (currentHighlightIndex + 1) % highlightedElements.length;
    } else {
      newIndex = (currentHighlightIndex - 1 + highlightedElements.length) % highlightedElements.length;
    }
    setCurrentHighlightIndex(newIndex);
  };

  const filteredTheories = Object.entries(theories).filter(([id, theory]) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      theory.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      theory.shortTitle.toLowerCase().includes(lowerCaseSearchTerm) ||
      id.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  
  const theoryData = theories[currentTheory as keyof typeof theories];

  return (
    <div className="flex flex-col gap-0 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-9 w-full max-w-screen-xl px-4 lg:px-8 py-7">
        <div className="lg:col-span-3 order-2 lg:order-1">
          {/* Search bar for highlighting */}
          <div className="relative mb-6 flex items-center">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search words in content..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-primary-light text-text-primary placeholder-text-secondary border border-primary-dark focus:outline-none focus:border-accent-teal light:bg-neutral-100 light:text-neutral-900 light:placeholder-neutral-500 light:border-neutral-300"
              onChange={(e) => handleHighlightSearchChange(e.target.value)}
              value={highlightSearchTerm}
            />
          </div>
          {/* Ensure theoryData is not undefined before passing */}
          {theoryData && <TheoryContent theory={theoryData} highlightTerm={highlightSearchTerm} onHighlightsFound={() => {}} />}
        </div>
        <div className="lg:col-span-1 order-1 lg:order-2">
          <TheorySidebar
            onTheorySelect={setCurrentTheory}
            currentTheory={currentTheory}
            filteredTheories={filteredTheories}
            onSearchChange={handleSearchChange}
          />
          <ResearchGallery />
        </div>
      </div>
      
      {/* Fixed navigation arrows for highlights */}
      {highlightedElements.length > 0 && highlightSearchTerm && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-primary-light p-3 rounded-full shadow-lg border border-primary-dark light:bg-white light:border-neutral-300">
          <button
            onClick={() => navigateHighlight('prev')}
            className="p-2 rounded-full bg-primary-dark text-text-primary hover:bg-primary-light transition-colors light:bg-neutral-900 light:text-white light:hover:bg-neutral-800"
            aria-label="Previous highlight"
          >
            <ChevronUp size={20} />
          </button>
          <span className="text-xs text-text-secondary">{currentHighlightIndex + 1} / {highlightedElements.length}</span>
          <button
            onClick={() => navigateHighlight('next')}
            className="p-2 rounded-full bg-primary-dark text-text-primary hover:bg-primary-light transition-colors light:bg-neutral-900 light:text-white light:hover:bg-neutral-800"
            aria-label="Next highlight"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      )}
      {/* Add SocialMediaCharts component here */}
      <SocialMediaCharts />
      
      {/* <FeaturedSection /> */}

      {/* Chatbot */}
      <Chatbot />
      
      <VideoGallery />
      <FeedbackCTA />
    </div>
  );
}