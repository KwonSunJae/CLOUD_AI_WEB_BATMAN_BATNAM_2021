import SelectList from "../../common/Input/SelectList";

const RunwayList = ({ value, handleChange, list }) => {
  return (
    <SelectList
      myWidth={250}
      label={"활주로"}
      value={value}
      list={list}
      handleChange={handleChange}
    />
  );
};

export default RunwayList;
