import React from 'react'

export default function Firstmiddle() {
  return (
    <div>
      <section>
        <div className='max-w-full w-full mx-auto ' >
          <div>
            <p className='text-center text-5xl  my-16 text-red-600 font-semibold'>IMPORTANT DATES</p>
          </div>
          <div className="relative my-10">
            <img src="/assets/seccalendar.jpeg" className="w-full h-[300px] object-cover" alt="Background opacity-[50%]" />
            <div className='absolute inset-0'>
              <div className='grid  lg:grid-cols-2 grid-cols-1 h-full w-full'>
                <div className=' lg:block hidden'>

                </div>
                <div className=' flex w-full gap-3 items-center '>
                {/* <div className="absolute inset-0 flex justify-end p-4">
              <div className="relative h-full"> */}
             
              

              <div className='flex flex-col gap-3 w-full mx-1 lg:items-end'>
                   {/* Box 1 */}
                <div className=" bg-white opacity-75 w-full h-[100px] lg:w-[200px] shadow-lg rounded-2xl flex flex-col justify-center">
                  <p className='text-center font-semibold md:text-[16px] text-[13px]'> Early Bird Registration Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold'>25<sup>th</sup> July 2024</p>
                </div>
                {/* Box 2 */}
                <div className=" bg-[#3C486B] opacity-75 w-full h-[100px] lg:w-[200px]  rounded-2xl">
                  <p className='text-center font-semibold md:text-[16px] text-[13px]'>Abstract Submission Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold'>2<sup>nd</sup>    August 2024</p>
                </div>
              </div>
               <div className='flex flex-col gap-3 w-full mx-1'>
                   {/* Box 3 */}
                <div className=" bg-[#3C486B]  opacity-75 w-full h-[100px] lg:w-[200px] shadow-lg rounded-2xl flex flex-col justify-center">
                  <p className='text-center font-semibold md:text-[16px] text-[13px]'>Full Paper Submission Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold'>7<sup>th</sup>    August 2024</p>
                </div>
                {/* Box 4 */}
                <div className=" bg-white opacity-75 w-full h-[100px] lg:w-[200px] shadow-lg rounded-2xl">
                  <p className='text-center font-semibold md:text-[16px] text-[13px]'>Registration Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold'>13<sup>th</sup>    August 2024</p>
                </div>
               </div>
               
            
              


            {/* </div>
                </div> */}
                        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-full w-full mx-auto  '>
          <div className='mb-10'>
            <img src="/assets/confimg.jpeg" className="w-full h-[500px] object-cover" alt="Background" />
          </div>
          <div>
            <p className='text-center text-5xl my-16 text-red-600 font-semibold md:text-4xl sm:text-3xl'>
              OBJECTIVE OF THE 2<sup className='text-[#3C486B]'>nd</sup> ICASET
            </p>
            <p className='text-2xl text-[#3C486B] text-left mx-auto md:w-[80%] sm:text-xl sm:leading-relaxed'>
              ICASET is driven by a multifaceted objective that goes beyond traditional conference goals. Our aim is to
              facilitate knowledge exchange, promote collaboration, and catalyze transformative breakthroughs in the
              fields of science, engineering, and technology.
            </p>
            <p className='text-2xl text-[#3C486B] text-left mx-auto md:w-[80%] my-10 sm:text-xl sm:leading-relaxed'>
              By providing a conducive environment for networking, learning, and idea-sharing, ICASET aspires to
              contribute to the global pool of knowledge and inspire innovative approaches to address the complexities
              of our ever-evolving world.
            </p>
          </div>
          <div className='mb-10'>
            <p className='text-center text-[#F9D949] bg-[#3C486B] p-5 text-4xl md:text-3xl sm:text-2xl'>
              ICASET-2024 Features of the Conference
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
