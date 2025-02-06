import React, { useContext } from "react";
import Dropdown from "./components/Dropdown";
import { FoodContext } from "./App";
import { NavLink } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// const SelectTable = [
//   { lable: "Table 1" },
//   { lable: "Table 2" },
//   { lable: "Table 3" },
//   { lable: "Table 4" },
// ];
const FoodRate = {
  IdliRate: 15,
  ChapatiRate: 20,
  ParottaRate: 30,
  BiriyaniRate: 100,
};

export function CreateBill() {
  const { count, selTab, setSelTab } = useContext(FoodContext);
  const SelectTable = [
    { lable: "Table 1" },
    { lable: "Table 2" },
    { lable: "Table 3" },
    { lable: "Table 4" },
  ];

  const changeTable = (val) => {
    console.log(selTab, val);
    setSelTab(val.target.value);
    console.log(selTab, val);
  };
  console.log(selTab);
  const printRef = React.useRef(null);
  const downloadBill = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeigth = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeigth);
    pdf.save("OderBillpdf.pdf");
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-black text-white ">
        <h1 className="text-[30px] font-mono text-[#5bccd6] ">Created Bill</h1>
        <div className="flex gap-[100px] ">
          <div>Select Table</div>
          <Dropdown
            SelectTable={SelectTable}
            value={selTab}
            changeTable={changeTable}
          />
        </div>
        <div
          ref={printRef}
          className="border-[1px] p-[20px] rounded-lg text-black bg-white"
        >
          <div className="flex gap-[70px] pb-[20px] text-[#d9480f]">
            <p>Items</p>
            <p>MRP</p>
            <p>Count</p>
            <p>Price</p>
          </div>
          <div className="flex gap-[90px]  pb-[5px]">
            <p>Idli</p>
            <p>{FoodRate.IdliRate}</p>
            <p className="pl-[10px]">{count[selTab].IdliCount}</p>
            <p className="pl-[10px]">
              {FoodRate.IdliRate * count[selTab].IdliCount}
            </p>
          </div>
          <div className="flex gap-[60px] pb-[5px]">
            <p>Chapati</p>
            <p>{FoodRate.ChapatiRate}</p>
            <p className="pl-[38px]">{count[selTab].ChapatiCount}</p>
            <p className="pl-[39px]">
              {FoodRate.ChapatiRate * count[selTab].ChapatiCount}
            </p>
          </div>
          <div className="flex gap-[63px] pb-[5px]">
            <p>Parotta</p>
            <p>{FoodRate.ParottaRate}</p>
            <p className="pl-[36px]">{count[selTab].ParottaCount}</p>
            <p className="pl-[35px]">
              {FoodRate.ParottaRate * count[selTab].ParottaCount}
            </p>
          </div>
          <div className="flex gap-[64px] pb-[5px]">
            <p>Briyani</p>
            <p>{FoodRate.BiriyaniRate}</p>
            <p className="pl-[29px]">{count[selTab].BiriyaniCount}</p>
            <p className="pl-[34px]">
              {FoodRate.BiriyaniRate * count[selTab].BiriyaniCount}
            </p>
          </div>
          <br />
          <div className="flex justify-end">
            <p>
              {FoodRate.IdliRate * count[selTab].IdliCount +
                FoodRate.ChapatiRate * count[selTab].ChapatiCount +
                FoodRate.ParottaRate * count[selTab].ParottaCount +
                FoodRate.BiriyaniRate * count[selTab].BiriyaniCount}
            </p>
          </div>
          <div className="flex justify-end">
            <p>GST : 18%</p>
          </div>
          <br />
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-mono">
              {Math.floor(
                FoodRate.IdliRate * count[selTab].IdliCount +
                  FoodRate.ChapatiRate * count[selTab].ChapatiCount +
                  FoodRate.ParottaRate * count[selTab].ParottaCount +
                  FoodRate.BiriyaniRate * count[selTab].BiriyaniCount +
                  (FoodRate.IdliRate * count[selTab].IdliCount +
                    FoodRate.ChapatiRate * count[selTab].ChapatiCount +
                    FoodRate.ParottaRate * count[selTab].ParottaCount +
                    FoodRate.BiriyaniRate * count[selTab].BiriyaniCount) *
                    0.18
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-[100px]">
          <NavLink to={"/takeoder"}>
            <button className="px-[10px] border-[1px] rounded-lg text-[#e03131] border-[#c2255c]">
              Back
            </button>
          </NavLink>
          <button
            onClick={downloadBill}
            className="px-[10px] border-[1px] rounded-lg text-[#38d9a9] border-[#087f5b]"
          >
            Download Bill
          </button>
        </div>
      </div>
    </>
  );
}
export default CreateBill;
