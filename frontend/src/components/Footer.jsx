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
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className={`block text-xs transition ${
                      darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-bold text-sm text-red-500 mb-3">Company</h6>
          <ul className="space-y-1">
            {['About Us', 'Careers', 'Contact', 'News & Events'].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`block text-xs transition ${
                    darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-bold text-sm text-red-500 mb-3">Legal</h6>
          <ul className="space-y-1">
            {['Privacy Policy', 'Terms of Service', 'Patient Rights', 'Data Protection'].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`block text-xs transition ${
                    darkMode ? 'hover:text-red-400' : 'hover:text-red-500'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
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
