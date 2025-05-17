const Tip_output = ({onTipAmount, onTotalPrice ,ResetAll}) => {
  return (
    <div className='basis-1/2 flex justify-evenly flex-col gap-[35px] bg-[#00494d] py-4 px-8 rounded-2xl'>
      <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-white font-bold">Tip Amount</h1>
          <span className="text-[#f4fafb] font-bold text-[12px] opacity-60">/ Person</span>
        </div>
        <div className="flex items-center relative gap-1">
          <span className="text-[#26c0ab] text-3xl font-bold ">$</span>
          <span className="text-right text-[#26c0ab] text-3xl font-bold ">{onTipAmount}</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="">
          <h1 className="text-white font-bold">Total</h1>
          <span className="text-[#f4fafb] font-bold text-[12px] opacity-60">/ Person</span>
        </div>
        <div className="flex items-center relative gap-1">
          <span className="text-[#26c0ab] text-3xl font-bold ">$</span>
          <span className="text-right text-[#26c0ab] text-3xl font-bold ">{onTotalPrice}</span>
        </div>
      </div>
      </div>
      <div
        onClick={ResetAll}
        className="flex justify-center items-center bg-[#26c0ab] hover:bg-[#87ffee]  transition rounded-[5px] h-[40px] cursor-pointer">
        <span className=" uppercase text-[#00494d] text-[20px] font-bold ">reset</span>
      </div>
    </div>
  )
}

export default Tip_output


