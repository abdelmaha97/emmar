import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Play } from 'lucide-react';

interface VideoContentProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
    duration: string;
  };
}

const VideoContent: React.FC<VideoContentProps> = ({ video }) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
          </button>
          <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {video.duration}
          </span>
        </div>
      ) : (
        <div className="h-48">
          <iframe
            src={video.url}
            title={video.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoContent;