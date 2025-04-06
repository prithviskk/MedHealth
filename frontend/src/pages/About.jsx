import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUserShield, FaAward } from 'react-icons/fa';
import image from '../assets/images/istockphoto-1312706504-612x612.jpg'
const About = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen w-full ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* About Us Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={image}
              alt="About MedHealth"
              className="max-w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-red-600">
              About MedHealth
            </h2>
            <p className="text-lg leading-relaxed">
              At MedHealth, we are committed to providing innovative solutions that enhance the quality of patient care and optimize hospital management. Our Hospital Management System is designed to help healthcare facilities efficiently manage patient data, improve emergency response times, and ensure seamless coordination between healthcare professionals.
              <br /><br />
              Our system streamlines operations, reduces paperwork, and supports accurate diagnoses by offering real-time data access and analytics. From electronic medical records to emergency alert systems, we integrate technology to empower doctors, nurses, and administrative staff.
              <br /><br />
              We believe that modern healthcare should be accessible, transparent, and driven by data. With MedHealth, hospitals can deliver faster and more reliable care, leading to better patient outcomes and improved overall satisfaction.
              <br /><br />
              Join us in our journey to transform healthcare one step at a time.
            </p>
          </motion.div>
        </section>

        {/* Mission and Vision Section */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-red-600 mb-3 text-center"
          >
            Mission & Vision
          </motion.h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8 rounded-full" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto text-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Our Mission</h3>
              <p>
                To revolutionize healthcare delivery through cutting-edge technology and seamless digital infrastructure, enabling healthcare providers to offer more efficient, informed, and compassionate care.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Our Vision</h3>
              <p>
                To be the leading force in healthcare innovation, creating a world where smart hospital systems empower every healthcare institution to deliver patient-first care with excellence and integrity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Our Values Section */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-red-600 mb-3 text-center"
          >
            Our Values
          </motion.h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-4xl mx-auto mb-12 text-center"
          >
            Committed to fostering innovation, reliability, and superior customer service, our mission is unwavering in delivering optimal solutions to healthcare facilities and professionals within the region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center"
          >
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-red-700">Innovation</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaUserShield className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-red-700">Integrity</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-red-700">Excellence</h3>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;