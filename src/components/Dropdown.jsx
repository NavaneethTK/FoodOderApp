function Dropdown(props) {
  return (
    <>
      <div>
        <select
          onChange={props.changeTable}
          className="text-[#bac8ff] font-medium  bg-[#343a40]  border-[#9ddf9e] border-[1px] px-[10px] text-[13px] rounded-lg md:text-[24px] md:border-[3px]"
        >
          {props.SelectTable.map((opt, id) => (
            <option
              selected={props.value === opt.lable}
              key={id}
              className="text-[#bac8ff] bg-[#343a40 ] md:text-[24px] font-medium "
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
