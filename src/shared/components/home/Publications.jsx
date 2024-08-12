

export default function Publications() {
  return (
    <div>
       <section>
        <div className='max-w-[100rem] w-full mx-auto px-4'>
          <div className='text-center mb-20 my-15 mt-20'>
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
    </div>
  )
}
