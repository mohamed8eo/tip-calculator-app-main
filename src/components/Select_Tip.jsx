import { useState } from "react";

const Select_Tip = ({ Totalprice_Value, Selected_Tip_Value, Total_numberof_People }) => {
  // Add state to track if custom input is being used
  const [isCustomTip, setIsCustomTip] = useState(false);

  // Pass the Total price
  const handle_TotalPrice = (event) => {
    const Total_Price = parseFloat(event.target.value);
    Totalprice_Value(parseFloat(Total_Price));
  };
  
  // Pass the tip percent whenever it changes
  const [TipPercent, setTipPercent] = useState(null);
  Selected_Tip_Value(parseInt(TipPercent));

  // Pass the number of people
  const handle_Numberof_People = (event) => {
    const total_number = parseInt(event.target.value);
    Total_numberof_People(parseInt(total_number));
  };

  const Tip_percent = ['5%', '10%', '15%', '25%', '50%'];

  // Allow only numbers and one dot for bill input
  const handlekeyPress = (event) => {
    if (!/[0-9.]/.test(event.key) || (event.key === '.' && event.target.value.includes('.'))) {
      event.preventDefault();
    }
  };

  // Allow only numbers for number of people input
  const handlekeyPress_People = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleCustomTip = (event) => {
    const customValue = event.target.value;
    if (customValue) {
      setIsCustomTip(true);
      setTipPercent(customValue + '%');
      Selected_Tip_Value(parseInt(customValue));
    } else {
      setIsCustomTip(false);
    }
  };

  return (
    <div className="basis-1/2 flex flex-col gap-[35px]">
      <div className="relative">
        <h1 className="text-[15px] text-[#00494d] mb-1.5 font-bold opacity-70">Bill</h1>
        <div className="flex items-center ml-1 relative">
          <img
            src="./images/icon-dollar.svg"
            alt="dollar icon "
            className="absolute left-[11px]"
          />
          <input
            type="text"
            className="bg-[#f4fafb] py-[3px] px-[11px] w-[100%] sm:w-[300px] h-[35px] outline-0 text-right placeholder:text-[#7f9c9f] text-[#00494d] placeholder:opacity-30 text-2xl font-bold cursor-pointer hover:border-2 hover:border-[#26c0ab] caret-[#26c0ab] rounded-[5px] transition-all duration-100"
            placeholder="0"
            onKeyPress={handlekeyPress}
            onChange={handle_TotalPrice}
          />
        </div>
      </div>
      <div>
        <h1 className="text-[15px] text-[#00494d] mb-3.5 font-bold opacity-70">Select Tip %</h1>
        <ul className="grid grid-cols-3 gap-2.5">
          {Tip_percent.map((Tip, index) => (
            <li
              onClick={() => {
                if (!isCustomTip) {
                  setTipPercent(Tip);
                  Selected_Tip_Value(parseInt(Tip));
                }
              }}
              key={index}
              className={`${
                TipPercent !== Tip ? 'bg-[#00494d] text-white hover:bg-[#87ffee] hover:text-[#00494d]' : 'bg-[#26c0ab] text-[#00494d]'} 
                transition text-center py-2.5 px-5 rounded-[5px] cursor-pointer font-bold text-xl
                ${isCustomTip ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {Tip}
            </li>
          ))}
          <input
            type="text"
            placeholder="Custom"
            onKeyPress={handlekeyPress}
            onChange={handleCustomTip}
            onFocus={() => setIsCustomTip(true)}
            onBlur={(e) => !e.target.value && setIsCustomTip(false)}
            className="bg-[#f4fafb] placeholder:text-center text-right rounded-[5px] cursor-pointer placeholder:text-[#7f9c9f] text-[#00494d] font-bold text-xl outline-0 hover:border-2 hover:border-[#26c0ab] transition caret-[#26c0ab]"
          />
        </ul>
      </div>
      <div>
        <h1 className="text-[15px] text-[#00494d] mb-1.5 font-bold opacity-70">Number of People</h1>
        <div className="flex items-center ml-1 relative">
          <img
            src="./images/icon-person.svg"
            alt="person icons"
            className="absolute left-2.5"
          />
          <input
            type="text"
            placeholder="0"
            onKeyPress={handlekeyPress_People}
            onChange={handle_Numberof_People}
            className="bg-[#f4fafb] py-[3px] px-[11px] w-[100%] sm:w-[300px] h-[35px] outline-0 text-right placeholder:text-[#7f9c9f] text-[#00494d] placeholder:opacity-30 text-2xl font-bold cursor-pointer hover:border-2 hover:border-[#26c0ab] caret-[#26c0ab] transition-all duration-100 rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Select_Tip;

