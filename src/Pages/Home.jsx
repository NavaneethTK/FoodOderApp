import Button from "../components/Button";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="h-screen  flex flex-col justify-center items-center gap-10 bg-black text-white p-[10px] md:h-screen md:gap-[100px] lg:h-screen ">
        <h1 className="text-[40px] text-[aquamarine] font-medium  md:text-[44px] lg:text-[86px] ">
          Hotel Order
        </h1>

        <div className="flex gap-[80px] md:gap-[200px]">
          <NavLink to={"/takeoder"}>
            <Button
              btnName="Take Order"
              className="border-[#b197fc] border-4 rounded-[20px] text-[28px] text-[#e599f7] hover:shadow-2xl hover:shadow-[#8590f0] hover:bg-[#aeb6ff] hover:text-black font-medium py-[5px] px-[13px] "
              type="button"
            />
          </NavLink>
          <NavLink to={"/createbill"}>
            <Button
              btnName="Create Bill"
              className="border-[#faa2c1] border-4 rounded-[20px] text-[28px] text-[#ff6b6b] hover:shadow-2xl hover:shadow-red-700 hover:bg-[#f582d8] hover:text-black font-medium py-[5px] px-[13px]"
              type="button"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}
