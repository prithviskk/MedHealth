import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import About from './pages/About';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal open/close
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen flex flex-col`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleModal={toggleModal} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/book-app" element={<LoginPage darkMode={darkMode} isOpen={isModalOpen} toggleModal={toggleModal} />} />
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
