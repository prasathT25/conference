import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="max-w-[95rem] w-full mx-auto justify-between items-center p-4">
        <div className='flex justify-between  items-center'>
        <div className="flex items-center space-x-8">
          <img src="assets/images/conflogo.png" alt="Logo" className="h-[60px] md:h-[80px]" />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`hidden lg:flex flex-col lg:flex-row lg:gap-12 ml-[200px] ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:gap-12">
            <li><Link to="/" className="text-black-700 font-semibold text-[20px] hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">About</Link></li>
            <li><Link to="/registration" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Registration</Link></li>
            <li><Link to="/contact" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Contact Us</Link></li>
            <li className=' bg-red-500 px-1 '><Link to="/blog" className="text-black-700 font-semibold hover:text-blue-600 text-[20px] md:text-[18px] text-center text-white  rounded-lg">Pre Conference Webinar</Link></li>
          </ul>
        </div>
        </div>
        
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <ul className="flex flex-col space-y-4 mt-4 px-3">
            <li><Link to="/" className="text-black-700 font-semibold text-[20px] hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">About</Link></li>
            <li><Link to="/registration" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Registration</Link></li>
            <li><Link to="/contact" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Contact Us</Link></li>
            <li><Link to="/blog" className="text-black-700 font-semibold hover:text-blue-600 bg-red-500 text-[10px] text-white px-2 py-2 rounded-lg">Pre Conference Webinar</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
