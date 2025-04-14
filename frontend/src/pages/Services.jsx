import React from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation to the book-doctor endpoint
import { motion } from 'framer-motion';
import image1 from '../assets/book-doctor.webp';  // Add your images accordingly
import image2 from '../assets/pharmacy.webp';
import image3 from '../assets/hospmanag.jpg';

const Services = ({ darkMode }) => {
  const navigate = useNavigate(); // For navigation to "book-doctor" endpoint

  return (
    <section className={`min-h-screen mx-auto px-6 py-10 transition-all duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-red-400" : "text-red-600"}`}>
        Our Services
      </h2>

      {/* First Section - Image on left, Content on right */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${darkMode ? "text-white" : "text-gray-800"}`}
      >
        <div className="flex items-center justify-center">
          <img src={image1} alt="Book a Doctor" className="w-[900px] h-[450px]" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Book a Doctor</h3>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Easily book an appointment with the right doctor for your medical needs. Whether it's a routine checkup or an emergency, our platform provides quick access to various healthcare professionals across specialties. 
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            We also provide additional services like telemedicine and home visits. Scheduling has never been easier, and you can choose the most convenient time and doctor for your appointment.
          </p>
          <button
            onClick={() => navigate('/book-doctor')}
            className={`mt-4 py-2 px-6 rounded-full ${darkMode ? "bg-red-400 text-white" : "bg-red-600 text-white"} transition-colors duration-300`}
          >
            Book Now
          </button>
        </div>
      </motion.div>


{/* Second Section - Image on right, Content on left */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className={`flex flex-col lg:flex-row items-center justify-between gap-8 max-w-full  ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} mt-12 p-5`}
>
  <div className="p-6 flex flex-col justify-center w-full lg:w-1/2">
    <h3 className="text-2xl font-semibold mb-4">Pharmacy Management</h3>
    <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
      Manage your pharmacy's inventory, orders, and supplies with ease. Our pharmacy management system helps optimize stock control, reduce waste, and ensure that the most needed medicines are always in supply.
    </p>
    <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
      In addition to managing inventory, our platform integrates with doctors' prescriptions and can generate automated order lists based on real-time inventory data, saving time and improving efficiency.
    </p>
    <button
      onClick={() => navigate('/pharmacy-management')}
      className={`mt-4 py-2 px-6 rounded-full ${darkMode ? "bg-red-400 text-white" : "bg-red-600 text-white"} transition-colors duration-300`}
    >
      Learn More
    </button>
  </div>
  <div className="flex items-center justify-center w-full lg:w-1/2">
    <img src={image2} alt="Pharmacy Management" className="w-full h-auto object-contain " />
  </div>
</motion.div>


      {/* Third Section - Image on left, Content on right */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${darkMode ? "text-white" : "text-gray-800"} mt-12`}
      >
        <div className="flex items-center justify-center">
          <img src={image3} alt="Hospital Management" className="w-full h-72 object-cover" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Hospital Management</h3>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Streamline hospital operations, from patient records to staff management. Our hospital management solution integrates various departments, ensuring smooth operations and efficient healthcare delivery.
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            With real-time data on patient admissions, discharge status, and staff availability, our system empowers hospital managers to make informed decisions quickly, enhancing patient care and operational efficiency.
          </p>
          <button
            onClick={() => navigate('/hospital-management')}
            className={`mt-4 py-2 px-6 rounded-full ${darkMode ? "bg-red-400 text-white" : "bg-red-600 text-white"} transition-colors duration-300`}
          >
            Explore Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
