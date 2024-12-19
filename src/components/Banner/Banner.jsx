import React from 'react';
import {GrSecure} from 'react-icons/gr';
import {IoFastFood} from 'react-icons/io5';
import {GiFoodTruck} from 'react-icons/gi';


const bgImage = {
  backgroundImage: `url('/bg1.jpg')`, 
  backgroundSize: 'cover',
//   backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
//   height: '100%',
//   width: '100%',
};

const Banner = () => {
  return (
    <div style={bgImage}>
      <div className="container min-h-[550] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* Image */}
          <div>
            <img src="cup3.jpg" alt="" className="  max-w-[430px] w-full  my-14
             rounded-t-full mx-16 drop-shadow-xl
             " />
          </div>
          {/* Text */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0 '>
            <h1 className="text-5xl font-cursive font-bold text-primary sm:text-3xl">
              Coffee Cafe
            </h1>
            <p className="text-lg text-gray-700 tracking-wide leading-5 ">
              Our mission is to provide quality coffee to our customers
            </p>
            <div className='grid grid-cols-2 gap-6'>  
          <div>
            <div className='flex items-center gap-3'>
              <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
            <span>Premium Coffee</span>
            </div>
            <div className='flex items-center gap-3'>
              <IoFastFood className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
            <span>Hot Coffee</span>
            </div>
            <div className='flex items-center gap-3'>
              <GiFoodTruck className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
            <span>Cold Coffee</span>
            </div>
          </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
