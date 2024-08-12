

export default function Keynotespeaker() {
  return (
    <div>
      <section>
        <div className='max-w-[70rem] w-full mx-auto px-4'>
          <div className="text-center mb-16">
            <p className='text-3xl text-[#F45050] font-semibold md:text-5xl sm:text-3xl'>KEYNOTE SPEAKER</p>
          </div>

          <div className="space-y-10">
            {/* Speaker 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <img src="/assets/speakerone.png" className="w-full h-[360px] object-cover md:w-[360px] md:h-[360px] mx-auto" alt="Speaker 1" />
              <div className="text-center md:text-left">
                <p className='text-2xl text-[#F45050] font-semibold'>Dr. Maribel S. Tizo</p>
                <p className='text-[#3C486B] font-semibold'>Dean</p>
                <p className='text-[#3C486B] font-semibold'>Department of Science Education<br />College of Engineering and Technology<br /> Philippines</p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <img src="/assets/speaker2.png" className="w-full h-[360px] object-cover md:w-[360px] md:h-[360px] mx-auto" alt="Speaker 2" />
              <div className="text-center md:text-left">
                <p className='text-2xl text-[#F45050] font-semibold'>Assoc. Prof. Dr. Hidayat Bin Zainuddin</p>
                <p className='text-[#3C486B] font-semibold'>Dean</p>
                <p className='text-[#3C486B] font-semibold'>Faculty of Electrical Engineering<br />University Teknikal Malaysia Melaka<br />Malaysia</p>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              <img src="/assets/speaker3.png" className="w-full h-[360px] object-cover md:w-[360px] md:h-[360px] lg:mx-[10px] mx-auto md:order-2" alt="Speaker 3" />
              <div className="text-center md:text-left md:order-1 md:mr-4 lg:ml-[200px] md:ml-[200px]">
                <p className='text-2xl text-[#F45050] font-semibold'>Nurnadiah Zamri</p>
                <p className='text-[#3C486B] font-semibold'>Senior Lecturer<br />University Sultan Zainal Abidin<br />Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
