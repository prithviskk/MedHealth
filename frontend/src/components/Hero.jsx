import React from 'react';
import image1 from '../assets/pngtree-team-or-group-of-doctors-and-nurses-students-png-image_10786107.png';

const Hero = ({ toggleForm }) => {
  return (
    <div>
      <div
        className="hero h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Welcome to MedHealth
            </h1>
            <p className="py-2 text-base sm:text-lg">
              Your trusted partner in healthcare. From emergency care to specialist consultations, we ensure seamless and timely medical support. Book your appointment today and experience the best in healthcare!
            </p>
            <button
              onClick={toggleForm}
              className="mt-2 px-6 py-2 font-semibold rounded-full transition duration-300 border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
