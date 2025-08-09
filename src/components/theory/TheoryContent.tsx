import { TheoryType } from '../../data/theories';
import { useRef, useEffect } from 'react';

type TheoryContentProps = {
  theory: TheoryType;
  highlightTerm: string;
  onHighlightsFound: (elements: HTMLElement[]) => void; // New prop to report highlighted elements
};

const highlightText = (text: string, term: string, setRef: (element: HTMLElement | null) => void) => {
  if (!term) return <>{text}</>; // Ensure a React Fragment is always returned
  const regex = new RegExp(`(${term})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} ref={setRef} className="bg-accent-teal/30 text-text-primary px-1 rounded-sm" data-highlight-id={`highlight-${part}-${index}`}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default function TheoryContent({ theory, highlightTerm, onHighlightsFound }: TheoryContentProps) {
  const highlightRefs = useRef<HTMLElement[]>([]);

  // Clear refs when highlightTerm or theory changes
  useEffect(() => {
    highlightRefs.current = [];
  }, [highlightTerm, theory]);

  // Report highlights when they are rendered
  useEffect(() => {
    onHighlightsFound(highlightRefs.current);
  }, [highlightRefs.current.length, highlightTerm, theory, onHighlightsFound]);

  const setHighlightRef = (element: HTMLElement | null) => {
    if (element && !highlightRefs.current.includes(element)) {
      highlightRefs.current.push(element);
    }
  };

  return (
    <article>
      {/* Meta Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {theory.tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-primary-light text-accent-teal hover:bg-primary-light/80 cursor-default text-sm font-normal py-1 px-2 rounded-md transition-colors"
            data-theme-override="light:bg-white light:text-red-600 light:hover:bg-neutral-100"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Title */}
      <h1 className="text-text-primary font-bold text-4xl md:text-4xl lg:text-5xl leading-relaxed mb-4">
        {highlightText(theory.title, highlightTerm, setHighlightRef)}
      </h1>
      
      {/* Content */}
      <div className="space-y-5 text-text-secondary text-base md:text-lg leading-relaxed font-normal">
        {theory.sections.map((section, index) => (
          <div key={index}>
            {section.type === 'paragraph' && (
              <p>{highlightText(section.content, highlightTerm, setHighlightRef)}</p>
            )}
            
            {section.type === 'heading' && (
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mt-7 mb-4">
                {highlightText(section.content, highlightTerm, setHighlightRef)}
              </h2>
            )}
            
            {section.type === 'highlight' && (
              <div className="mt-8 mb-8 p-5 bg-primary-light border-l-4 border-neutral-400 rounded-r-xl shadow-md">
                <h3 className="text-text-primary font-semibold text-lg md:text-xl leading-relaxed mb-2">
                  {highlightText(section.title || 'Key Insight', highlightTerm, setHighlightRef)}
                </h3>
                <p className="text-text-secondary italic text-sm md:text-base">
                  {highlightText(section.content, highlightTerm, setHighlightRef)}
                </p>
              </div>
            )}
            
            {section.type === 'image' && (
              <figure className="my-8">
                <img src={section.src} alt={section.alt} className="max-w-lg w-full h-auto mx-auto rounded-lg shadow-md" />
                {section.caption && (
                  <figcaption className="text-center text-text-secondary text-sm mt-2">
                    {highlightText(section.caption, highlightTerm, setHighlightRef)}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}