import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link from React Router
import logo from '../../public/logo.webp';

const Navbar = () => {
  return (
    <nav className="bg-[#fff] p-4 flex items-center shadow-lg mb-6 b rounded-md">
      <div className="flex space-x-4 ml-40">
        {/* Use Link component to navigate to the home page */}
        <Link to={'/'}>
        
        <div>
<img src={logo} alt="Logo" className="h-1/6 w-2/6" />
          </div>
          
        </Link>
        
        
      </div>

      <div className="flex-justify-end flex-grow ml-[25%] text-gray-700">
        <Link to="/user/dashboard">
        <a href="#" className="text-xl mx-4">
          User
        </a>
        </Link>
       <Link to={'/admin/dashboard'}>
       <a href="#" className="text-xl mx-4">
          Admin
        </a>
       </Link>
        <a href="#" className="text-xl mx-4">
          Courses
        </a>
      </div>
      <Outlet></Outlet>
    </nav>
  );
};

export default Navbar;
