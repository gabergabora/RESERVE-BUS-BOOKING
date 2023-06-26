import React from 'react';
import busLogo from '../../Images/busLogo.jpg';
import happyLogo from '../../Images/happyLogo.jpg';
import ticketLogo from '../../Images/ticketLogo.png';

export default function Features() {
  return (
    <div>
      <div>
        <h1 className='p-4 sm:p-8 font-bold font-sans text-center text-xl sm:text-2xl'>
          Travel with World's Largest Bus Booking Platform
        </h1>
      </div>
      <div className='flex px-1 flex-row sm:justify-center gap-1 sm:gap-20 '>
        <div className='flex flex-col shadow-lg sm:p-4 p-0.5 gap-1 sm:gap-2 items-center  sm:w-64'>
          <img src={busLogo} alt='busLogo' className='sm:h-40 h-24 sm:w-full w-32 object-cover' />
          <h1 className='text-base sm:text-lg font-semibold'>2000 +</h1>
          <h2 className='text-[9px] sm:text-base font-medium text-gray-500'>Bus Collections</h2>
        </div>
        <div className='flex flex-col shadow-lg sm:p-4 p-0.5 gap-1 sm:gap-2 items-center  sm:w-64'>
          <img className='sm:h-40 h-24 sm:w-full w-32 px-1 sm:px-4 object-cover' src={happyLogo} alt='happyLogo' />
          <h1 className='text-base sm:text-lg font-semibold'>20 Million</h1>
          <h2 className='text-[9px] sm:text-base font-medium text-gray-500'>happy customers globally</h2>
        </div>
        <div className='flex flex-col shadow-lg sm:p-4 p-0.5 sm:gap-2 items-center sm:w-64'>
          <img className='sm:h-40 h-24 sm:w-full w-32 px-2 sm:px-4 object-center' src={ticketLogo} alt='ticketLogo' />
          <h1 className='text-base sm:text-lg font-semibold'>5000 +</h1>
          <h2 className='text-[9px] sm:text-base font-medium text-gray-500'>tickets booked everyday</h2>
        </div>
      </div>
      <div>
        <h1 className='pt-8 sm:pt-16 font-bold font-sans text-center text-xl sm:text-2xl'>
          Here's what a few of our customers
        </h1>
        <h1 className='pb-4 sm:pb-8 font-bold font-sans text-center text-xl sm:text-2xl'>have to say about us</h1>
      </div>
      <div className='flex flex-col gap-8 justify-center items-center px-4 sm:px-20 bg-gray-200 py-8 mb-12 sm:flex-row sm:gap-6'>
        <div className='flex w-full sm:w-1/3 flex-col bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white text-center font-bold text-xl bg-pink-300 pt-3 px-4 rounded-full'>V</h1>
            <div className='flex flex-col'>
              <h1 className='text-base sm:text-lg font-semibold'>Vatsal Agrawal</h1>
              <h2 className='text-sm sm:text-base text-gray-400'>Customer since 2022</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.5</div>
          <span className='text-gray-500 text-sm sm:text-md'>Awesome travel experience with Reserve. Excellent staff...</span>
        </div>
        <div className='flex w-full sm:w-1/3 flex-col bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white text-center font-bold text-xl bg-pink-300 pt-3 px-4 rounded-full'>V</h1>
            <div className='flex flex-col'>
              <h1 className='text-base sm:text-lg font-semibold'>Vanya Jain</h1>
              <h2 className='text-sm sm:text-base text-gray-400'>Customer since 2019</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.0</div>
          <span className='text-gray-500 text-sm sm:text-md'>Awesome service. Always a best time with Reserve. Best service globally.</span>
        </div>
        <div className='flex w-full sm:w-1/3 flex-col bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white text-center font-bold text-xl bg-pink-300 pt-3 px-4 rounded-full'>S</h1>
            <div className='flex flex-col'>
              <h1 className='text-base sm:text-lg font-semibold'>Seema Singh</h1>
              <h2 className='text-sm sm:text-base text-gray-400'>Customer since 2020</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.2</div>
          <span className='text-gray-500 text-sm sm:text-md'>Awesome travel experience with Reserve. Excellent staff.</span>
        </div>
      </div>
    </div>
  );
}
