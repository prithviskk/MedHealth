import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './route/AppRoutes';
import LoginPage from './pages/LoginPage';
import PatientAppointmentForm from './components/AppointmentForm.jsx'

const App = () => {
  const [darkMode, setDarkMode]=useState(false);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [isFormOpen, setIsFormOpen]=useState(false);
  const toggleModal =()=>setIsModalOpen(!isModalOpen);
  const toggleForm=()=>setIsFormOpen(!isFormOpen);
  
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen flex flex-col`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleModal={toggleModal} />
        {isFormOpen && (
              <PatientAppointmentForm
                darkMode={darkMode}
                onClose={() => setIsFormOpen(false)}
              />
        )}
        {isModalOpen && (
          <LoginPage isOpen={isModalOpen} darkMode={darkMode} toggleModal={toggleModal}/>
        )}
        
        <div className="flex-1">
            <AppRoutes darkMode={darkMode} isModalOpen={isModalOpen} toggleModal={toggleModal} toggleForm={toggleForm}/>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
