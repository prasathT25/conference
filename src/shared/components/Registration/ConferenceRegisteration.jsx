import React from 'react'

export default function ConferenceRegisteration() {
  return (
    <div>
       <section>
                <div className='max-w-full w-full mx-auto '>
                    <div className='relative w-full'>
                        <img src="/assets/contactimg.png" alt="Description" className="w-full md:h-[200px] h-[100px] object-cover rounded-none" />
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
                            <h1 className='text-xl md:text-3xl font-bold'>Conference Registration </h1>
                            <p className='text-sm md:text-base mt-2'>Home / Conference Registration </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto px-4'>
                    <div>
                        <h1 className='text-2xl md:text-4xl font-bold text-center my-6 md:my-10 text-[#F45050]'>Registration Fee</h1>
                        <p className='text-left text-sm md:text-base md:mx-[260px] text-[#3C486B]'>
                            Secure your spot at the upcoming ICASET - 24! Register now to unlock a world of insights and innovations in science, engineering, and technology. Choose the registration package that suits you best and be part of this transformative conference. Don't miss out on the opportunity to connect, learn, and shape the future of research in the dynamic landscape of science, engineering, and technology.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto px-4'>
                    <div>
                        <h1 className='text-2xl md:text-5xl font-bold text-center my-6 md:my-10 text-[#F45050]'>Proceedings & Publications</h1>
                        <p className='text-left text-sm md:text-base md:mx-[260px] text-[#3C486B]'>
                            Indexed supporting journals of ICASET-2024 published by renowned publishers will provide with the opportunity to publish full papers following the peer review process. Authors are encouraged to read scope and choose the best fitting journal.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto '>
                    <div>
                        <p className='text-center bg-[#3C486B] md:text-3xl py-5 text-white font-bold mt-10'>2nd International Conference on Advances in Science, Engineering & Technology(ICASET-2024)</p>
                    </div>
                </div>
            </section>
    </div>
  )
}
