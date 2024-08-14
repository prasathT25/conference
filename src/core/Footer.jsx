export default function Footer() {
  return (
    <div>
      <section className='c lg:h-[280px] md:h-[380px] h-[800px]  '>
      {/* <div className="bg-[#F9D949] w-full h-[100px]"></div> */}
        <div className='lg:max-w-[85rem] md:max-w-[55rem] w-full mx-auto px-4  py-8 '>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-white '>
            
            <div className='flex flex-col'>
              <img src="/assets/images/conflogo.png" alt="Small Image" className="lg:h-[50px] lg:w-[170px] h-[100px] w-[350px] md:h-[40px] md:w-[120px] object-cover mb-4" />
              <p className='text-sm md:text-base text-start'>
                2nd International conference on Advances in Science, Engineering & Technology (ICASET), which will transpire on the 23rd-24th, August 2024, Hanoi, Vietnam
              </p>
            </div>
    
            <div className='flex flex-col lg:ml-5 '>
              <h3 className='text-lg md:text-2xl font-bold mb-4  text-[#F45050]'>Useful Links</h3>
              <a href="/" className='text-sm md:text-base mb-2'>Home</a>
              <a href="/about" className='text-sm md:text-base mb-2'>About</a>
              <a href="/registration" className='text-sm md:text-base mb-2'>Registration</a>
              <a href="/contact" className='text-sm md:text-base mb-2'>Contact Us</a>
            </div>
    
            <div className='flex flex-col'>
              <h3 className='text-lg md:text-2xl font-bold mb-4 text-red-500'>Find Us</h3>
              <div className='flex items-center mb-2'>
                <img src="/assets/phone.png" alt="Phone Icon" className="w-6 h-6 mr-2 bg-white " />
                <p className='text-sm md:text-base '>+91 8122268465</p>
              </div>
              <div className='flex items-center mb-2'>
                <img src="/assets/message.png" alt="Email Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>info@icaset.in</p>
              </div>
              <div className='flex items-center'>
                <img src="/assets/location.png" alt="Location Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>Hanoi, Vietnam</p>
              </div>
            </div>
    
            <div className='flex flex-col'>
              <h3 className='text-lg md:text-2xl font-bold mb-4  text-red-500'>Social</h3>
              <div className='flex items-center mb-2'>
                <img src="/assets/Facebook.png" alt="Facebook Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>Facebook</p>
              </div>
              <div className='flex items-center mb-2'>
                <img src="/assets/twit.png" alt="Twitter Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>Twitter</p>
              </div>
              <div className='flex items-center mb-2'>
                <img src="/assets/insta.png" alt="Instagram Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>Instagram</p>
              </div>
              <div className='flex items-center'>
                <img src="/assets/linkedin.png" alt="LinkedIn Icon" className="w-6 h-6 mr-2  bg-white" />
                <p className='text-sm md:text-base'>LinkedIn</p>
              </div>
            </div>
  
          </div>
        </div>
       
      </section>
      <div>
          <p className="text-center text-[10px] md:text-[16px] my-3">© 2024 IFERP - All rights reserved.</p>
        </div>
    </div>
  );
}
