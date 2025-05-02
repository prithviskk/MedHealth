import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';
import image1 from '../assets/doctors/mal_doc_1.webp'
import image2 from '../assets/doctors/fem_doc_1.jpg'
import image3 from '../assets/doctors/mal_doc_2.jpg'
import image4 from '../assets/doctors/mal_doc_3.jpg'
import image5 from '../assets/doctors/mal_doc_4.jpg'
import image6 from '../assets/doctors/mal_doc_5.jpg'
import image7 from '../assets/doctors/fem_doc_2.jpg'
import image8 from '../assets/doctors/fem_doc_4.webp'
import image9 from '../assets/doctors/fem_doc_5.jpg' 

const doctors = [
  // Cardiologists (3)
  {
    id: 1,
    name: 'Dr. Arjun Mehta',
    specialty: 'Cardiologist',
    experience: '10 years',
    image: image1,
    description: 'Expert in cardiac surgeries and internal medicine.',
  },
  {
    id: 11,
    name: 'Dr. Kavita Rao',
    specialty: 'Cardiologist',
    experience: '9 years',
    image: image7,
    description: 'Specializes in heart rhythm disorders.',
  },
  {
    id: 12,
    name: 'Dr. Vinod Patel',
    specialty: 'Cardiologist',
    experience: '15 years',
    image: 'https://via.placeholder.com/150',
    description: 'Interventional cardiology and heart failure expert.',
  },

  // Pediatricians (3)
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    experience: '7 years',
    image: image2,
    description: 'Specialist in child care and developmental issues.',
  },
  {
    id: 13,
    name: 'Dr. Deepak Lamba',
    specialty: 'Pediatrician',
    experience: '5 years',
    image: 'https://via.placeholder.com/150',
    description: 'Focuses on immunization and nutrition.',
  },
  {
    id: 14,
    name: 'Dr. Neeru Bajaj',
    specialty: 'Pediatrician',
    experience: '8 years',
    image: 'https://via.placeholder.com/150',
    description: 'Treats infants and adolescent growth conditions.',
  },

  // Neurologists (3)
  {
    id: 3,
    name: 'Dr. Rahul Verma',
    specialty: 'Neurologist',
    experience: '12 years',
    image: image4,
    description: 'Expert in treating neurological disorders.',
  },
  {
    id: 15,
    name: 'Dr. Farah Khan',
    specialty: 'Neurologist',
    experience: '10 years',
    image: image9,
    description: 'Specialist in stroke and epilepsy management.',
  },
  {
    id: 16,
    name: 'Dr. Mohani Nair',
    specialty: 'Neurologist',
    experience: '13 years',
    image: image8,
    description: 'Handles movement disorders and Parkinson’s.',
  },

  // Dermatologists (3)
  {
    id: 4,
    name: 'Dr. Sneha Iyer',
    specialty: 'Dermatologist',
    experience: '5 years',
    image: image7,
    description: 'Specialist in skin and cosmetic treatments.',
  },
  {
    id: 17,
    name: 'Dr. Anjali Ghosh',
    specialty: 'Dermatologist',
    experience: '6 years',
    image: image8,
    description: 'Laser treatments and acne management expert.',
  },
  {
    id: 18,
    name: 'Dr. Ramesh Bhat',
    specialty: 'Dermatologist',
    experience: '9 years',
    image: image7,
    description: 'Treats eczema, psoriasis, and pigmentation.',
  },

  // Orthopedic (3)
  {
    id: 5,
    name: 'Dr. Rakesh Nair',
    specialty: 'Orthopedic',
    experience: '12 years',
    image: image5,
    description: 'Orthopedic surgeon specialized in joint replacement.',
  },
  {
    id: 19,
    name: 'Dr. Shalini Menon',
    specialty: 'Orthopedic',
    experience: '7 years',
    image: 'https://via.placeholder.com/150',
    description: 'Focus on sports injuries and rehab.',
  },
  {
    id: 20,
    name: 'Dr. Abhishek Joshi',
    specialty: 'Orthopedic',
    experience: '11 years',
    image: 'https://via.placeholder.com/150',
    description: 'Spine and bone trauma specialist.',
  },

  // Gynecologists (3)
  {
    id: 6,
    name: 'Dr. Neha Singh',
    specialty: 'Gynecologist',
    experience: '8 years',
    image: 'https://via.placeholder.com/150',
    description: 'Women’s health and prenatal expert.',
  },
  {
    id: 21,
    name: 'Dr. Ritu Sinha',
    specialty: 'Gynecologist',
    experience: '10 years',
    image: 'https://via.placeholder.com/150',
    description: 'Fertility treatments and menstrual issues.',
  },
  {
    id: 22,
    name: 'Dr. Meena Kapoor',
    specialty: 'Gynecologist',
    experience: '6 years',
    image: 'https://via.placeholder.com/150',
    description: 'Specializes in obstetrics and delivery.',
  },

  // Others (keep original)
  {
    id: 7,
    name: 'Dr. Manoj Das',
    specialty: 'Oncologist',
    experience: '9 years',
    image: image6,
    description: 'Cancer specialist with experience in chemotherapy.',
  },
  {
    id: 8,
    name: 'Dr. Alka Joshi',
    specialty: 'ENT Specialist',
    experience: '6 years',
    image: image3,
    description: 'Expert in ear, nose and throat disorders.',
  },
  {
    id: 9,
    name: 'Dr. Sunil Rao',
    specialty: 'Psychiatrist',
    experience: '11 years',
    image: image6,
    description: 'Mental health expert with therapy experience.',
  },
  {
    id: 10,
    name: 'Dr. Ritvik Kapoor',
    specialty: 'Dentist',
    experience: '4 years',
    image: image3,  // Corrected image assignment
    description: 'Specialist in cosmetic and restorative dentistry.',
  },
];


const BookDoctorPage = ({ darkMode, toggleModal }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAuthWarning, setShowAuthWarning] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  const { isAuthenticated,setRedirectAfterLogin } = useAuthStore();
  const navigate = useNavigate();

  const handleBookAppointment = (id) => {
    localStorage.setItem("selectedDoctor", JSON.stringify({ 
      name: selectedDoctor.name, 
      field: selectedDoctor.specialty 
    }));
    if (!isAuthenticated) {
      setRedirectAfterLogin(`book-appointment/${id}`);
      setShowAuthWarning(true);
      setTimeout(() => {
        toggleModal(); 
      }, 1500); 
  
    } else {
      navigate(`/book-appointment/${id}`);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
    setShowAuthWarning(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (showAuthWarning) {
      const timer = setTimeout(() => setShowAuthWarning(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAuthWarning]);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.experience.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty = specialtyFilter ? doctor.specialty === specialtyFilter : true;
    const matchesExperience = experienceFilter ? doctor.experience === experienceFilter : true;

    return matchesSearch && matchesSpecialty && matchesExperience;
  });

  const uniqueSpecialties = [...new Set(doctors.map(doc => doc.specialty))];
  const uniqueExperiences = [...new Set(doctors.map(doc => doc.experience))];

  return (
    <div className={`min-h-screen px-6 py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600 dark:text-red-400">
        Book a Doctor
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div className="flex flex-col w-full sm:w-1/3">
          <label className={`mb-1 font-semibold ${darkMode ? 'text-white' : 'text-red-600'}`}>Search</label>
          <input
            type="text"
            placeholder="Search by name, specialty or experience..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/3">
          <label className={`mb-1 font-semibold ${darkMode ? 'text-white' : 'text-red-600'}`}>Specialty</label>
          <select
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Specialties</option>
            {uniqueSpecialties.map((specialty, idx) => (
              <option key={idx} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full sm:w-1/3">
          <label className={`mb-1 font-semibold ${darkMode ? 'text-white' : 'text-red-600'}`}>Experience</label>
          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Experiences</option>
            {uniqueExperiences.map((exp, idx) => (
              <option key={idx} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition duration-300
              ${darkMode ? 'bg-gray-800 text-white' : 'bg-white border border-red-100 text-gray-800'}`}
            onClick={() => {
              setSelectedDoctor(doctor);
              setShowModal(true);
              setShowAuthWarning(false);
            }}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover object-right-top top rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{doctor.specialty}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.experience}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedDoctor && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className={`rounded-lg p-8 max-w-lg w-full relative shadow-xl
            ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <button
              className="absolute top-2 right-4 text-2xl font-bold hover:text-red-600"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-full h-48 object-cover object-right-top rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h3>
            <p className="mb-1"><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p className="mb-1"><strong>Experience:</strong> {selectedDoctor.experience}</p>
            <p className="mb-4">{selectedDoctor.description}</p>

            {showAuthWarning && (
              <div className="text-red-600 font-semibold text-center mb-2">
                You need to be signed in to book an appointment!
              </div>
            )}

            <button
              onClick={() => handleBookAppointment(selectedDoctor.id)}
              className="mt-2 w-full py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDoctorPage;
