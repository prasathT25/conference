import React from 'react'

export default function Footer() {
  return (
    <div>
    <section>
      <div className='max-w-full w-full mx-auto px-4 bg-yellow-100 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-[#3C486B] justify-center'>
          
          <div className='flex flex-col items-center'>
            <img src="/assets/images/conflogo.png" alt="Small Image" className="lg:h-[80px] h-[50px] object-cover mb-4" />
            <p className='text-sm md:text-base text-start md:ps-12'>
              2nd International conference on Advances in Science, Engineering & Technology (ICASET), which will transpire on the 23rd-24th, August 2024, Hanoi, Vietnam
            </p>
          </div>
  
          <div className='flex flex-col items-center'>
            <h3 className='text-lg md:text-2xl font-bold mb-4 text-[#F45050] text-center'>Useful Links</h3>
            <p className='text-sm md:text-base mb-2 text-center'>Home</p>
            <p className='text-sm md:text-base mb-2 text-center'>About</p>
            <p className='text-sm md:text-base mb-2 text-center'>Registration</p>
            <p className='text-sm md:text-base mb-2 text-center'>Contact Us</p>
          </div>
  
          <div className='flex flex-col items-center'>
            <h3 className='text-lg md:text-2xl font-bold mb-4 text-[#3C486B] text-center'>Find Us</h3>
            <div className='flex items-center mb-2'>
              <img src="/assets/phone.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>+91 8122268465</p>
            </div>
            <div className='flex items-center mb-2'>
              <img src="/assets/message.png" alt="Email Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>info@icaset.in</p>
            </div>
            <div className='flex items-center'>
              <img src="/assets/location.png" alt="Location Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>Hanoi, Vietnam</p>
            </div>
          </div>
  
          <div className='flex flex-col items-center'>
            <h3 className='text-lg md:text-2xl font-bold mb-4 text-[#3C486B] text-center'>Social</h3>
            <div className='flex items-center mb-2'>
              <img src="/assets/Facebook.png" alt="Facebook Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>Facebook</p>
            </div>
            <div className='flex items-center mb-2 mr-5'>
              <img src="/assets/twit.png" alt="Twitter Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>Twitter</p>
            </div>
            <div className='flex items-center mb-2 ml-4'>
              <img src="/assets/insta.png" alt="Instagram Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>Instagram</p>
            </div>
            <div className='flex items-center'>
              <img src="/assets/linkedin.png" alt="LinkedIn Icon" className="w-6 h-6 mr-2" />
              <p className='text-sm md:text-base'>LinkedIn</p>
            </div>
          </div>
  
        </div>
        
      </div>
      <div>
            <p className="text-center text-[10px] md:text-[16px] my-3">© 2024 IFERP - All rights reserved.</p>
        </div>
    </section>
  </div>
  



  
  )
}
