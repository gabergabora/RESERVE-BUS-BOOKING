import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Card(props) {
    let [hour,setHour]=useState("");
    let [min,setMin]=useState("");
    let fromTo = useSelector((state) => state.fromTo.INIT_STATE);
    const { EndTime, startTime } = props.data;
    let formattedDate;
    useEffect(() => {
        function timeDiff(EndTime, startTime) {
          const endTimeParts = EndTime.split(":");
          const startTimeParts = startTime.split(":");
    
          const end = parseInt(endTimeParts[0]) * 60 + parseInt(endTimeParts[1]);
          const start = parseInt(startTimeParts[0]) * 60 + parseInt(startTimeParts[1]);
    
          const difference = end - start;
          const resultHour = Math.floor(difference / 60);
          const resultMin = difference % 60;
          setHour(resultHour);setMin(resultMin);
        }
    
        timeDiff(EndTime, startTime);
      },[EndTime, startTime]);
    if(fromTo){
        const date = new Date(fromTo.Date);
        formattedDate = date.toLocaleDateString("en-US", {day: "numeric",month: "short"});
    }
  return (
    <div>
        {formattedDate?
        <div className='flex sm:h-full h-[100px] my-2 border-2 border-grey-400 p-4 rounded-md justify-between'>
        <section className='flex flex-col justify-between'>
            <div className='flex sm:gap-3 gap-1'>
                <h1 className='sm:text-xl text-sm font-semibold'>{props.data.busName}</h1>
                <div className='flex gap-1'>
                    <p className='bg-green-500 sm:text-sm text-[5px] rounded-md sm:px-1 px-0.5 self-center pb-0 text-white'>⭐{props.data.rating}</p>
                    <h1 className='text-slate-400 self-center sm:text-sm text-[7px]'>ratings</h1>
                </div>
            </div>
            <div className='flex sm:gap-4 gap-1'>
                <h1 className='sm:text-sm text-[7px] self-center text-slate-600'>{props.data.category} </h1>|
                <h1 className='sm:text-sm text-[7px] self-center text-slate-600'> {props.data.totalSeats} Seats Left </h1>|
                <h1 className='sm:text-sm text-[7px] self-center text-slate-600'> {props.data.totalWindowSeatsAvailable} Windows seat</h1>
            </div>
            <div className='flex sm:gap-4 gap-1'>
                <h1 className='sm:text-lg text-[8px] font-semibold self-center sm:-slate-700'>{props.data.startTime}, {formattedDate}</h1>---
                <h1 className='sm:text-sm text-[7px] font-semibold self-center text-slate-500'>{hour} hrs {min} min</h1>---
                <h1 className='sm:text-lg text-[8px] font-semibold self-center text-slate-700'>{props.data.EndTime}, {formattedDate}</h1>
            </div>
            <div className='flex sm:gap-4 gap-1'>
                <a href='/' className='text-blue-700 sm:text-sm text-[8px]'>Live Tracking</a>
                <a href='/' className='text-blue-700 sm:text-sm text-[8px]'>Facilities</a>
                <a href='/' className='text-blue-700 sm:text-sm text-[8px]'>Policies</a>
                <a href='/' className='text-blue-700 sm:text-sm text-[8px]'>Amenities</a>
                <a href='/' className='text-blue-700 sm:text-sm text-[8px]'>Photos</a>
            </div>
        </section>
        <section className='flex border-l-2 border-grey-400 pl-7 pr-4 flex-col sm:gap-3'>
            <h1 className='self-center sm:text-md text-[8px] font-medium'>Trip Cost</h1>
            <div className='flex flex-col'>
                <h1 className='sm:text-sm text-[10px] self-center text-slate-400'>Starting From</h1>
                <h1 className='font-semibold self-center sm:text-xl text-xs'>&#x20b9; {props.data.busFare}</h1>
            </div>
            <button onClick={()=>{props.onDetailsClick()}} className='sm:p-2 p-0.5 sm:px-5 bg-orange-500 text-white rounded-md font-semibold sm:text-md text-xs'>View Seat</button>
        </section>
    </div>
        :
        <h1 className='flex justify-center py-4'>No data Found!! <p className='text-blue-600'><Link to="/">Click here</Link></p></h1>
    }
    </div>
  )
}