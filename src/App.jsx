import PageRout from "./Routingcontrol/Routing";
import { createContext, useState, useEffect } from "react";
export const FoodContext = createContext();

function App() {
  const [foods, setFood] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchdata = await fetch(
        "https://67ab129a65ab088ea7e888e5.mockapi.io/food"
      );
      const data = await fetchdata.json();
      setFood(data);
    }
    fetchData();
  }, []);
  console.log(foods, "data");

  const [selTab, setSelTab] = useState("Table 1");
  const [count, setCount] = useState({
    "Table 1": {
      burger: 0,
      icecream: 0,
      Coffee: 0,
      cake: 0,
      Tacos: 0,
      Pizza: 0,
    },

    "Table 2": {
      burger: 0,
      icecream: 0,
      Coffee: 0,
      cake: 0,
      Tacos: 0,
      Pizza: 0,
    },

    "Table 3": {
      burger: 0,
      icecream: 0,
      Coffee: 0,
      cake: 0,
      Tacos: 0,
      Pizza: 0,
    },

    "Table 4": {
      burger: 0,
      icecream: 0,
      Coffee: 0,
      cake: 0,
      Tacos: 0,
      Pizza: 0,
    },
  });
  return (
    <>
      <FoodContext.Provider
        value={{ count, setCount, selTab, setSelTab, foods, setFood }}
      >
        <PageRout />
      </FoodContext.Provider>
    </>
  );
}
export default App;
