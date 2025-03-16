import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Item 1</Link></li>
            <li>
              <Link to="/parent">Parent</Link>
              <ul className="p-2">
                <li><Link to="/submenu1">Submenu 1</Link></li>
                <li><Link to="/submenu2">Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link to="/item3">Item 3</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Item 1</Link></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><Link to="/h2">Submenu 1</Link></li>
                <li><Link to="/submenu2">Submenu 2</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/item3">Item 3</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <Link to="/button" className="btn">Button</Link>
      </div>
    </div>
  );
};

export default Navbar;
