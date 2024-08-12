

export default function Updateform(props) {
  const {loading,formdata,handleChange,handlesave}=props;
  return (
    <div>
      

      


      <section>
  <div className='max-w-full  w-full mx-auto '>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0  h-full bg-gray-200'>
      <div className='flex justify-center items-end'>
        <img src="/assets/systemconfigure.png" alt="Description" className="w-full h-[300px] lg:h-full xl:h-[300px] object-cover rounded-none" />
      </div>
      <div className='flex flex-col items-center  p-6  rounded-none '>
        <p className=' ml-5 text-1xl md:text-3xl my-5 text-[#3C486B] font-bold'> If Would Like to get updates;</p>
        <div>
        <form onSubmit={handlesave}>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 h-full '>
            <div className='flex flex-col justify-center'>
              <input autoComplete='off' type="text" id="name" name="Name" value={formdata['Name']} placeholder='Name' onChange={handleChange}  className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm' required />
            </div>
            <div className='flex flex-col justify-center'>
              <input autoComplete='off' type="email" id="email" name="Email"  value={formdata['Email']} placeholder='Email'  onChange={handleChange}   className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm ' required />
            </div>
            <div className='flex flex-col justify-center'>
              <input autoComplete='off' type="number" id="phone" name="Mobile Number"  value={formdata['Mobile Number']} placeholder='Phone' onChange={handleChange}   className='p-2 border border-gray-300 rounded-lg w-[300px] h-[50px] text-sm' required />
            </div>
            <div className='flex flex-col justify-center md:mt-0 mt-3 '>
              <button type="submit" disabled={loading} className='px-4 py-2 bg-[#F45050] text-white text-sm rounded-lg font-bold w-[300px] h-[50px]'>{loading ? 'Submiting...' : 'Submit'}</button>
            </div>
          </div>
        </form>
        </div>
      </div>
      
    </div>
    
  </div>
  

<div className='bg-[#3C486B] '>
      <p className='text-center text-3xl md:text-4xl mt-0 text-[#F45050] font-bold pt-3'>BE A VOLUNTEER</p>
      <p className=' text-1xl md:text-2xl mt-5 text-white  md:mx-[100px] justify-center mb-5 pb-5 mx-4'>Join us in shaping the future of knowledge advancement! We&aposre inviting enthusiastic volunteers to be an integral part of the 2nd International Conference on Advances in Science, Engineering & Technology 2024 in Vietnam & Hanoi on August 23rd & 24th, 2024. organized by Institute For Educational Research and Publication (IFERP). Be part of a global community driving innovation and collaboration.</p>
    </div>
    </section>


    </div>
  )
}
