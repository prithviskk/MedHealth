import { useLocation } from 'react-router-dom';

const PaymentPage = ({ darkMode }) => {
  const location = useLocation();
  const appointmentData = location.state;

  const handlePaymentClick = () => {
    alert("This process is under maintenance. Please check back later.");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center 
      ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      <div className={`p-8 rounded-3xl shadow-2xl max-w-md w-full border 
        ${darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-300'}`}>

        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          Payment Portal
        </h1>

        {/* Appointment Details */}
        <div className="space-y-4 mb-6 text-base">
          <DetailRow label="Doctor" value={appointmentData.doctorName} />
          <DetailRow label="Specialty" value={appointmentData.specialty} />
          <DetailRow label="Your Name" value={appointmentData.name} />
          <DetailRow label="Age" value={appointmentData.age} />
          <DetailRow label="Gender" value={appointmentData.gender} />
          <DetailRow label="Time Slot" value={appointmentData.timeSlot} />
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Fee: ₹500</p>
          <button
            onClick={handlePaymentClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full shadow-md transition duration-300 transform hover:scale-105"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default PaymentPage;
