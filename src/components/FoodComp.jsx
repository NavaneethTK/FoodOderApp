import Button from "./Button";

function Count({
  imgSrc,
  FoodRate,
  Foodcount,
  FoodName,
  Amount,
  Increment,
  Decrement,
}) {
  const rate = FoodRate;
  const sum = rate * Foodcount;
  console.log(
    "12345678900000",
    imgSrc,
    FoodRate,
    Foodcount,
    FoodName,
    Amount,
    Increment,
    Decrement
  );
  return (
    <>
      <div className="flex flex-col gap-[15px] items-center ">
        <div className="flex font-medium text-[#bcf1ef] text-[20px] gap-[45px] md:text-[28px] lg:text-[32px]">
          <div>{FoodName}</div>
          <div>Rs. {Amount}</div>
        </div>
        <img
          src={imgSrc}
          className="w-[280px] h-[260px] rounded-xl md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px]"
        />
        <div className="flex gap-[15px] text-[20px] md:text-[28px] lg:text-[34px]">
          <p className="text-[#fff3bf]  ">Rate:</p>
          <p className="text-[#f06595] font-bold  ">{sum}</p>
        </div>
        <div className="flex text-[20px] gap-[50px] from-[#344036] via-[#495057] to-[#212529] text-white md:gap-[50px] lg:gap-[45px]">
          <Button
            type="button"
            className="px-[25px] border-[4px] rounded-lg font-bold border-[#e03131] text-[#ff8787] hover:scale-105 transition-all hover:bg-red-300 hover:shadow-2xl hover:shadow-red-600 hover:text-black  "
            btnName="-"
            onClick={Decrement}
          />
          <p className="text-[#fff3bf] font-medium md:text-[28px]">
            {Foodcount}
          </p>
          <Button
            type="button"
            className="px-[25px]  border-[4px] rounded-lg font-bold border-[#087f5b] text-[#63e6be] hover:bg-green-300 hover:shadow-2xl hover:shadow-green-600 hover:text-black  hover:scale-105 transition-all"
            btnName="+"
            onClick={Increment}
          />
        </div>
      </div>
    </>
  );
}
export default Count;
