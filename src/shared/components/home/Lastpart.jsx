import React from 'react'

export default function Lastpart() {
  return (
    <div>
       <section>
        <div className='max-w-[100rem] w-full mx-auto px-4'>
          <div className='text-center mb-10 my-10'>
            <p className='text-3xl md:text-5xl text-[#F45050] font-semibold'>
              Proceedings & Publications
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4'>

            <div className="flex justify-center">
              <img src="/assets/icon1.png" alt="Description 1" className=" h-[50px] md:h-[70px] object-cover rounded-lg" />
            </div>

            <div className="flex justify-center">
              <img src="/assets/icon2.png" alt="Description 2" className="h-[50px] md:h-[70px] object-cover rounded-lg" />
            </div>

            <div className="flex justify-center">
              <img src="/assets/icon3.png" alt="Description 3" className="h-[50px] md:h-[70px] object-cover rounded-lg" />
            </div>

            <div className="flex justify-center">
              <img src="/assets/icon4.png" alt="Description 4" className="h-[50px] md:h-[70px] object-cover rounded-lg" />
            </div>

            <div className="flex justify-center">
              <img src="/assets/icon5.png" alt="Description 5" className="h-[50px] md:h-[70px] object-cover rounded-lg" />
            </div>


          </div>
          <div>
            <p className='text-center text-3xl md:text-3xl  my-8 text-[#3C486B] font-semibold'>Note : ICASET-2024 proceedings series will be submitted to the Web of Science Book Citation Index (BkCI) and to SCOPUS for evaluation and indexing (T&C)*.</p>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-[85rem] w-full mx-auto px-4'>
          <div>
            <p className='text-center text-3xl md:text-5xl my-8 text-[#F45050] font-semibold'>Why Should You Attend?</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>New Learnings</h3>
              <p className='text-base text-[#3C486B] text-left'>Academic sessions, panel discussions, paper presentations, interactive workshops, and Q&A sessions.</p>
            </div>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>Publication Opportunities</h3>
              <p className='text-base text-[#3C486B] text-left'>Selected papers will get a chance to be published in top-rated journals such as Scopus.</p>
            </div>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>Strengthen Presentation Skills</h3>
              <p className='text-base text-[#3C486B] text-left'>Presenting your findings at ICASET-2024 helps you to develop and polish your presentation skills.</p>
            </div>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>Share Research with Peers</h3>
              <p className='text-base text-[#3C486B] text-left'>This conference gives you a chance to showcase your research to an audience of peers.</p>
            </div>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>Meet Experts for Collaborative Research</h3>
              <p className='text-base text-[#3C486B] text-left'>The conference brings together professionals, researchers, and experts in a specific field.</p>
            </div>
            <div className='border border-[#3C486B] p-6 rounded-lg flex flex-col items-center'>
              <h3 className='text-xl font-semibold mb-4 text-[#F45050]'>Lifetime Access to Research Presentations</h3>
              <p className='text-base text-[#3C486B] text-left'>Offering a lifelong opportunity means that individuals can continue to benefit from and view research presentations.</p>
            </div>
          </div>
        </div>
      </section>


      <section>
  <div className='max-w-full  w-full mx-auto '>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0  h-full bg-gray-200'>
      <div className='flex justify-center items-end'>
        <img src="/assets/systemconf.png" alt="Description" className="w-full h-[300px] lg:h-full xl:h-[300px] object-cover rounded-none" />
      </div>
      <div className='flex flex-col items-center  p-6  rounded-none '>
        <p className=' ml-5 text-1xl md:text-3xl my-5 text-[#3C486B] font-bold'> If Would Like to get updates;</p>
        <div>
        <form >
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 h-full '>
            <div className='flex flex-col justify-center'>
              <input type="text" id="name" name="name" placeholder='Name' className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm' required />
            </div>
            <div className='flex flex-col justify-center'>
              <input type="email" id="email" name="email" placeholder='Email' className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm ' required />
            </div>
            <div className='flex flex-col justify-center'>
              <input type="tel" id="phone" name="phone" placeholder='Phone' className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm' required />
            </div>
            <div className='flex flex-col justify-center md:mt-0 mt-3 '>
              <button type="submit" className='px-4 py-2 bg-[#F45050] text-white text-sm rounded-lg font-bold w-[300px] h-[50px]'>Submit</button>
            </div>
          </div>
        </form>
        </div>
      </div>
      
    </div>
    
  </div>
  
</section>
<div className='bg-[#3C486B] '>
      <p className='text-center text-3xl md:text-4xl mt-0 text-[#F45050] font-bold pt-3'>BE A VOLUNTEER</p>
      <p className=' text-1xl md:text-2xl mt-5 text-white  md:mx-[100px] justify-center mb-5 pb-5 mx-4'>Join us in shaping the future of knowledge advancement! We're inviting enthusiastic volunteers to be an integral part of the 2nd International Conference on Advances in Science, Engineering & Technology 2024 in Vietnam & Hanoi on August 23rd & 24th, 2024. organized by Institute For Educational Research and Publication (IFERP). Be part of a global community driving innovation and collaboration.</p>
    </div>
<section>
  <div className='max-w-[85rem] w-full mx-auto px-4'>
    <div>
      <p className='text-center text-3xl md:text-4xl my-5 text-[#F45050] font-bold'>Our Associates</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-5 mx-5'>
      <div className='flex justify-center items-center w-full'>
        <img src="/assets/imgg1.png" alt="Associate 1" className=" lg:h-[80px] h-[120px] w-full object-contain rounded-lg" />
      </div>
      <div className='flex justify-center items-center'>
        <img src="/assets/imgg2.png" alt="Associate 2" className="w-full lg:h-[80px]  h-[120px] object-contain rounded-lg" />
      </div>
       <div className='flex justify-center items-center'>
        <img src="/assets/imgg3.png" alt="Associate 3" className="w-full lg:h-[80px]  h-[120px] object-contain rounded-lg" />
      </div>
      <div className='flex justify-center items-center'>
        <img src="/assets/imgg4.png" alt="Associate 4" className="w-full lg:h-[80px]  h-[120px] object-contain rounded-lg" />
      </div>
      <div className='flex justify-center items-center'>
        <img src="/assets/imgg5.png" alt="Associate 5" className="w-full lg:h-[30px]  h-[120px] object-contain rounded-lg" />
      </div>
      <div className='flex justify-center items-center mb-5'>
        <img src="/assets/imgg6.png" alt="Associate 6" className="w-full lg:h-[80px]  h-[120px] object-contain rounded-lg" />
      </div> 
    </div>
  </div>
</section>

    </div>
  )
}
