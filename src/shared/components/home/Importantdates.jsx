

export default function Importantdates() {
  return (
    <div>
      <section>
        <div className='max-w-full w-full mx-auto ' >
          <div>
            <p className='text-center text-3xl md:text-5xl  my-16 text-red-600 font-semibold'>IMPORTANT DATES</p>
          </div>
          <div className="relative mt-10">
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
                <div className=" bg-[#3C486B] opacity-75 w-full h-[100px] lg:w-[200px]  rounded-2xl flex flex-col justify-center">
                  <p className='text-center font-semibold md:text-[16px] text-[13px] text-white '>Abstract Submission Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold text-white'>2<sup>nd</sup>    August 2024</p>
                </div>
              </div>
               <div className='flex flex-col gap-3 w-full mx-1'>
                   {/* Box 3 */}
                <div className=" bg-[#3C486B]  opacity-75 w-full h-[100px] lg:w-[200px] shadow-lg rounded-2xl flex flex-col justify-center">
                  <p className='text-center font-semibold md:text-[16px] text-[13px] text-white'>Full Paper Submission Deadline</p>
                  <p className='text-center text-[16px] md:text-[20px] font-bold text-white'>7<sup>th</sup>    August 2024</p>
                </div>
                {/* Box 4 */}
                <div className=" bg-white opacity-75 w-full h-[100px] lg:w-[200px] shadow-lg rounded-2xl flex flex-col justify-center">
                  <p className='text-center font-semibold md:text-[16px] text-[13px] '>Registration Deadline</p>
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
    </div>
  )
}
