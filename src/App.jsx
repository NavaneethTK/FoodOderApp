import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import TakeOdr from "./TakeOdr";
import CreateBill from "./CreateBill";
import Dropdown from "./components/Dropdown";
import { createContext, useState } from "react";
export const FoodContext = createContext();

function App() {
  const [selTab, setSelTab] = useState("Table 1");
  const [count, setCount] = useState({
    "Table 1": {
      IdliCount: 0,
      ChapatiCount: 0,
      ParottaCount: 0,
      BiriyaniCount: 0,
    },

    "Table 2": {
      IdliCount: 0,
      ChapatiCount: 0,
      ParottaCount: 0,
      BiriyaniCount: 0,
    },

    "Table 3": {
      IdliCount: 0,
      ChapatiCount: 0,
      ParottaCount: 0,
      BiriyaniCount: 0,
    },

    "Table 4": {
      IdliCount: 0,
      ChapatiCount: 0,
      ParottaCount: 0,
      BiriyaniCount: 0,
    },
  });
  return (
    <>
      <FoodContext.Provider value={{ count, setCount, selTab, setSelTab }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/takeoder" element={<TakeOdr />} />
          <Route path="/createbill" element={<CreateBill />} />
          <Route path="/dropdown" element={<Dropdown />} />
        </Routes>
      </FoodContext.Provider>
    </>
  );
}
export default App;
