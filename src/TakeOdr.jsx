import Button from "./components/Button";
import Count from "./components/FoodComp";
import Dropdown from "./components/Dropdown";
import { NavLink } from "react-router-dom";
import img1 from "./assets/idli.png";
import img2 from "./assets/chapati1.png";
import img3 from "./assets/Parotta.png";
import img4 from "./assets/biriyani.png";
import { useContext } from "react";
import { FoodContext } from "./App";
const SelectTable = [
  { lable: "Table 1" },
  { lable: "Table 2" },
  { lable: "Table 3" },
  { lable: "Table 4" },
];
const FoodRate = {
  IdliRate: 15,
  ChapatiRate: 20,
  ParottaRate: 30,
  BiriyaniRate: 100,
};
const Amount = {
  IdliAmt: 15,
  ChapatiAmt: 20,
  ParottaAmt: 30,
  BiriyaniAmt: 100,
};

export function TakeOdr() {
  const { count, setCount, selTab, setSelTab } = useContext(FoodContext);
  const Increment = (type) => {
    setCount({
      ...count,
      [selTab]: {
        ...count?.[selTab],
        [type]: (count?.[selTab]?.[type] || 0) + 1,
      },
    });
  };

  const Decrement = (type) => {
    if (count?.[selTab]?.[type] > 0) {
      setCount({
        ...count,
        [selTab]: {
          ...count?.[selTab],
          [type]: (count?.[selTab]?.[type] || 0) - 1,
        },
      });
    }
  };
  const changeTable = (val) => {
    setSelTab(val.target.value);
  };
  console.log(selTab, count);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-[30px] bg-gradient-to-r from-[#343a40] via-[#495057] to-[#212529] md:gap-[70px] md:h-screen">
        <p className="font-medium text-[18px] text-[#d07070] md:text-[58px]">
          Add Items
        </p>
        <div className="flex gap-[120px] md:gap-[268px]">
          <p className="font-medium text-[15px] text-[#96f2d7] md:text-[34px]">
            Select Table
          </p>
          <div>
            <Dropdown
              SelectTable={SelectTable}
              value={selTab}
              changeTable={changeTable}
            />
          </div>
        </div>
        <div className="flex gap-[20px] flex-col">
          <div className="flex gap-[90px]">
            <div>
              <Count
                FoodName="Idli"
                imgSrc={img1}
                imgAlt="Idli"
                FoodRate={FoodRate.IdliRate}
                Foodcount={count?.[selTab]?.IdliCount}
                Increment={() => Increment("IdliCount")}
                Decrement={() => Decrement("IdliCount")}
                Amount={Amount.IdliAmt}
              />
            </div>
            <div>
              <Count
                FoodName="Chapati"
                imgSrc={img2}
                imgAlt="Chapati"
                FoodRate={FoodRate.ChapatiRate}
                Foodcount={count?.[selTab]?.ChapatiCount}
                Increment={() => Increment("ChapatiCount")}
                Decrement={() => Decrement("ChapatiCount")}
                Amount={Amount.ChapatiAmt}
              />
            </div>
          </div>
          <div className="flex gap-[90px]">
            <div>
              <Count
                FoodName="Parotta"
                imgSrc={img3}
                imgAlt="Parotta"
                FoodRate={FoodRate.ParottaRate}
                Foodcount={count?.[selTab]?.ParottaCount}
                Increment={() => Increment("ParottaCount")}
                Decrement={() => Decrement("ParottaCount")}
                Amount={Amount.ParottaAmt}
              />
            </div>
            <div>
              <Count
                FoodName="Biriyani"
                imgSrc={img4}
                imgAlt="Biriyani"
                FoodRate={FoodRate.BiriyaniRate}
                Foodcount={count?.[selTab]?.BiriyaniCount}
                Increment={() => Increment("BiriyaniCount")}
                Decrement={() => Decrement("BiriyaniCount")}
                Amount={Amount.BiriyaniAmt}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[100px] md:gap-[300px]">
          <NavLink to={"/"}>
            <Button
              btnName="Back"
              className="border-[#e03131] border-2 px-[10px] text-[#ff8787] rounded-3xl md:text-[30px] md:border-[4px] lg:text-[34px] "
              type="submit"
            />
          </NavLink>
          <NavLink to={"/"}>
            <Button
              btnName="Save"
              className="border-[#087f5b] border-2 px-[10px] text-[#63e6be] rounded-3xl md:text-[30px] md:border-[4px] lg:text-[34px] "
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default TakeOdr;
