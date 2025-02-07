import Button from "./Button";

function Count({
  imgSrc,
  imgAlt,
  FoodRate,
  Foodcount,
  FoodName,
  Amount,
  Increment,
  Decrement,
}) {
  const rate = FoodRate;
  const sum = rate * Foodcount;
  return (
    <>
      <div className="flex flex-col gap-[15px] items-center ">
        <p className="font-bold text-[#eebefa] text-[12px] md:text-[22px] lg:text-[32px]">
          {FoodName} - {Amount}rs
        </p>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-[90px] h-[90px] rounded-xl md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        />
        <div className="flex gap-[5px] text-[14px] md:text-[24px] lg:text-[34px]">
          <p className="text-[#fff3bf]  ">Rate:</p>
          <p className="text-[#f06595] font-bold  ">{sum}</p>
        </div>
        <div className="flex gap-[10px] from-[#343a40] via-[#495057] to-[#212529] text-white md:gap-[30px] lg:gap-[45px]">
          <Button
            type="button"
            className="px-[8px]  border-[2px] rounded-lg font-semibold border-[#e03131] text-[#ff8787] md:text-[24px] md:px-[20px] md:border-[4px] lg:text-[34px]  "
            btnName="-"
            onClick={Decrement}
          />
          <p className="text-[#fff3bf] font-medium text-[14px] md:text-[34px]">
            {Foodcount}
          </p>
          <Button
            type="button"
            className="px-[8px]  border-[2px] rounded-lg font-semibold border-[#087f5b] text-[#63e6be] md:text-[24px] md:px-[20px] md:border-[4px] lg:text-[34px]"
            btnName="+"
            onClick={Increment}
          />
        </div>
      </div>
    </>
  );
}
export default Count;
