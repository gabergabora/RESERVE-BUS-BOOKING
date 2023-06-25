import React from 'react'
import success from "../../Images/check.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ReceiptPage = () => {
  let userDetails,userData,seatData,fromTo,bookingObj,formattedDate;
  userDetails=useSelector((x)=>x.userDetails.INIT_STATE);
  seatData=useSelector((x)=>x.seatData.INIT_STATE);
  fromTo = useSelector((state) => state.fromTo.INIT_STATE);
  
  if(userDetails && seatData && fromTo){
    userData=userDetails.users;
    bookingObj={userData, fromTo, selectedBusDetails:seatData.selectedBusCard, selectedSeats:seatData.selectedSeat}
    const fetchData = async () => {
      await fetch('http://localhost:8080/tickets', {method:'POST',headers:{'Content-Type':'application/json'},
      body: JSON.stringify(bookingObj)})
      .then(response => response.json())
      .then(savedTicket => {console.log('Saved ticket:', savedTicket)})
      .catch(err=>{console.error(err)});
      };
    fetchData();
    const date = new Date(fromTo.Date);
    formattedDate = date.toLocaleDateString("en-US", {day: "numeric",month: "short"});
  }
    

  return (
    <>
      {userDetails.users && seatData && fromTo?
      <div className='flex items-center justify-center my-12 sm:my-7'>
      <div className='flex flex-col items-center justify-center shadow-[10px_10px_20px_2px_#aaaaaa] w-full md:max-w-xl rounded-[10px]'>
        <div className='mt-4'>
          <img src={success} alt='success' width="50px" />
        </div>
        <div className='text-2xl font-semibold mt-4'>
          <h1>Booking has been confirmed</h1>
        </div>
        {/* --------------------------------- */}
        <div className='pt-4 w-[90%]'>
          <div className='flex border-b-2 border-slate-300 justify-between'>
            <h6 className='sm:text-base text-xs font-semibold font-mono'>Ticket ID :-</h6>
            <p className='sm:text-base text-xs font-semibold font-mono'>{Math.floor(Math.random() * 10000)}DTTO5</p>
          </div>
          <div className='flex border-b-2 border-slate-300 justify-between'>
            <h6 className='sm:text-base text-xs font-semibold font-mono'>Payment ID :-</h6>
            <p className='sm:text-base text-xs font-semibold font-mono'>{Math.floor(Math.random() * 10000)}-{Math.floor(Math.random() * 10000)}N5-MN{Math.floor(Math.random() * 10000)}</p>
          </div>
          {userDetails.users.map((i,I)=>{
            return(
            <div key={I}>
            <div className='flex border-b-2 border-slate-300 justify-between'>
              <h6 className='sm:text-base text-xs font-semibold font-mono'>Passenger Details of Seat {seatData.selectedSeat[I]} :-</h6>
              <p className='sm:text-base text-xs font-semibold font-mono'>{i.name},{i.gender}, {i.age}yrs</p>
            </div>
            <div className='flex border-b-2 border-slate-300 justify-between'>
              <h6 className='sm:text-base text-xs font-semibold font-mono'>Contact Details :-</h6>
              <p className='sm:text-base text-xs font-semibold font-mono'>{i.phone}</p>
            </div>
            </div>)
          })}

        </div>
        <div className='flex mx-2 my-2 border-2 border-gray-400 p-4 rounded-md justify-between'>
          <section className='flex flex-col gap-2 justify-between'>
            <div className='flex gap-3'>
              <h1 className='text-xl font-semibold'>{seatData.selectedBusCard.busName}</h1>
              <div className='flex gap-1'>
                <p className='bg-green-500 text-sm rounded-md px-1 self-center pb-0 text-white'>⭐{seatData.selectedBusCard.rating}</p>
                <h1 className='text-gray-400 self-center text-sm'>ratings</h1>
              </div>
            </div>
            <div className='flex gap-4'>
              <h1 className='sm:text-sm text-xs self-center text-gray-600'>{seatData.selectedBusCard.category}</h1>|
              <h1 className='sm:text-sm text-xs self-center text-gray-600'>{seatData.selectedBusCard.totalSeats} Seats Left</h1>|
              <h1 className='sm:text-sm text-xs self-center text-gray-600'>{seatData.selectedBusCard.totalWindowSeatsAvailable} Windows seat</h1>
            </div>
            <div className='flex gap-4'>
              <h1 className='sm:text-lg text-sm font-semibold self-center text-gray-700'>{seatData.selectedBusCard.startTime}, {formattedDate}</h1>---
              <h1 className='sm:text-sm text-xs font-semibold self-center text-gray-500'>07 hrs 58 min</h1>---
              <h1 className='sm:text-lg text-sm font-semibold self-center text-gray-700'>{seatData.selectedBusCard.EndTime}, {formattedDate}</h1>
            </div>
            <div className="flex gap-8">
              <p className="sm:text-lg text-xs font-semibold">From: {fromTo.From}</p>
              <p className="sm:text-lg text-xs font-semibold">To: {fromTo.To}</p>
            </div>
          </section>
        </div>
        <section className='my-3'>
          <Link to="/" className='text-white my-2 border-2 border-gray-400 py-1 rounded-lg shadow-lg hover:scale-95 bg-green-400 font-semibold sm:text-xl text-sm px-4 text-center'>Back to Homepage</Link>
        </section>
      </div>
    </div>
      :
      <h1 className='flex justify-center py-4'>No data Found!! <p className='text-blue-600'><Link to="/">Click here</Link></p></h1>
    }
    </>
  )
}

export default ReceiptPage
