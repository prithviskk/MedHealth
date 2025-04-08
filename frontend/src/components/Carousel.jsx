import React, { useState, useEffect } from 'react';

const Carousel = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideContent = [
    {
      title: 'Telemedicine',
      description:
        'Video consultations, E-prescriptions, online payment, and chat support – all from your mobile or browser.',
      button: 'Learn More',
    },
    {
      title: 'Emergency Care',
      description:
        '24/7 emergency service with rapid ambulance dispatch and expert trauma support.',
      button: 'Explore Services',
    },
    {
      title: 'Advanced Diagnostics',
      description:
        'High-tech lab tests & imaging services with fast turnaround for early diagnosis.',
      button: 'Book a Test',
    },
    {
      title: 'Health Packages',
      description:
        'Affordable health packages for preventive and annual check-ups.',
      button: 'View Packages',
    },
    {
      title: 'Doctor at Home',
      description:
        'Consult top doctors from the comfort of your home with home visit options.',
      button: 'Book Visit',
    },
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {/* Background Image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 text-center sm:text-left z-20">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                  {slideContent[index]?.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {slideContent[index]?.description}
                </p>
                <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm shadow-md transition duration-300">
                  {slideContent[index]?.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-30"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-30"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
