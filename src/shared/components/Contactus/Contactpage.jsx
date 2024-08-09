import React from 'react'

export default function Contactpage() {
  return (
    <div>
      <section>
                <div className='max-w-full w-full mx-auto '>
                    <div className='relative w-full'>
                        <img src="/assets/contactimg.png" alt="Description" className="w-full md:h-[200px] h-[100px] object-cover rounded-none" />
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
                            <h1 className='text-xl md:text-3xl font-bold'>Contact Us</h1>
                            <p className='text-sm md:text-base mt-2'>Home / Contact Us</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-[100rem] w-full mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>

                        <div className='p-4 bg-gray-100'>
                            <h2 className='text-xl md:text-3xl font-bold mb-4 text-[#3C486B]'>Abstracts, Publication Registrations & Payments Inquiries</h2>
                            <p className='text-sm md:text-base text-[#F45050] text-[16px] md:text-[26px] font-bold mb-4'>Contact Person:</p>
                            <div className='flex items-center mb-2'>
                                <img src="/assets/women.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>Ms. Nisha Nandhini</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <img src="/assets/phone.png" alt="Email Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>+91 8122268465</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="/assets/message.png" alt="Location Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>info@icaset.in</p>
                            </div>
                        </div>

                        <div className='p-4 bg-gray-100'>
                            <h2 className='text-xl md:text-3xl font-bold mb-4 text-[#3C486B]'>Academic Partnership, Sponsorships, And Promotional Spaces</h2>
                            <p className='text-sm md:text-base text-[#F45050] text-[16px] md:text-[26px] font-bold mb-4'>Contact Person:</p>
                            <div className='flex items-center mb-2'>
                                <img src="/assets/men.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>Mr.Manigandan</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <img src="/assets/phone.png" alt="Email Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>+919342924781</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="/assets/message.png" alt="Location Icon" className="w-6 h-6 mr-2" />
                                <p className='text-sm md:text-base'>collaboration@iferp.in</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto  mt-20'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3725.2166105917263!2d105.76919237587165!3d20.983952489314913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723067885968!5m2!1sen!2sin" width="100%" height="450" ></iframe>       </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto '>
                    <div className='relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/assets/mapss.jpeg')" }}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative'>
                            <div className='flex flex-col items-center text-center  p-4 rounded-lg'>
                                <img src="/assets/mapdirection.png" alt="Description 1" className="w-24 h-24 object-cover mb-4" />
                                <p className='text-sm md:text-5xl font-semibold text-[#F9D949] '>Where</p>
                                <p className='text-left mt-5 text-[#FFFFFF]'>Wyndham Garden Hanoi<br />HH01 To Huu Street, Van Phuc Ward, Hanoi,<br /> Vietnam</p>
                            </div>
                            <div className='flex flex-col items-center text-center  p-4 rounded-lg'>
                                <img src="/assets/maplocation.png" alt="Description 2" className="w-24 h-24 object-cover mb-4" />
                                <p className='text-sm md:text-5xl font-semibold text-[#F9D949]'>When</p>
                                <p className='text-left mt-5 text-[#FFFFFF]'> 23<sup>rd</sup>   -24<sup>th</sup>    August, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
