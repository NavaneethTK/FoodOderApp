import Button from "./components/Button";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-black text-white ">
        <h1 className="text-[40px] text-[aquamarine] font-medium">
          Hotel Order
        </h1>
        <div className="flex gap-[100px] ">
          <NavLink to={"/takeoder"}>
            <Button
              btnName="Take Order"
              className="border-[#b197fc] border-2 rounded-[10px] text-[#e599f7] font-medium py-[5px] px-[13px]"
              type="button"
            />
          </NavLink>
          <NavLink to={"/createbill"}>
            <Button
              btnName="Create Bill"
              className="border-[#faa2c1] border-2 rounded-[10px] text-[#ff6b6b] font-medium py-[5px] px-[13px]"
              type="button"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}
