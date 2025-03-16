import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} flex flex-col items-center`}>
      <div className={`w-full p-16 ${darkMode ? 'bg-gray-900' : 'bg-white'} max-w-full`}>
        {/* About Us Section */}
        <section className="mb-16 px-8">
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg leading-relaxed`}>
            At MedHealth, we are committed to providing innovative solutions that enhance the quality of patient care and optimize hospital management. 
            Our Hospital Management System is designed to help healthcare facilities efficiently manage patient data, improve emergency response times, 
            and ensure seamless coordination between healthcare professionals, ensuring the best possible outcomes for patients.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16 px-8">
          <h2 className={`${darkMode ? 'text-red-600' : 'text-red-600'} text-4xl font-semibold mb-6`}>
            Our Features
          </h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg mb-6`}>
            Our system offers a wide range of features to improve hospital operations and patient care:
          </p>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>Real-time Patient Data Management</li>
            <li>Instant Emergency Alerts and Ambulance Tracking</li>
            <li>Bed and Resource Availability Monitoring</li>
            <li>Hospital Facility Finder</li>
            <li>Online Appointment Scheduling and Management</li>
            <li>Integrated Billing and Insurance Processing</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="mb-16 px-8">
          <h2 className={`${darkMode ? 'text-red-600' : 'text-red-600'} text-4xl font-semibold mb-6`}>
            Contact Us
          </h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg mb-6`}>
            For inquiries or support, please reach out to us through the following channels:
          </p>
          <div className="mt-6 text-lg space-y-3">
            <p><strong>Email:</strong> <a href="mailto:support@medhealth.com" className={`${darkMode ? 'text-red-600' : 'text-red-600'} hover:underline`}>support@medhealth.com</a></p>
            <p><strong>Phone:</strong> +91 9788614677</p>
            <p><strong>Address:</strong> 197, Opp.to Annamalai Building , Adyar , Chennai -600025</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
