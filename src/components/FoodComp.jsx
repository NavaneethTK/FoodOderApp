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
      <div className="flex flex-col gap-[28px] items-center">
        <p className="font-bold text-[#eebefa]">
          {FoodName} - {Amount}rs
        </p>
        <img src={imgSrc} alt={imgAlt} className="w-[100px] h-[100px]" />
        <div className="flex">
          <p className="text-[#fff3bf]">Rate:</p>
          <p className="text-[#f06595] font-bold font-mono">{sum}</p>
        </div>
        <div className="flex gap-[28px]">
          <Button
            type="button"
            className="px-[12px]  border-[1px] rounded-full font-semibold border-[#e03131] text-[#ff8787]"
            btnName="-"
            onClick={Decrement}
          />

          <p className="text-[#fff3bf] font-medium  ">{Foodcount}</p>
          <Button
            type="button"
            className="px-[12px]  border-[1px] rounded-full font-semibold border-[#087f5b] text-[#63e6be]"
            btnName="+"
            onClick={Increment}
          />
        </div>
      </div>
    </>
  );
}
export default Count;
