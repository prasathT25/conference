export default function AboutUs() {
    return (
      <div>
        <section>
          <div className='max-w-[80rem] w-full mx-auto px-4 mt-10 space-y-10'>
            
            {/* About Us Card */}
            <div className='bg-blue-100 shadow-lg rounded-lg p-6 md:p-8 mx-auto'>
              <p className='text-center text-3xl my-4 text-red-600 font-semibold md:text-5xl sm:text-3xl'>
                About Us
              </p>
              <p className='text-center text-[20px] text-[#3C486B] my-4 md:text-[20px] sm:text-base'>
                Welcome to the [Conference Name], a leading international platform dedicated to advancing the field of [Field/Industry]. Our conference unites global experts, researchers, industry leaders, and professionals to explore cutting-edge developments, share pioneering research, and foster collaboration that drives innovation and addresses the critical challenges facing our world today.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className='bg-blue-100 shadow-lg rounded-lg p-6 md:p-8 mx-auto'>
              <p className='text-center text-3xl my-4 text-red-600 font-semibold md:text-5xl sm:text-3xl'>
                Vision
              </p>
              <p className='text-center text-[20px] text-[#3C486B] my-4 md:text-[20px] sm:text-base'>
                To be the foremost global platform that inspires innovation, fosters collaboration, and drives the transformative impact of [Field/Industry] across industries and societies.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className='bg-blue-100 shadow-lg rounded-lg p-6 md:p-8 mx-auto'>
              <p className='text-center text-3xl my-4 text-red-600 font-semibold md:text-5xl sm:text-3xl'>
                Mission
              </p>
              <p className='text-left text-[20px] text-[#3C486B] my-4 md:text-[20px] sm:text-base'>
                Our mission is to:
              </p>
              <ul className='list-disc list-inside text-[20px] text-[#3C486B] space-y-4 md:text-[20px] sm:text-base'>
                <li>Advance Knowledge: Promote the dissemination of cutting-edge research and best practices in [Field/Industry].</li>
                <li>Foster Collaboration: Create a vibrant, inclusive community where academia, industry, and government can collaborate to solve complex challenges.</li>
                <li>Encourage Innovation: Inspire the development of innovative solutions that address current and emerging issues in [Field/Industry].</li>
                <li>Support Professional Growth: Provide opportunities for professional development, networking, and mentorship for participants at all career stages.</li>
              </ul>
            </div>
  
          </div>
        </section>
      </div>
    );
  }
  