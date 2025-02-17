import Home from "../Pages/Home";
import TakeOdr from "../Pages/TakeOdr";
import CreateBill from "../Pages/CreateBill";
import Dropdown from "../components/Dropdown";
import { Routes, Route } from "react-router-dom";

import React from "react";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/takeoder" element={<TakeOdr />} />
      <Route path="/createbill" element={<CreateBill />} />
      <Route path="/dropdown" element={<Dropdown />} />
    </Routes>
  );
}

export default Routing;
