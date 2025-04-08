import React, { useState, useEffect } from 'react';

const Carousel = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

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
        'Platform for video consultations, E-prescriptions, online payment collection, and chat interactions via a mobile app or web browser.',
      button: 'Learn More',
    },
    {
      title: 'Emergency Care',
      description:
        'Round-the-clock emergency services with fast ambulance dispatch and expert trauma care.',
      button: 'Explore Services',
    },
    {
      title: 'Advanced Diagnostics',
      description:
        'State-of-the-art lab tests and imaging with quick turnaround times for faster diagnosis.',
      button: 'Book a Test',
    },
    {
      title: 'Advanced Diagnostics',
      description:
        'State-of-the-art lab tests and imaging with quick turnaround times for faster diagnosis.',
      button: 'Book a Test',
    },
    {
      title: 'Advanced Diagnostics',
      description:
        'State-of-the-art lab tests and imaging with quick turnaround times for faster diagnosis.',
      button: 'Book a Test',
    },
  ];

  return (
    <div className="relative w-screen h-[400px] overflow-hidden">
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-screen h-[400px] flex-shrink-0 relative">
            {/* Background Image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Dynamic Content */}
            <div className="absolute left-12 sm:left-16 top-1/2 transform -translate-y-1/2 z-30 w-[90%] max-w-lg sm:max-w-md md:max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                {slideContent[index]?.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                {slideContent[index]?.description}
              </p>
              <button className="px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300">
                {slideContent[index]?.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-700 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-40"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-700 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-40"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
