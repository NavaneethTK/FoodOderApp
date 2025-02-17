import React, { useContext } from "react";
import Dropdown from "../components/Dropdown";
import { FoodContext } from "../App";
import { NavLink } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../components/Button";

export function CreateBill() {
  const { count, selTab, setSelTab, foods } = useContext(FoodContext);
  const SelectTable = [
    { lable: "Table 1" },
    { lable: "Table 2" },
    { lable: "Table 3" },
    { lable: "Table 4" },
  ];

  const changeTable = (val) => {
    setSelTab(val.target.value);
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

  let totalAmount = 0;

  foods.forEach((data) => {
    const FoodCount = count[selTab]?.[data.name];
    totalAmount = totalAmount + data.price * FoodCount;
    // console.log(count[selTab]?.[data.name]);
  });

  const gstAmount = totalAmount * 0.18;
  const grandTotal = Math.floor(totalAmount + gstAmount);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-[#212529] p-[10px] ">
        <h1 className="text-[44px]  text-[#e0f299] ">Created Bill</h1>
        <div class="flex gap-[300px] text-[19px]  bg-white bg-opacity-20 w-[70%] place-self-center justify-between rounded-xl p-2 px-10 border">
          <div className="text-[26px] text-[#99e9f2] ">Select Table</div>
          <Dropdown
            SelectTable={SelectTable}
            value={selTab}
            changeTable={changeTable}
          />
        </div>
        <div
          ref={printRef}
          className="border-[3px] border-[#495057] p-[10px] rounded-lg text-black bg-gradient-to-r from-[#cbcbcb] via-[#adafb4] to-[#ffffff] "
        >
          <div>
            <table className="text-center ">
              <thead className="text-[#882020] text-[34px]">
                <tr>
                  <th className="px-[40px]">Items</th>
                  <th className="px-[40px]">MRP</th>
                  <th className="px-[40px]">Count</th>
                  <th className="px-[40px]">Price</th>
                </tr>
              </thead>
              <tbody className="text-[25px] ">
                {foods?.map((data) => {
                  if (data.name === "burger") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                  if (data.name === "Tacos") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                  if (data.name === "Pizza") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                  if (data.name === "cake") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                  if (data.name === "icecream") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                  if (data.name === "Coffee") {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{count[selTab]?.[data.name]}</td>
                        <td>{data.price * count?.[selTab]?.[data.name]}</td>
                      </tr>
                    );
                  }
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{totalAmount}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>GST:</td>
                  <td>18% </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{grandTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between w-[50%] text-[26px] ">
          <NavLink to={"/"}>
            <Button
              className="px-[10px] border-[2.9px] rounded-lg text-[#e03131] border-[#c2255c] "
              btnName={"Back"}
            />
          </NavLink>
          <Button
            onClick={downloadBill}
            className="px-[10px] border-[2.9px] rounded-lg text-[#38d9a9] border-[#087f5b] "
            btnName={"Download Bill"}
          />
        </div>
      </div>
    </>
  );
}
export default CreateBill;
