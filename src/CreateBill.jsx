import React, { useContext } from "react";
import Dropdown from "./components/Dropdown";
import { FoodContext } from "./App";
import { NavLink } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "./components/Button";

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
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-[#212529] p-[10px] md:h-screen">
        <h1 className="text-[24px]  text-[#99e9f2] md:text-[58px]">
          Created Bill
        </h1>
        <div className="flex gap-[100px] md:gap-[400px] ">
          <div className="text-[18px] text-[#99e9f2] md:text-[30px]">
            Select Table
          </div>
          <Dropdown
            SelectTable={SelectTable}
            value={selTab}
            changeTable={changeTable}
          />
        </div>
        <div
          ref={printRef}
          className="border-[3px] border-[#495057] p-[10px] rounded-lg text-black bg-gradient-to-r from-[#cbcbcb] via-[#adafb4] to-[#ffffff] w-[300px] md:w-[700px] md:h-[600px]"
        >
          <div className="flex justify-between pb-[10px] text-[#7e0808] w-[280px] md:text-[38px] md:w-[680px] ">
            <p className="pr-[28px]">Items</p>
            <p>MRP</p>
            <p>Count</p>
            <p>Price</p>
          </div>
          <div className="flex justify-between w-[280px] pb-[5px] md:text-[38px] md:w-[680px]">
            <p className="pr-[28px]">Idli</p>
            <p>{FoodRate.IdliRate}</p>
            <p>{count[selTab].IdliCount}</p>
            <p>{FoodRate.IdliRate * count[selTab].IdliCount}</p>
          </div>
          <div className="flex justify-between w-[280px] pb-[5px] md:text-[38px] md:w-[680px]">
            <p>Chapati</p>
            <p>{FoodRate.ChapatiRate}</p>
            <p>{count[selTab].ChapatiCount}</p>
            <p>{FoodRate.ChapatiRate * count[selTab].ChapatiCount}</p>
          </div>
          <div className="flex justify-between w-[280px] pb-[5px] md:text-[38px] md:w-[680px]">
            <p>Parotta</p>
            <p>{FoodRate.ParottaRate}</p>
            <p>{count[selTab].ParottaCount}</p>
            <p>{FoodRate.ParottaRate * count[selTab].ParottaCount}</p>
          </div>
          <div className="flex justify-between w-[280px] pb-[5px] md:text-[38px] md:w-[680px]">
            <p>Briyani</p>
            <p>{FoodRate.BiriyaniRate}</p>
            <p>{count[selTab].BiriyaniCount}</p>
            <p>{FoodRate.BiriyaniRate * count[selTab].BiriyaniCount}</p>
          </div>
          <br />
          <div className="flex justify-end md:text-[38px] md:w-[680px]">
            <p>
              {FoodRate.IdliRate * count[selTab].IdliCount +
                FoodRate.ChapatiRate * count[selTab].ChapatiCount +
                FoodRate.ParottaRate * count[selTab].ParottaCount +
                FoodRate.BiriyaniRate * count[selTab].BiriyaniCount}
            </p>
          </div>
          <div className="flex justify-end md:text-[38px] md:w-[680px]">
            <p>GST : 18%</p>
          </div>
          <br />
          <div className="flex justify-between md:text-[38px] md:w-[680px]">
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
        <div className="flex gap-[100px] md:gap-[200px]">
          <NavLink to={"/"}>
            <Button
              className="px-[10px] border-[2.9px] rounded-lg text-[#e03131] border-[#c2255c] md:text-[28px] md:border-[4px]"
              btnName={"Back"}
            />
          </NavLink>
          <Button
            onClick={downloadBill}
            className="px-[10px] border-[2.9px] rounded-lg text-[#38d9a9] border-[#087f5b] md:text-[28px] md:border-[4px]"
            btnName={"Download Bill"}
          />
        </div>
      </div>
    </>
  );
}
export default CreateBill;
