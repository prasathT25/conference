

export default function Logoanddate() {
  return (
    <div>
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
    </div>
  )
}
