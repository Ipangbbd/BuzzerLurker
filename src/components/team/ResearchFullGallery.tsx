import { useState } from 'react';

type Image = {
  id: string;
  url: string;
  category: string;
  title: string;
};

const images: Image[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg',
    category: 'research',
    title: 'Buzzer Impact Overview'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
    category: 'social-media',
    title: 'Social Media Landscape'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg',
    category: 'research',
    title: 'Gen Z Awareness'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg',
    category: 'research',
    title: 'Research Data Collection'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
    category: 'social-media',
    title: 'Political Communication'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
    category: 'platform',
    title: 'BuzzerLurker.Com'
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg',
    category: 'research',
    title: 'Buzzer Working Patterns'
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg',
    category: 'research',
    title: 'Quantitative Analysis'
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg',
    category: 'social-media',
    title: 'Social Media Ethics'
  }
];

const categories = ['all', 'research', 'social-media', 'platform'];

// Define your Google Drive link here
const GOOGLE_DRIVE_LINK = 'YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE'; // *** IMPORTANT: Replace with your actual Google Drive link ***

export default function ResearchGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const filteredImages = images.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <div className="my-12">
      <h2 className="text-h2 text-center font-bold text-text-primary mb-6">Research Gallery</h2>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-button transition-all duration-300 ${
              activeCategory === category
                ? 'bg-accent-teal text-primary-dark shadow-subtle'
                : 'bg-primary-light text-text-secondary hover:bg-primary-dark border border-primary-dark'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* We're now showing all filtered images, as the "See More" button handles the rest */}
        {filteredImages.slice(0, 6).map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-card cursor-pointer group border border-primary-dark light:border-neutral-300"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end light:bg-white/0 light:group-hover:bg-neutral-900/15">
              <h3 className="text-text-primary p-4 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 light:from-neutral-900/30">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- */}

      {/* See More Button */}
      {/* Only show the button if there are more images than currently displayed */}
      {filteredImages.length > 0 && ( // You might want to adjust this threshold based on your desired visible count
        <div className="text-center mt-8">
          <a
            href={GOOGLE_DRIVE_LINK}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
            className="inline-flex items-center px-6 py-3 border border-transparent text-body font-semibold rounded-button shadow-subtle text-primary-dark bg-accent-teal hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal transition-colors duration-300"
          >
            See More Pictures
            {/* Optional: Add an icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7m7-7v6" />
            </svg>
          </a>
        </div>
      )}

      {/* --- */}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-card"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-text-primary text-h3">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}