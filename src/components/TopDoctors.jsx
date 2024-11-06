import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
            <img src={item.image} alt={`${item.name} - ${item.speciality}`} className="w-full h-48 object-cover bg-blue-50" />
            <div className='p-4'>
              <div className='flex items-center justify-between text-sm text-center '>
                <p className="font-semibold">{item.name}</p> <br/>
                <p className="text-green-600">Available</p>
                <p>{item.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">More</button>
    </div>
  );
};

export default TopDoctors;
