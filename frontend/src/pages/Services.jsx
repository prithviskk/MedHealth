import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../assets/book-doctor.webp';
import image2 from '../assets/pharmacy.webp';
import image3 from '../assets/hospmanag.jpg';

const Services = ({ darkMode }) => {
  const navigate = useNavigate();

  const textColor = darkMode ? "text-white" : "text-gray-800";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";

  return (
    <section className={`min-h-screen px-4 sm:px-6 py-10 ${bgColor} transition-all duration-300`}>
      <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-red-400" : "text-red-600"}`}>
        Our Services
      </h2>

      {/* Section 1 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${textColor}`}
      >
        <div className="w-full">
          <img
            src={image1}
            alt="Book a Doctor"
            className="w-full h-auto max-h-[350px] object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-4">Book a Doctor</h3>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
          Easily book an appointment with the right doctor for your medical needs. Whether it's a routine checkup or an emergency, our platform provides quick access to various healthcare professionals across specialties.

We prioritize convenience and reliability by offering flexible time slots, real-time doctor availability, and instant confirmations. Our system also stores past consultation history for easy follow-ups and prescription tracking.

You can explore doctor profiles, check patient reviews, and select based on experience.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
            We also provide additional services like telemedicine and home visits...
          </p>
          <button
            onClick={() => navigate('/book-doctor')}
            className={`mt-2 py-2 px-6 rounded-full ${darkMode ? "bg-red-400" : "bg-red-600"} text-white`}
          >
            Book Now
          </button>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} rounded-lg`}
      >
        <div className="p-4 order-2 lg:order-1">
          <h3 className="text-2xl font-semibold mb-4">Pharmacy Management</h3>
          <p className="text-lg mb-4 text-gray-800 dark:text-gray-400">
            Manage your pharmacy's inventory, orders, and supplies with ease...
          </p>
          <p className="text-lg mb-4 text-gray-900 dark:text-gray-400">
            Our platform integrates with doctors' prescriptions...
          </p>
          <button
            onClick={() => navigate('/pharmacy-management')}
            className={`mt-2 py-2 px-6 rounded-full ${darkMode ? "bg-red-400" : "bg-red-600"} text-white`}
          >
            Learn More
          </button>
        </div>
        <div className="w-full order-1 lg:order-2">
          <img
            src={image2}
            alt="Pharmacy Management"
            className="w-full h-auto max-h-[350px] object-contain rounded-lg"
          />
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 ${textColor}`}
      >
        <div className="w-full">
          <img
            src={image3}
            alt="Hospital Management"
            className="w-full h-auto max-h-[350px] object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-4">Hospital Management</h3>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
            Streamline hospital operations, from patient records to staff management...
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
            With real-time data on patient admissions, discharge status, and staff availability...
          </p>
          <button
            onClick={() => navigate('/hospital-management')}
            className={`mt-2 py-2 px-6 rounded-full ${darkMode ? "bg-red-400" : "bg-red-600"} text-white`}
          >
            Explore Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
