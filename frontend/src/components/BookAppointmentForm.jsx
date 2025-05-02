import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

const BookAppointmentForm = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    timeSlot: '',
  });

  const [doctorData, setDoctorData] = useState({ name: "", field: "" });

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  useEffect(() => {
    const storedDoctor = localStorage.getItem("selectedDoctor");
    if (storedDoctor) setDoctorData(JSON.parse(storedDoctor));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        doctorName: doctorData.name,
        specialty: doctorData.field,
        ...formData,
      },
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
      : 'bg-gradient-to-br from-white to-gray-200 text-gray-900'}`}>
      <div className={`w-full max-w-xl p-10 rounded-3xl shadow-2xl backdrop-blur-xl border 
        ${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/60 border-gray-300'}`}>

        <h2 className="text-4xl font-extrabold mb-8 text-center text-red-500 ">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput label="Doctor" value={doctorData.name} readOnly />
          <FormInput label="Specialty" value={doctorData.field} readOnly />
          <FormInput
            label="Your Name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          <FormInput
            label="Age"
            type="number"
            required
            value={formData.age}
            onChange={e => setFormData({ ...formData, age: e.target.value })}
          />

          <FormSelect
            label="Gender"
            required
            onChange={e => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </FormSelect>

          <FormSelect
            label="Choose Time Slot"
            required
            onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
          >
            <option value="">Select a time</option>
            {timeSlots.map(slot => <option key={slot}>{slot}</option>)}
          </FormSelect>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({ label, value, readOnly = false, onChange, type = "text", required = false }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
      className={`w-full px-4 py-2 rounded-lg border 
        ${readOnly ? 'bg-gray-100 dark:bg-gray-200 opacity-70 cursor-not-allowed' : 'bg-white '}
        border-gray-300 dark:border-gray-700 
        text-gray-900 dark:text-black 
        placeholder-gray-400 dark:placeholder-gray-500 
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent 
        transition duration-200 ease-in-out shadow-sm`}
    />
  </div>
);

const FormSelect = ({ label, children, onChange, required }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <select
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 rounded-lg border 
        bg-white  
        text-gray-900 dark:text-black 
        border-gray-300 dark:border-gray-700 
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent 
        transition duration-200 ease-in-out shadow-sm"
    >
      {children}
    </select>
  </div>
);

export default BookAppointmentForm;
