import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } py-10 px-6 border-t border-red-500 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Logo + Info */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-red-500"
            >
              <path d="M22.672 15.226l-2.432.811..." />
            </svg>
            <span className="text-lg font-bold">
              Med<span className="text-red-500">Health</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-xs">
            Providing seamless healthcare management since 2010.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-bold text-sm text-red-500 mb-3">Services</h6>
          <ul className="space-y-1">
            {['Emergency Care', 'Outpatient Services', 'Specialist Consultations', 'Health Checkups'].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`block text-xs transition ${
                      darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-bold text-sm text-red-500 mb-3">Company</h6>
          <ul className="space-y-1">
            <li>
              <Link
                to="/about-us"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Careers
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                News & Events
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-bold text-sm text-red-500 mb-3">Legal</h6>
          <ul className="space-y-1">
            <li>
              <Link
                to="/privacy-policy"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Patient Rights
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-xs transition ${
                  darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                Data Protection
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MedHealth. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
