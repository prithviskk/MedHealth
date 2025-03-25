import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ isOpen, toggleModal, darkMode }) => {
  const navigate=useNavigate();
  if (!isOpen) {
    navigate("/");
  }; 

  const handleSsubmit=async(e)=>{
    e.preventDefault();
    const resp=await axiosInstance.get()

  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div
        className={`p-6 sm:p-8 rounded-xl shadow-xl ${
          darkMode
            ? 'bg-[rgba(0,0,0,0.6)]'
            : 'bg-[rgba(255,255,255,0.6)]'
        } backdrop-blur-md border border-gray-300 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl`}
      >
        <h2 className={`text-xl sm:text-2xl ${darkMode ? 'text-white' : 'text-gray-800'} font-bold mb-6 text-center`}>
          Login to Your Account
        </h2>
        <form>
          {/* Username */}
          <div className="mb-4">
            <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-800'
              } focus:outline-none focus:ring-2 focus:ring-red-400`}
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-800'
              } focus:outline-none focus:ring-2 focus:ring-red-400`}
              placeholder="Enter password"
            />
          </div>

          {/* Modal Actions */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className={`px-3 py-2 text-sm font-semibold rounded-lg ${
                darkMode
                  ? 'bg-gray-800 text-white border border-red-500 hover:bg-red-500'
                  : 'bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white'
              } transition duration-300`}
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              type="submit"
              className={`px-3 py-2 text-sm font-semibold rounded-lg ${
                darkMode
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-red-500 text-white hover:bg-red-600'
              } transition duration-300`}
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('portal-root') 
  );
};

export default LoginPage;
