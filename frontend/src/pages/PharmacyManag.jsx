import React from 'react';
import { CiMedicalCase, CiPill, CiHospital1 } from 'react-icons/ci';
import { FaUserMd, FaSyringe } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from 'react-icons/md';

const PharmacyManag = ({ darkMode }) => {
  return (
    <div className={`min-h-screen px-6 py-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className={`text-4xl font-bold mb-10 text-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
        Pharmacy Management System
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <div className="flex items-center mb-3">
          <CiMedicalCase size={30} className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          <h2 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'}`}>Overview</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          Pharmacy Management involves the administration of medication-related information and logistics in a healthcare setting.
          It ensures the right medicine reaches the right patient at the right time with the right dosage. The system is vital for maintaining
          accurate inventory, prescription tracking, and patient safety.
        </p>
      </section>

      {/* Branches */}
      <section className="mb-10">
        <div className="flex items-center mb-3">
          <CiPill size={30} className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          <h2 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'}`}>Branches of Pharmacy Management</h2>
        </div>
        <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
          <li className="flex items-center"><FaUserMd className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} /> Clinical Pharmacy</li>
          <li className="flex items-center"><CiHospital1 className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} /> Hospital Pharmacy</li>
          <li className="flex items-center"><FaSyringe className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} /> Industrial Pharmacy</li>
          <li className="flex items-center"><CiPill className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} /> Community Pharmacy</li>
        </ul>
      </section>

      {/* Integrity and Importance */}
      <section className="mb-12">
        <div className="flex items-center mb-3">
          <MdOutlineVerifiedUser size={30} className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          <h2 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'}`}>Integrity in Pharmacy Management</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          Integrity is at the heart of pharmacy operations. It includes accurate data logging, prescription authenticity, proper dosage dispensation,
          and privacy of patient information. Every transaction must be secure, auditable, and comply with medical standards and regulations.
        </p>
      </section>

      {/* Maintenance Notice */}
      <div className={`px-6 py-4 rounded-md text-center ${darkMode ? 'bg-red-800 text-white' : 'bg-red-100 text-red-800'}`}>
        <strong className="block mb-1 text-lg">This process is under Maintenance.</strong>
        <p className="text-base">Please check back later while we improve the system.</p>
      </div>
    </div>
  );
};

export default PharmacyManag;
