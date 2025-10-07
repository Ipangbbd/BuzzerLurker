import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Video = {
  id: string;
  title: string;
  youtubeId: string;
  comment: {
    username: string;
    avatar: string;
    text: string;
  };
};

const videos: Video[] = [
  {
    id: 'v1',
    title: 'Gen Z & Algorithms Overview',
    youtubeId: 'dQw4w9WgXcQ',
    comment: {
      username: 'DigitalCitizen',
      avatar: '/images/noprofile.jpg',
      text: 'This video really opened my eyes! We need more content like this.',
    },
  },
  {
    id: 'v2',
    title: 'Buzzer Working Patterns Explained',
    youtubeId: '9bZkp7q19f0',
    comment: {
      username: 'TruthSeeker',
      avatar: '/images/noprofile.jpg',
      text: 'Scary how easily opinions can be manipulated. Great insights!',
    },
  },
  {
    id: 'v3',
    title: 'Echo Chambers & Filter Bubbles',
    youtubeId: '3GwjfUFyY6M',
    comment: {
      username: 'AwarenessAdvocate',
      avatar: '/images/noprofile.jpg',
      text: 'I feel like I\'m in a bubble sometimes. How do we break out of these echo chambers?',
    },
  },
  {
    id: 'v4',
    title: 'Gen Z & Algorithms Overview',
    youtubeId: 'dQw4w9WgXcQ',
    comment: {
      username: 'DigitalCitizen',
      avatar: '/images/noprofile.jpg',
      text: 'This video really opened my eyes! We need more content like this.',
    },
  },
];

export default function VideoGallery() {
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  return (
    <section className="my-12">
      <h2 className="text-h2 font-bold text-text-primary mb-6 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <LazyLoadYoutubeVideo
            key={video.id}
            video={video}
            hoveredVideoId={hoveredVideoId}
            setHoveredVideoId={setHoveredVideoId}
          />
        ))}
      </div>
    </section>
  );
}

interface LazyLoadYoutubeVideoProps {
  video: Video;
  hoveredVideoId: string | null;
  setHoveredVideoId: (id: string | null) => void;
}

function LazyLoadYoutubeVideo({
  video,
  hoveredVideoId,
  setHoveredVideoId,
}: LazyLoadYoutubeVideoProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoadVideo(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-primary-light rounded-card border border-primary-dark overflow-hidden shadow-subtle light:bg-white light:border-neutral-300 relative"
      onMouseEnter={() => setHoveredVideoId(video.id)}
      onMouseLeave={() => setHoveredVideoId(null)}
    >
      <div className="aspect-video w-full">
        {loadVideo ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-primary-dark light:border-neutral-300">
        <h3 className="text-text-primary font-semibold">{video.title}</h3>
      </div>
      {hoveredVideoId === video.id && (
        <div
          className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-lg p-3 max-w-sm transition-opacity duration-300 opacity-100 z-10 animate-fade-in-scale"
        >
          <div className="relative">
            {/* Exit Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing the parent div
                setHoveredVideoId(null); // Only clear hover state
              }}
              className="absolute -top-1 -right-1 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Close comment"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {/* Comment Content */}
            <div className="flex items-start">
              <img
                src={video.comment.avatar}
                alt={`${video.comment.username}'s avatar`}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-bold text-sm text-gray-200">{video.comment.username}</p>
                <p className="text-sm text-white">{video.comment.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


