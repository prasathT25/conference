

export default function Officeimage() {
  return (
    <div>
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
