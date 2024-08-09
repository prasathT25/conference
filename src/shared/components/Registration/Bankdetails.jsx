import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Header from '../../../core/Header';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from '../../../core/Footer';
import ConferenceRegisteration from '../Registration/ConferenceRegisteration';

export default function Bankdetails() {
    const [values, setValue] = useState(null);
    const options = countryList().getData();

    const changeHandler = value => {
        setValue(value);
    }

    const handleOnChange = (value) => {
        console.log(value); // Value contains the full phone number with country code
    };
  return (

    <div>
      <section>
                <div className='max-w-[50rem] w-full mx-auto px-4'>
                    <div>
                        <p className='text-center md:text-3xl py-5 text-[#F45050] font-bold mt-10'>ONLINE REGISTRATION</p>
                    </div>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Title</label>
                            <select className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]'>
                                <option>Select Title</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>First Name</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Last Name</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Name for Candidate</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Date of Birth</label>
                            <input type='date' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Nationality</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Department</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Institution</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Address</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Zip/Pincode</label>
                            <input type='text' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Email ID</label>
                            <input type='email' className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Mobile Number</label>
                            <PhoneInput
                                country={'us'} // Default country
                                value=""
                                onChange={handleOnChange}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                                containerClass='mt-1 block w-[350px]'
                                inputClass='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Country</label>
                            <Select
                                options={options}
                                value={values}
                                onChange={changeHandler}
                                className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050] placeholder:select country'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Participant Category</label>
                            <select className='mt-1 block w-[350px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#F45050] focus:border-[#F45050]'>
                                <option>Select Category</option>
                            </select>
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' className='mr-2 transform scale-300' />
                            <label className='text-sm font-medium text-gray-700'>I am not a robot</label>
                        </div>
                        <div className='block text-sm font-medium text-gray-700'>
                            <button type='submit' className='w-[350px] bg-[#F45050] text-white py-3 rounded-md mt-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>

            <section>
                <div className='max-w-full w-full mx-auto px-4'>
                    <div>
                        <p className='text-center md:text-3xl text-2xl py-5 text-[#F45050] font-bold mt-10'>Bank Details</p>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-6'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Beneficiary Name</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Technoarete Research and Development Association</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-6'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>BANK NAME</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Kotak Mahindra Bank</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-6'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Account number</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>3311747350</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-6'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>IFSC CODE</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>KKBK0000466</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-6'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Swift Code</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>KKBKINBB</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto mb-10'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 p-4 text-center border-b md:border-b-0 md:border-r border-gray-300'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Branch</p>
                            </div>
                            <div className='w-full md:w-1/2 p-4 text-center'>
                                <p className='text-sm md:text-base font-medium text-gray-700'>Kodambakkam, Chennai, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='max-w-[58rem] w-full mx-auto px-4'>
                    <div>
                        <p className='text-left text-1xl py-5 text-[#3C486B] font-bold mt-10'>
                            After making your payment, download the Registration Form, fill it out, and email it to info@icaset.in along with your payment information. The payee is accountable for all bank charges.
                        </p>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='bg-[#F45050] text-white rounded-md px-2 py-1 text-center'>
                            Download Registration Form here
                        </button>
                    </div>
                </div>
            </section>


            <section>
                <div className='max-w-full w-full mx-auto px-4 mt-10'>
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
