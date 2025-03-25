import { Link, useNavigate } from 'react-router-dom'; 
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import image from '../assets/images.png';

const Navbar = ({ darkMode, setDarkMode, toggleModal }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen]=useState(false); 
  const handleBookAppointmentClick=()=>{
    toggleModal(); // Trigger modal toggle
    navigate('/book-app');
  };

  return (
    <nav
      className={`${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } border-b border-red-500 px-4 md:px-6 py-3 shadow-md transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl md:text-2xl font-extrabold">
          <img src={image} alt="Logo" className="h-8 w-8 mr-2" />
          Med<span className="text-red-500">Health</span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex gap-6 text-sm">
          <Link
            key="home"
            to="/"
            className={`font-medium transition relative group ${
              darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-800 hover:text-red-500'
            }`}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          {['Products', 'Features', 'About Us'].map((item) => (
            <Link
              key={item.toLowerCase()}
              to={`/${item.toLowerCase().replace(/ /g,'-')}`}
              className={`font-medium transition relative group ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-800 hover:text-red-500'
              }`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`transition ${
              darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* "Book Appointment" Button */}
          <button
            onClick={handleBookAppointmentClick}
            className={`hidden md:block relative px-5 py-1.5 text-sm font-semibold rounded-full transition duration-300 border ${
              darkMode
                ? 'bg-gray-800 text-white border-red-500 hover:bg-red-500 hover:border-red-500'
                : 'bg-white text-red-500 border-red-500 hover:bg-red-500 hover:text-white'
            }`}
          >
            ➕ Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden block transition"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col gap-6 mt-20 px-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-red-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {['Products', 'Features', 'About Us'].map((item) => (
            <Link
              key={item.toLowerCase()}
              to={`/${item.toLowerCase().replace(/ /g,'-')}`}
              className="text-gray-300 hover:text-red-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Book Appointment in Mobile View */}
          <button
            onClick={handleBookAppointmentClick}
            className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            ➕ Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
