import React from "react";

const SearchInput = (props) => {
  const { setVal, data, placeholder } = props;
  return (
    <div>
      <label className="sm:text-xl text-base font-mono font-medium text-slate-500">{placeholder}</label>
      <input
        list="data" type="search"  onChange={(e) => setVal(e.target.value)} placeholder={placeholder}
        className="form-control relative  flex-auto min-w-0 block w-[220px] px-3 py-1.5 sm:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />
      {data?
      <datalist id="data">
        {data.map((op, id) => (<option key={id}>{op}</option>))}
      </datalist>:null}
    </div>
  );
};

export default SearchInput;