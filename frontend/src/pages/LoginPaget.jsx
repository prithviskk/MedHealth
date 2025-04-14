import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';

const LoginPaget = ({ isOpen, toggleModal, darkMode }) => {
  const navigate = useNavigate();
  const { login, signup } = useAuthStore();
  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('user'); // State for role toggle

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState(''); // For mobile number
  const [specialization, setSpecialization] = useState(''); // Doctor-specific field
  const [experience, setExperience] = useState(''); // Doctor-specific field
  const [errorMsg, setErrorMsg] = useState('');

  // REGEX validators for signup only
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const mobileRegex = /^[0-9]{10}$/; // Mobile number regex

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Reset error

    // Validation based on role
    if (mode === 'signup') {
      if (!nameRegex.test(fullName)) {
        return setErrorMsg("Full name must be at least 3 characters and contain only letters and spaces.");
      }
      if (!usernameRegex.test(username)) {
        return setErrorMsg("Username must be at least 4 characters and contain only letters and numbers.");
      }
      if (!emailRegex.test(email)) {
        return setErrorMsg("Please enter a valid email address.");
      }
      if (!passwordRegex.test(password)) {
        return setErrorMsg("Password must be 6+ characters, include a capital letter, number, and special character.");
      }

      // Doctor-specific validation
      if (role === 'doctor') {
        if (!mobileRegex.test(mobile)) {
          return setErrorMsg("Please enter a valid mobile number.");
        }
        if (!specialization || !experience) {
          return setErrorMsg("Specialization and experience are required for doctors.");
        }
      }
    }

    let result;
    if (mode === 'login') {
      result = await login(email, password); // Server-side validation
    } else {
      result = await signup({ fullName, email, username, password, role, mobile, specialization, experience });
    }

    if (!result || typeof result.success === 'undefined') {
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    if (result.success) {
      toggleModal();
      if (mode === 'login') navigate("/dashboard");
    } else {
      setErrorMsg(result.error || 'Authentication failed.');
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className={`p-6 rounded-xl shadow-xl ${darkMode ? 'bg-[rgba(0,0,0,0.6)]' : 'bg-[rgba(255,255,255,0.6)]'} border border-gray-300 w-full max-w-md`}>
        <h2 className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-800'} font-bold mb-6 text-center`}>
          {mode === 'login' ? 'Login to Your Account' : 'Create a New Account'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
            >
              <option value="user">User</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {mode === 'signup' && role === 'doctor' && (
            <>
              <div className="mb-4">
                <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mobile Number</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Specialization</label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
                  placeholder="Enter your specialization"
                  required
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Experience (in years)</label>
                <input
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
                  placeholder="Enter years of experience"
                  required
                />
              </div>
            </>
          )}

          {mode === 'signup' && role === 'user' && (
            <div className="mb-4">
              <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
                placeholder="Enter full name"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-400`}
              placeholder="Enter your password"
              required
            />
          </div>

          {errorMsg && (
            <p className="text-red-500 text-sm text-center mb-4">{errorMsg}</p>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className={`px-3 py-2 text-sm font-semibold rounded-lg ${darkMode ? 'bg-gray-800 text-white border border-red-500 hover:bg-red-500' : 'bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white'} transition duration-300`}
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              type="submit"
              className={`px-3 py-2 text-sm font-semibold rounded-lg ${darkMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-500 text-white hover:bg-red-600'} transition duration-300`}
            >
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <p className={`text-sm text-center mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {mode === 'login' ? (
            <>
              Don’t have an account?{' '}
              <span className="text-red-500 hover:underline cursor-pointer" onClick={() => setMode('signup')}>
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="text-red-500 hover:underline cursor-pointer" onClick={() => setMode('login')}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default LoginPaget;
