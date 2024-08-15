import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
    let isMounted=true;
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };

    useEffect(() => {
      if(isMounted){
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
    return () => {
      isMounted=false
    }
    }, []);
  


  return (
    <header className="bg-white shadow py-4">
      <nav className="max-w-[108rem] w-full mx-auto justify-between items-center px-4 ">
        <div className='flex justify-between  items-center'>
        <div className="flex items-center space-x-8">
          <img src="assets/images/conflogo.png" alt="Logo" className="h-[60px] 2xl:h-[90px] 2xl:w-[170px] md:h-[50px] md:w-[90px] xl-h-[50px] xl:w-[120px] " />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`hidden lg:flex flex-col lg:flex-row lg:gap-16  ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:gap-3 md:gap-1 xl:gap-5 2xl:gap-10">
            <li><Link to="/" className="text-black-700 font-semibold 2xl:text-[20px] xl:text-[17px]  hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px]">About</Link></li>
            <li><Link to="/call" className="text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px]">Call</Link></li>
            <li><Link to="/rules" className="text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px]">Rules</Link></li>
            <li><Link to="/registration" className="text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px]">Registration</Link></li>
            <li><Link to="/contact" className="text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px] text-nowrap">Contact Us</Link></li>
            <li className=' bg-red-500 px-2 '><Link to="/blog" className=" text-nowrap text-black-700 font-semibold hover:text-blue-600 2xl:text-[20px] xl:text-[17px]  text[20px] text-center text-white  rounded-lg">Pre Conference Webinar</Link></li>
            <li className='lg:mb-3 md:mr-16' id="google_translate_element"></li>
          </ul>
        </div>
        </div>
        
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <ul className="flex flex-col space-y-4 mt-4 px-3">
            <li><Link to="/" className="text-black-700 font-semibold text-[20px] hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">About</Link></li>
            <li><Link to="/call" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Call</Link></li>
            <li><Link to="/rules" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Rules</Link></li>
            <li><Link to="/registration" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Registration</Link></li>
            <li><Link to="/contact" className="text-black-700 font-semibold hover:text-blue-600 text-[20px]">Contact Us</Link></li>
            <li><Link to="/blog" className="text-black-700 font-semibold hover:text-blue-600 bg-red-500 text-[10px] text-white px-2 py-2 rounded-lg">Pre Conference Webinar</Link></li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

