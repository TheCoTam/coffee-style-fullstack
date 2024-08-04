const HistoryItem = ({ title, desc, time }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <p className="font-semibold text-gray-400">{time}</p>
      <p className="text-lg">{title}</p>
      <p className="text-sm text-gray-500 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
        {desc}
      </p>
      <div className="flex flex-col items-center mt-5">
        <div className="w-[200px] h-[1px] bg-slate-100"></div>
        <div className="w-[1px] h-[70px] bg-slate-100"></div>
      </div>
    </div>
  );
};

export default HistoryItem;
