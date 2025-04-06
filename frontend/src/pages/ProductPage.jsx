import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBed, FaSyringe, FaTools, FaHeartbeat, FaFirstAid,
  FaProcedures, FaPhoneAlt, FaGasPump, FaDumbbell,
  FaSwimmer, FaBoxes, FaTruck, FaBoxOpen
} from 'react-icons/fa';

// Images
import image1 from '../assets/images/Bed Head Units and Pendants.jpg';
import image2 from '../assets/images/Clinical Furniture.jpg';
import image3 from '../assets/images/Diagnostic Equipment.jpg';
import image4 from '../assets/images/Infusion Pumps.jpg';
import image5 from '../assets/images/Laboratories Pharmacy Furniture.jpg';
import image6 from '../assets/images/Medical Cart.jpg';
import image7 from '../assets/images/Medical Gas System.jpg';
import image8 from '../assets/images/MedicalEquipment.jpg';
import image9 from '../assets/images/Nurse station Office Furniture.jpg';
import image10 from '../assets/images/Operating Room Equipment.jpg';
import image11 from '../assets/images/Ward Equipment.jpg';
import image12 from '../assets/images/Surgical Instruments.jpg';

const categories = [
  {
    name: "Ward Equipment",
    image: image11,
    icon: <FaBed className="text-red-500 text-xl" />,
    description: "Essential furniture and devices in patient wards to ensure comfort, safety, and accessibility during recovery."
  },
  {
    name: "Infusion Pumps",
    image: image4,
    icon: <FaSyringe className="text-red-500 text-xl" />,
    description: "Used to deliver fluids and medications in controlled amounts, crucial for precision treatment and ICU support."
  },
  {
    name: "Operating Room Equipment",
    image: image10,
    icon: <FaTools className="text-red-500 text-xl" />,
    description: "Comprises surgical lights, tables, and anesthesia machines vital for safe and effective operations."
  },
  {
    name: "Patient Monitoring",
    image: image5,
    icon: <FaHeartbeat className="text-red-500 text-xl" />,
    description: "Tracks vital signs like heart rate and oxygen levels in real-time for intensive and post-operative care."
  },
  {
    name: "Emergency & First Aid Equipment",
    image: image7,
    icon: <FaFirstAid className="text-red-500 text-xl" />,
    description: "Tools for rapid response in critical situations, including stretchers, defibrillators, and trauma kits."
  },
  {
    name: "Bed Head Units & Pendants",
    image: image1,
    icon: <FaProcedures className="text-red-500 text-xl" />,
    description: "Wall-mounted units that supply gas, power, and communication to the patient's bedside."
  },
  {
    name: "Nurse Call System",
    image: image8,
    icon: <FaPhoneAlt className="text-red-500 text-xl" />,
    description: "Allows patients to alert nurses quickly, improving emergency response and safety in healthcare settings."
  },
  {
    name: "Medical Gas Systems",
    image: image9,
    icon: <FaGasPump className="text-red-500 text-xl" />,
    description: "Centralized systems that supply oxygen, nitrous oxide, and vacuum suction in various hospital departments."
  },
  {
    name: "Physiotherapy / Isokinetics",
    image: image6,
    icon: <FaDumbbell className="text-red-500 text-xl" />,
    description: "Equipment designed to restore movement and function through physical rehabilitation therapies."
  },
  {
    name: "Sports & Gymnasium",
    image: image2,
    icon: <FaDumbbell className="text-red-500 text-xl" />,
    description: "Rehabilitative and conditioning gear for physical recovery and fitness post-treatment or surgery."
  },
  {
    name: "Hydrotherapy Equipment",
    image: image3,
    icon: <FaSwimmer className="text-red-500 text-xl" />,
    description: "Water-based therapy tools used in orthopedic, neurological, and chronic pain rehabilitation."
  },
  {
    name: "Shelving & Racks",
    image: image7,
    icon: <FaBoxes className="text-red-500 text-xl" />,
    description: "Durable storage systems for efficient organization of medical supplies and documents."
  },
  {
    name: "Hospital Supplies & Consumables",
    image: image4,
    icon: <FaBoxOpen className="text-red-500 text-xl" />,
    description: "Disposable or frequently used items like gloves, syringes, and cleaning agents essential to daily operations."
  },
  {
    name: "Carts and Trolleys",
    image: image12,
    icon: <FaTruck className="text-red-500 text-xl" />,
    description: "Mobility solutions for safely transporting medical equipment, medications, or patients."
  }
];

const ProductPage = ({ darkMode }) => {
  return (
    <section className={`min-h-screen px-6 py-10 transition-all duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-red-400" : "text-red-600"}`}>
        Our Medical Facilities
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl shadow-md transition-transform duration-300 overflow-hidden ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <p className="text-sm line-clamp-3 leading-relaxed text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
