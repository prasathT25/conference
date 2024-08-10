

export default function Conferencelocation() {
  return (
    <div>
      <section>
                <div className='max-w-full w-full mx-auto  mt-10'>
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
                                <p className='text-left mt-5 text-[#FFFFFF]'> 23<sup>rd</sup>   -24<sup>th</sup>   August, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
