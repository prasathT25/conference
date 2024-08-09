import React from 'react'

export default function Heading() {
  return (
    <div>
        <section className='relative h-[700px] bg-hero bg-cover flex items-center'>
        <div className="absolute inset-0 bg-black opacity-75 flex items-center">
          <div className='max-w-[95rem] w-full mx-auto px-4'>
            <h1 className="text-white text-4xl md:text-5xl font-bold">2<sup>nd</sup> International Conference on</h1>
            <h2 className="text-white text-3xl md:text-4xl mt-5">Advances in Science, Engineering & Technology</h2>
            <h2 className="text-white text-3xl md:text-4xl mt-1">(ICASET-2024) | Hanoi, Vietnam</h2>
            <h2 className="text-white text-3xl md:text-4xl mt-1">Hybrid Conference</h2>
            <h2 className="text-white text-3xl md:text-4xl mt-1">(In Person + Online)</h2>
            <button className='mt-8 px-6 py-3 bg-red-600 text-white text-xl md:text-2xl rounded-lg font-bold'>
              GET STARTED
            </button>
          </div>
        </div>
      </section>


      <section>
        <div className='max-w-[85rem] w-full mx-auto px-4'>
          <div>
            <h2 className='text-[#3C486B] text-center mt-10 text-xl md:text-2xl'>
              Organized by: Institute For Educational Research and Publication (IFERP) -
            </h2>
            <h2 className='text-[#3C486B] text-center mt-6 text-xl md:text-2xl'>
              Theme: "Innovations Shaping Tomorrow: Exploring Frontiers in Science, Engineering & Technology"
            </h2>
          </div>
        </div>
      </section>


      <section>
      <div className='max-w-[85rem] w-full mx-auto px-4'>
  <div className="flex flex-col md:flex-row my-10 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl justify-center">
      <img className="md:h-[90px] lg:h-[130px] h-[110px] object-cover" src="/assets/log1.png" alt="Image 1" />
      <img className="md:h-[100px] lg:h-[130px] h-[130px] pl-5 object-cover" src="/assets/log2.png" alt="Image 2" />
      <img className="md:h-[100px] lg:h-[130px] h-[130px] object-cover" src="/assets/log3.png" alt="Image 3" />
    </div>
  </div>




          <div className="flex flex-col md:flex-row justify-center my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
              <div className="bg-[#3C486B] rounded-3xl shadow-lg overflow-hidden flex gap-2 items-start p-4">
                <div  className='h-full flex flex-col justify-center '>
                <img className="w-[50px] h-[50px] object-cover mb-4 md:mb-0 md:mr-4 " src="/assets/calendar.png" alt="Image 1" />
                </div>
                <div className="text-white text-start md:text-left h-full flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold">Conference Date</h3>
                  <p className='text-base md:text-lg'>23rd-24th August, 2024</p>
                </div>
              </div>

              <div className="bg-[#3C486B] rounded-3xl shadow-lg overflow-hidden  flex gap-2 items-start p-4">
               
                  
                  <div className='h-full flex flex-col justify-center'>
                <img className="w-[50px] h-[50px] object-cover mb-4 md:mb-0 md:mr-4" src="/assets/map.png" alt="Image 2" />
                </div>
                
                <div className="text-white text-start md:text-left h-full flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold">Conference Venue</h3>
                  <p className='text-base md:text-lg'>
                    Wyndham Garden | Hanoi<br />HH01 To Huu Street, Van Phuc Ward<br />Hanoi, Vietnam
                  </p>
                </div>
              </div>

              <div className="bg-[#3C486B] rounded-3xl shadow-lg overflow-hidden  flex gap-2 items-start p-4">
                
                <div className='h-full flex flex-col justify-center'>
                <img className="w-[50px] h-[50px] object-cover mb-4 md:mb-0 md:mr-4" src="/assets/person.png" alt="Image 3" />
                </div>
                
                <div className="text-white text-start md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold">Contact</h3>
                  <p className='text-base md:text-lg'>
                    Call: (+91) 76694 09022<br />Press 1 (For International Conferences<br />with Journal Publications)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-[120rem] w-full mx-auto px-4'>
          <p className='text-center text-5xl my-16 text-red-600 font-semibold md:text-4xl sm:text-3xl'>
            WELCOME TO 2<sup className='text-black'>nd</sup> ICASET
          </p>
          <p className='text-center  text-2xl text-[#3C486B] '>
            Welcome to the forefront of innovation, where resilience meets discovery. The ICASET conference invites you
            <br /> to an enriching experience in the vibrant city of Hanoi on the 23rd and 24th of August 2024. As we delve into
            <br /> the theme of "Innovations Shaping Tomorrow: Exploring Frontiers in Science, Engineering & Technology," we
            <br /> aim to foster a collaborative environment that transcends boundaries and drives progress.
          </p>
        </div>
      </section>

      <section>

        <div className='max-w-[120rem] w-full mx-auto px-4 mt-10'>
          <p className='text-center text-5xl my-16 text-red-600 font-semibold md:text-4xl sm:text-3xl'>
            PURPOSE OF 2<sup className='text-black'>nd</sup> ICASET
          </p>
          <p className='text-center text-2xl text-[#3C486B] font-semibold md:text-2xl sm:text-lg'>
            "Innovations Shaping Tomorrow: Exploring Frontiers in Science, Engineering & Technology"
          </p>
          <p className='text-center  text-2xl text-[#3C486B] my-7 md:text-2xl sm:text-base'>
            The primary purpose of ICASET is to provide a dynamic platform for researchers, academics, and industry
            <br /> professionals to converge and explore cutting-edge advancements in science, engineering, and
            <br /> technology. In an era marked by challenges, this conference stands as a beacon for nurturing resilience – a
            <br /> space where ideas flourish, collaborations thrive, and solutions emerge. ICASET seeks to transcend
            <br /> disciplinary silos, encouraging participants to engage in interdisciplinary dialogues that pave the way for
            <br /> resilient solutions to real-world challenges.
          </p>
        </div>
      </section>

      <section>
        <div className='max-w-[70rem] w-full mx-auto px-4'>
          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}
              <div className="rounded-3xl overflow-hidden flex flex-col items-center p-4">
                <img className="w-full h-[230px] object-cover mb-4" src="/assets/office1.jpeg" alt="Image 1" />
              </div>
              {/* Box 2 */}
              <div className="rounded-3xl overflow-hidden flex flex-col items-center p-4">
                <img className="w-full h-[230px] object-cover mb-4" src="/assets/office2.jpeg" alt="Image 2" />
              </div>
              {/* Box 3 */}
              <div className="rounded-3xl overflow-hidden flex flex-col items-center p-4">
                <img className="w-full h-[230px] object-cover mb-4" src="/assets/office3.jpeg" alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
