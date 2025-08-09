import React from 'react';

type Video = {
  id: string;
  title: string;
  youtubeId: string;
};

const videos: Video[] = [
  { id: 'v1', title: 'Gen Z & Algorithms Overview', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'v2', title: 'Buzzer Working Patterns Explained', youtubeId: '9bZkp7q19f0' },
  { id: 'v3', title: 'Echo Chambers & Filter Bubbles', youtubeId: '3GwjfUFyY6M' },
];

export default function VideoGallery() {
  return (
    <section className="my-12">
      <h2 className="text-h2 font-bold text-text-primary mb-6 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="bg-primary-light rounded-card border border-primary-dark overflow-hidden shadow-subtle light:bg-white light:border-neutral-300">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-4 border-t border-primary-dark light:border-neutral-300">
              <h3 className="text-text-primary font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


