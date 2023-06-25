import React, { useState } from 'react';
import Seat from './Seat';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSeatData } from '../../state/actions/seatData';

export default function Seats(props) {
  let selectedBusCard = props.data;
  const dispatch = useDispatch();
  const fromTo = useSelector((state) => state.fromTo);
  const [selectedOption, setSelectedOption] = useState('');
  let [lowerLeft, lowerRight, upperLeft, upperRight] = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22]
  ];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const handleOptionChange = (e) => setSelectedOption(e.target.value);
  let a = { selectedBusCard, selectedSeat };
  const handleClick = async () => { await setSeatData(dispatch, a); };

  return (
    <div className='border-2 rounded-md px-4 border-grey-400'>
      <section className='flex flex-col md:flex-row p-3 justify-between'>
        <div className="sm:mb-4 md:mb-0">
          <h1 className='sm:text-xl text-xs sm:mb-3 font-semibold'>Select Seats from {props.data.busName}</h1>
          <div className='sm:flex hidden flex-col md:flex-row md:items-center gap-10'>
            <h1 className='sm:text-lg text-xs self-center font-semibold text-slate-400'>Seat Price:--</h1>
            <div className='self-center flex flex-wrap gap-2'>
              <label className='sm:px-3 mx-1 p-0.5 rounded-md font-semibold border-2 border-slate-300'>
                <input className="mr-2" type="radio" value="All" checked={selectedOption === 'All'} onChange={handleOptionChange} />
                All
              </label>
              <label className='px-3 mx-1 p-0.5 rounded-md font-semibold border-2 border-slate-300'>
                <input className="mr-2" type="radio" value="689" checked={selectedOption === '689'} onChange={handleOptionChange} />
                Rs 689
              </label>
              <label className='px-3 mx-1 p-0.5 rounded-md font-semibold border-2 border-slate-300'>
                <input className="mr-2" type="radio" value="899" checked={selectedOption === '899'} onChange={handleOptionChange} />
                Rs 899
              </label>
              <label className='px-3 mx-1 p-0.5 rounded-md font-semibold border-2 border-slate-300'>
                <input className="mr-2" type="radio" value="999" checked={selectedOption === '999'} onChange={handleOptionChange} />
                Rs 999
              </label>
            </div>
          </div>
        </div>
        <div className='mr-2 '>
          <div className='flex gap-2'>
            <h1 className='text-slate-400 border self-center border-black sm:w-4 h-2 w-2 sm:h-4 rounded-sm sm:text-xs text-[7px] bg-slate-400'>H</h1>
            <h2 className='sm:text-md text-[10px] font-semibold'>Booked</h2>
          </div>
          <div className='flex sm:mt-2 mt-1 gap-2'>
            <h1 className='text-white self-center border border-black sm:w-4 h-2 w-2 sm:h-4 rounded-sm sm:text-xs text-[7px]'>H</h1>
            <h2 className='sm:text-md text-[10px] font-semibold'>Available</h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row m-2 sm:gap-5 gap-1">
        <div className="md:w-2/3">
          <div className="border-2 border-gray-300 mb-4 h-28 flex rounded-md">
            <div className="rotate-180 ml-5 text-gray-400 mt-2 font-medium text-center text-sm" style={{ writingMode: "vertical-rl" }}>
              <span>Upper Birth</span>
            </div>
            <div className="sm:mt-3 mt-1 sm:ml-10 ml-6">
              <div className="flex">
                {upperLeft.map((i, I) => {
                  return <Seat key={I} seatno={i} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />;
                })}
              </div>
              <div className="flex justify-end mt-2 mb-12">
                {upperRight.map((i, I) => {
                  return <Seat key={I} seatno={i} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />;
                })}
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 mb-4 h-28 flex rounded-md">
            <div className="rotate-180 ml-5 text-gray-400 mt-2 font-medium text-center text-sm" style={{ writingMode: "vertical-rl" }}>
              <span>Upper Birth</span>
            </div>
            <div className="sm:mt-3 mt-1 sm:ml-10 ml-5">
              <div className="flex">
                {lowerLeft.map((i, I) => {
                  return <Seat key={I} seatno={i} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />;
                })}
              </div>
              <div className="flex justify-end mt-2 mb-12">
                {lowerRight.map((i, I) => {
                  return <Seat key={I} seatno={i} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="h-60 border-2 border-gray-300 rounded-md">
            <div className="mt-3 mx-3 text-start">
              <div className="font-bold sm:text-md text-xs">Boarding and Dropping</div>
              <div className="flex justify-between my-1">
                <div className="text-xs">
                  <div className="font-semibold">{fromTo.INIT_STATE.From}</div>
                  <div className="text-gray-400">
                    Taxi Service, Chhatrapati road
                  </div>
                </div>
                <div className="sm:text-md text-xs mr-6 font-bold">{props.data.startTime}</div>
              </div>
              <div className="flex justify-between border-b-2 border-gray-300 pb-1 pt-1">
                <div className="text-xs">
                  <div className="font-semibold">{fromTo.INIT_STATE.To}</div>
                  <div className="text-gray-400">
                    Bus Stop, Main road
                  </div>
                </div>
                <div className="sm:text-md text-xs mr-6 font-bold">{props.data.EndTime}</div>
              </div>
              <div className="flex justify-between sm:text-sm text-xs font-bold border-b-2 border-gray-300 py-1">
                <div>Seat No</div>
                <div>{selectedSeat.join(", ")}</div>
              </div>
              <div className="flex justify-between">
                <h1 className="sm:text-md text-sm font-semibold">Total Amount to be Paid :</h1>
                <h1 className="sm:text-md text-sm font-bold">{selectedSeat.length * Number(props.data.busFare)}</h1>
              </div>
              <div>
                <Link to="/info">
                <button onClick={handleClick} className="bg-[#FF8700] text-white font-[Poppins] mt-2 py-1 w-full rounded hover:scale-95 duration-500">
                  Proceed to Book
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
