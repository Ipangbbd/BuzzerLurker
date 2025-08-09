import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Image = {
  id: string;
  url: string;
  category: string;
  title: string;
};

const images: Image[] = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg",
    category: "buzzer-phenomena",
    title: "Buzzer Impact Overview",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    category: "social-media",
    title: "Social Media Landscape",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg",
    category: "gen-z",
    title: "Gen Z Awareness",
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg",
    category: "research-methodology",
    title: "Research Data Collection",
  },
  {
    id: "5",
    url: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
    category: "politics",
    title: "Political Communication",
  },
  {
    id: "6",
    url: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg",
    category: "buzzerlurker-platform",
    title: "BuzzerLurker.Com",
  },
];

// const categories = ["all", "buzzer-phenomena", "social-media", "gen-z", "research-methodology", "politics", "buzzerlurker-platform"];

export default function ResearchGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = images.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="my-11">
      <h2 className="text-3xl font-bold text-white mb-8">
        Research Gallery
      </h2>

      {/* Category Filters */}
      {/* <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? "bg-accent-teal text-dark-900 shadow-dark"
                : "bg-dark-800 text-neutral-300 hover:bg-dark-700"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
          </button>
        ))}
      </div> */}

      {/* Gallery Slider */}
      <div className="relative overflow-hidden rounded-xl bg-dark-900 aspect-video shadow-dark border border-dark-800 light:bg-white light:border-neutral-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={filteredImages[currentIndex].url}
            alt={filteredImages[currentIndex].title}
            className="w-full h-full object-cover"
          />

          {/* Image Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-7 light:from-neutral-900/20">
            <h3 className="text-white text-center text-lg font-semibold light:text-neutral-900">
              {filteredImages[currentIndex].title}
            </h3>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-900/80 hover:bg-dark-800/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-dark-700 light:bg-white/80 light:hover:bg-white/90 light:text-neutral-900 light:border-neutral-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-900/80 hover:bg-dark-800/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-dark-700 light:bg-white/80 light:hover:bg-white/90 light:text-neutral-900 light:border-neutral-300"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-accent-teal w-4" : "bg-neutral-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
