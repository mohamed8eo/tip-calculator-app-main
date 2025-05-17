import { useState } from "react"
import Select_Tip from "./components/Select_Tip"
import Tip_output from "./components/Tip_output"

const App = () => {
  const [Total_Price, setTotal_Price] = useState(null)
  const [TipValue, setTipValue] = useState(null)
  const [Peoplenumber, setPeoplnumber] = useState(null)

  let rawTipAmount  = Total_Price * (TipValue * 10 ** -2) / Peoplenumber;
  let TotalPrice_perperson = ((Total_Price / Peoplenumber) + rawTipAmount ).toFixed(2);
  
  if (!isFinite(TotalPrice_perperson) || isNaN(TotalPrice_perperson )) {
    TotalPrice_perperson = "0.00";
  } else {
    TotalPrice_perperson = ((Total_Price / Peoplenumber) + rawTipAmount ).toFixed(2);
  }

  const safeToFixed = (value) => {
    return (!isFinite(value) || isNaN(value)) ? "0.00" : value.toFixed(2);
  };
  const TipAmount = safeToFixed(rawTipAmount);
  
  const resetAll = () => {
    setTotal_Price(null);
    setTipValue(null);
    setPeoplnumber(null);
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });

    const tipButtons = document.querySelectorAll('li');
    tipButtons.forEach(button => {
      button.classList.remove('bg-[#26c0ab]', 'text-[#00494d]');
      button.classList.add('bg-[#00494d]', 'text-white');
    });
  };

  return (
    <div className="h-[100vh] bg-[#c5e4e7] flex justify-center items-center flex-col gap-15">
      <h1 className="text-[#00494d] font-bold text-2xl uppercase">spli <br/> tter</h1>
      <div className=" lg:m-0 mx-5 flex-col lg:flex-row h-[100%] w-[100%] sm:h-auto sm:w-auto lg:w-[775px] lg:h-[400px] bg-white flex gap-4 rounded-4xl py-7 px-9">
      {/* Left seaction to inter the price , chose the tips amount and enter how many person with you  */}
        <Select_Tip
          Totalprice_Value={(value) => setTotal_Price(value)}
          Selected_Tip_Value={(value => setTipValue(value))}
          Total_numberof_People={(value) => setPeoplnumber(value)}
        />
      {/* right seaction tip Calculator per person  */}
        <Tip_output
          onTipAmount={TipAmount}
          onTotalPrice={TotalPrice_perperson}
          ResetAll={resetAll}
        />
      </div>
    </div>
  )
}

export default App
