import Button from "../components/Button";
import Count from "../components/FoodComp";
import Dropdown from "../components/Dropdown";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FoodContext } from "../App";
const SelectTable = [
  { lable: "Table 1" },
  { lable: "Table 2" },
  { lable: "Table 3" },
  { lable: "Table 4" },
];

export function TakeOdr() {
  const { count, setCount, selTab, setSelTab, foods } = useContext(FoodContext);
  console.log(count?.[selTab], "count");
  const Increment = (type) => {
    console.log(type, "type");
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

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-14 bg-[#212529] ">
        <div className="w-full flex flex-col gap-[50px] ">
          <p className="text-5xl text-[#d07070] font-semibold flex justify-center pt-14 ">
            Add Items
          </p>
          <div className="flex gap-[300px] text-[19px]  bg-white bg-opacity-20 w-[80%] place-self-center justify-between rounded-xl p-2 px-10 border">
            <p className="font-medium  text-[#96f2d7] md:text-[24px] ">
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
        </div>
        <div>
          <div className="flex flex-col gap-[40px] w-full">
            <p className="text-[34px] justify-center flex text-[#fcc2d7]  ">
              Meals
            </p>
            <div className="flex flex-wrap justify-center gap-16 self-center">
              <div className="p-[30px] px-[40px] rounded-[40px]  bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0] ">
                {foods &&
                  foods.map((data) => {
                    console.log(foods, "foooooooooooods");
                    if (data.name === "burger") {
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="p-[30px] px-[40px] rounded-[40px] bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0]  ">
                {foods &&
                  foods.map((data) => {
                    if (data.name === "Tacos") {
                      // console.log(data, "foodname");
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="p-[30px] px-[40px] rounded-[40px] bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0]  ">
                {foods &&
                  foods.map((data) => {
                    if (data.name === "Pizza") {
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <p className="text-[34px] justify-center flex text-[#fcc2d7]">
              Dessert
            </p>
            <div className="flex flex-wrap gap-16 justify-center ">
              <div className="p-[30px] px-[60px] rounded-[40px] bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0]  ">
                {foods &&
                  foods.map((data) => {
                    if (data.name === "cake") {
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="p-[30px] rounded-[40px]  bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0]  ">
                {foods &&
                  foods.map((data) => {
                    if (data.name === "icecream") {
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <p className="text-[34px] justify-center flex text-[#fcc2d7]">
              Drinks
            </p>
            <div className="flex flex-wrap  justify-center">
              <div className="p-[30px] px-[60px]   bg-opacity-20  hover:shadow-2xl hover:shadow-[#8590f0] rounded-[40px] ">
                {foods &&
                  foods.map((data) => {
                    if (data.name === "Coffee") {
                      return (
                        <div key={data.id}>
                          <Count
                            FoodName={data.name}
                            imgSrc={data.image}
                            FoodRate={data.price}
                            Foodcount={count?.[selTab]?.[data.name]}
                            Increment={() => Increment(data.name)}
                            Decrement={() => Decrement(data.name)}
                            Amount={data.price}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[100px] md:gap-[300px]">
          <NavLink to={"/"}>
            <Button
              btnName="Back"
              className="border-[#e03131] border-2 px-[10px] text-[#ff8787] rounded-3xl md:text-[25px] md:border-[4px] lg:text-[34px] "
              type="submit"
            />
          </NavLink>
          <NavLink to={"/"}>
            <Button
              btnName="Save"
              className="border-[#087f5b] border-2 px-[10px] text-[#63e6be] rounded-3xl md:text-[25px] md:border-[4px] lg:text-[34px] "
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default TakeOdr;
