import React, { useState } from "react";

const Seat = ({seatno,setSelectedSeat,selectedSeat}) => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");
  
  let ChangeColor = () => {
    if (selectSeat === false) {setSelectSeat(true); setbgColor("#0272F8"); setSelectedSeat([...selectedSeat,seatno])}
    else {setSelectSeat(false); setbgColor(""); setSelectedSeat(selectedSeat.filter((value)=>value !== seatno))}
  };
  return (
    <div>
      <button
        className={`border-2 sm:w-14 w-7 sm:h-5 h-4 rounded-sm sm:mx-3 mx-2 hover:bg-slate-300`}
        style={{ background: (!selectedSeat.includes(seatno))?bgColor:'#838383 ' }}
        onClick={ChangeColor}
      ></button>
    </div>
  );
};

export default Seat;