import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import About from '../pages/About.jsx'
import AppointmentForm from '../components/AppointmentForm.jsx'
import PrivacyPolicy from '../pages/Footer Pages/PrivacyPolicy.jsx';
import TermsAndConditions from '../pages/Footer Pages/TermsAndConditions.jsx';
import Dashboard from '../pages/Dashboard.jsx'
import ProductPage from '../pages/ProductPage.jsx'

const AppRoutes = ({ darkMode, toggleModal, isModalOpen,toggleForm }) => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard darkMode={darkMode}/>}/> 
      <Route path='/products' element={<ProductPage darkMode={darkMode}/>}/>
      <Route path="/" element={<HomePage darkMode={darkMode} toggleForm={toggleForm}/>} />
      <Route path="/about-us" element={<About darkMode={darkMode} />} />
      <Route path="/form" element={<AppointmentForm darkMode={darkMode} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy darkMode={darkMode} />} />
      <Route path="/terms-of-service" element={<TermsAndConditions darkMode={darkMode} />} />
    </Routes>
  );
};

export default AppRoutes;
