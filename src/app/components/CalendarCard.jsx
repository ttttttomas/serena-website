import { assistant } from "../layout";

const CalendarCard = ({ month, day }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[62px] h-[68px] border-[3px] border-black rounded-lg">
      <div className="bg-[#FF6B6B] text-white text-[9px] font-bold w-full text-center py-[1px] border-b-[3px] border-black rounded-t-md">
        {month}
      </div>
      <div className={`text-black ${assistant.className} text-4xl font-bold flex-1 flex items-center justify-center`}>
        {day}
      </div>
    </div>
  );
};

export default CalendarCard;
