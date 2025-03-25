import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import AppointmentForm from './components/AppointmentForm.jsx'
import PrivacyPolicy from './pages/Footer Pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/Footer Pages/TermsAndConditions.jsx';

const App = () => {
  const [darkMode, setDarkMode]=useState(false);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [isFormOpen, setIsFormOpen]=useState(false);

  // Toggle the modal open/close
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal1=()=> setIsFormOpen(!isFormOpen);
  
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen flex flex-col`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleModal={toggleModal} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/about-us" element={<About darkMode={darkMode} />} />
            <Route path="/form" element={<AppointmentForm darkMode={darkMode}/>}/>
            <Route path="/book-app" element={<LoginPage darkMode={darkMode} isOpen={isModalOpen} toggleModal={toggleModal} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy darkMode={darkMode}/>}/>
            <Route path="/terms-of-service" element={<TermsAndConditions darkMode={darkMode} />}/>

          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
