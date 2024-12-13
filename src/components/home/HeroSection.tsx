import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const videos = [
  {
    id: 1,
    title: {
      ar: 'رؤية الدولة 2035 لفرص استثمارية واعدة',
      en: 'State Vision 2030'
    },
    description: {
      ar: 'استكشف رؤيتنا للمستقبل والاستثمار في المستقبل',
      en: 'Explore our vision for the future'
    },
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    videoUrl: '#'
  },
  
  {
    id: 2,
    title: {
      ar: 'دور الدولة في تعزيز الاستثمار',
      en: 'State\'s Role in Investment'
    },
    description: {
      ar: 'شراكة استراتيجية للنمو',
      en: 'Strategic partnership for growth'
    },
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000',
    videoUrl: '#'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Video Slider */}
      <div 
        className="relative h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${isRTL ? currentSlide * 100 : -currentSlide * 100}%)` }}
      >
        <div className="absolute inset-0 flex">
          {videos.map((video, index) => (
            <div key={video.id} className="relative w-full h-full flex-shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">{video.title[language]}</h2>
                  <p className="text-xl mb-8">{video.description[language]}</p>
                  <button 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 transition-transform hover:scale-110"
                    onClick={() => window.open(video.videoUrl, '_blank')}
                  >
                    <Play className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;