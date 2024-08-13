import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useMemo } from 'react';


export default function OnlineRegistrationform(props) {
    const {loading,formdata,setformdata,handlechange,handlesave}=props;
    const options = useMemo(() => countryList().getData(), [])
    console.log(options)
    return (

        <div>
            <section>
                <div className='max-w-[50rem] w-full mx-auto px-4 '>
                    <div>
                        <p className='text-center md:text-3xl text-[20px] py-5 text-[#F45050] font-bold mt-10'>ONLINE REGISTRATION</p>
                    </div>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ' onSubmit={handlesave}>
                        <div>
                            <label className='block text-[20px] text-gray-700 '>Title</label>
                            <select className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' name="Title" value={formdata['Title']} onChange={handlechange} required>

                                <option name="Option1" value={formdata['Option1']} onChange={handlechange} >option1</option>
                                <option name="Option2" value={formdata['Option2']} onChange={handlechange} >option2 </option>
                                <option name="Option2" value={formdata['Option2']} onChange={handlechange} >option3 </option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>First Name</label>
                            <input type='text' name='Name' value={formdata['Name']} onChange={handlechange} required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Last Name</label>
                            <input type='text' name='Lastname' value={formdata['Lastname']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Name for Candidate</label>
                            <input type='text' name='NameforCandidate' value={formdata['NameforCandidate']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Date of Birth</label>
                            <input type='date' name='DateofBirth' value={formdata['DateofBirth']} onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Nationality</label>
                            <input type='text' name='Nationality' value={formdata['Nationality']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px]m text-gray-700'>Department</label>
                            <input type='text' name='Department' value={formdata['Department']} onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Institution</label>
                            <input type='text' name='Institution' value={formdata['Institution']} onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Address</label>
                            <input type='text' name='Address' value={formdata['Address']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Zip/Pincode</label>
                            <input type='text' name='Zip' value={formdata['Zip']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Email ID</label>
                            <input type='email' name='Email' value={formdata['Email']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Mobile Number</label>
                            <PhoneInput
                                
                                country={'us'}
                                values=""
                                name='Mobile'
                                value={formdata['Mobile']}
                                onChange={(value)=>setformdata({...formdata,Mobile:value})}
                                
                                required
                               
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                                containerClass='mt-1  block'

                                inputStyle={{
                                    width: '320px',
                                    height: '40px',
                                    padding: '15px',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '0.375rem',
                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    outline: 'none',
                                    marginLeft: '28px',
                                    ClassName: 'phoneInput',
                                    
                                }}
                            />
                        </div>

                        <div>
                            <label className='block text-[20px] text-gray-700'>Country</label>
                            
                            <select  name='Country' value={formdata['Country']}  onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]'>
                                <option>Select Country</option>
                                {options?.map((option,index)=><option key={index}>{option.label}</option>)}
                            </select>
  
                        </div>
                        <div>
                            <label className='block text-[20px] text-gray-700'>Participant Category</label>
                            <select name='Category' value={formdata['Category']} onChange={handlechange}  required className='mt-1 block lg:w-[350px] w-[320px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]'>
                                <option name="Choose" value={formdata['Choose']} onChange={handlechange}>option one</option>
                                <option name="Choose" value={formdata['Choose']} onChange={handlechange}>option two</option>
                            </select>
                        </div>
                        <div className='md:col-span-2 flex justify-center'>
                <button
                    type='submit'
                    disabled={loading}
                    className='w-[350px] bg-[#F45050] text-white py-3 rounded-md mt-4 text-[20px]'
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
                    </form>
                </div>
            </section>

           


           
        </div>
    )
}
