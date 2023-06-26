import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { setFromTo } from "../../state/actions/fromTo";
import main from '../../Images/main.jpg';
import Cities from '../../Data/CityData';
import SearchInput from '../homePageComponents/SearchInput';
import { Link } from "react-router-dom";


export default function Main() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const selectedDate= new Date();
  const[date,setDate]=useState(selectedDate.toISOString().slice(0, 10));
  const dispatch = useDispatch();
  
  async function handleClick(){
    if (from === "" || to === "") {alert("Please fill the given fields")}
    else {await setFromTo(dispatch, {From: from,To: to,Date: date});
    }
  }

  return (
    <div  className="sm:h-[95vh] h-[50vh] bg-cover bg-center flex-col flex items-center"
    style={{ backgroundImage: `url(${main})` }}>
        <div className="flex sm:flex-row flex-col justify-center items-center pt-[5vh] sm:pt-[15vh] h-[65vh] rounded-xl ">
            <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
              <SearchInput setVal={setFrom} data={Cities} placeholder="From" />
            </div>
            <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
              <SearchInput setVal={setTo} data={Cities} placeholder="To"/>
            </div>
            <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
              <label className="sm:text-xl text-base font-mono font-medium text-slate-500">Date</label>
              <input type="date" name="date" value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="form-control relative flex-auto min-w-0 block w-[220px] px-3 py-1.5 sm:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Travel-Date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          {from===""||to===""?
          <button onClick={()=>alert("Please Fill details Properly")} className="text-white sm:mb-1 mb-5 hover:scale-95 bg-[#FF8700] mt-6 p-3 sm:text-3xl text-lg rounded-xl sm:px-12 px-4 ">
            Search
          </button>
          :
          <Link to="/allBuses"><button onClick={()=>handleClick()} className="text-white hover:scale-95 bg-[#FF8700] sm:mb-1 mb-5 mt-6 p-3 sm:text-3xl text-lg rounded-xl sm:px-12 px-4">
            Search
          </button></Link>
          }
    </div>
  )
}
