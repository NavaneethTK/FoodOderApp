function Dropdown(props) {
  return (
    <>
      <div>
        <select
          onChange={props.changeTable}
          className="text-[#bac8ff] font-medium  bg-black  border-[#eebefa] border-[1px] px-[10px] text-[18px] rounded-lg"
        >
          {props.SelectTable.map((opt, id) => (
            <option
              selected={props.value === opt.lable}
              key={id}
              className="text-[#bac8ff] bg-black  font-medium "
            >
              {opt.lable}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export default Dropdown;
