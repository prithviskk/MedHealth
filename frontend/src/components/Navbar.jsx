import { Link, useNavigate } from 'react-router-dom'; 
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import image from '../assets/images.png';
import { useAuthStore } from '../store/useAuthStore.js';

const Navbar = ({ darkMode, setDarkMode, toggleModal }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { isAuthenticated, logout } = useAuthStore();

  const handleLoginClick = () => {
    toggleModal(); 
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    } border-b border-red-500 px-4 md:px-6 py-3 shadow-md transition-colors duration-300 sticky top-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl md:text-2xl font-extrabold">
          <img src={image} alt="Logo" className="h-8 w-8 mr-2" />
          Med<span className="text-red-500">Health</span>
        </Link>

        {/* Center Navigation Links (Desktop Only) */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link
            to="/"
            className={`font-medium transition relative group ${
              darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-800 hover:text-red-500'
            }`}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          {['Products', 'Services', 'About Us'].map((item) => (
            <Link
              key={item.toLowerCase()}
              to={`/${item.toLowerCase().replace(/ /g, '-')}`}
              className={`font-medium transition relative group ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-800 hover:text-red-500'
              }`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {isAuthenticated && (
            <Link
              to="/dashboard"
              className={`font-medium transition relative group ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-800 hover:text-red-500'
              }`}
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
        </div>

        {/* Right Side Icons */}
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

          {/* Login / Logout CTA (Only on md and up) */}
          {!isAuthenticated ? (
            <button
              onClick={handleLoginClick}
              className={`hidden md:block relative px-5 py-1.5 text-sm font-semibold rounded-full transition duration-300 border ${
                darkMode
                  ? 'bg-gray-800 text-white border-red-500 hover:bg-red-500 hover:border-red-500'
                  : 'bg-white text-red-500 border-red-500 hover:bg-red-500 hover:text-white'
              }`}
            >
              ➕ Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className={`hidden md:block relative px-5 py-1.5 text-sm font-semibold rounded-full transition duration-300 border ${
                darkMode
                  ? 'bg-gray-800 text-white border-yellow-400 hover:bg-yellow-500 hover:text-black'
                  : 'bg-white text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white'
              }`}
            >
              🔓 Logout
            </button>
          )}

          {/* Hamburger Icon (Only on sm) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Only on sm) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50 shadow-xl`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={26} className="text-gray-400 hover:text-white transition" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6 px-6">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-red-400 transition"
          >
            Home
          </Link>

          {['Products', 'Services', 'About Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-red-400 transition"
            >
              {item}
            </Link>
          ))}

          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-red-400 transition"
            >
              Dashboard
            </Link>
          )}

          {!isAuthenticated ? (
            <button
              onClick={() => {
                handleLoginClick();
                setIsMenuOpen(false);
              }}
              className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              ➕ Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-yellow-400 hover:text-yellow-300 transition mt-2"
            >
              🔓 Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
