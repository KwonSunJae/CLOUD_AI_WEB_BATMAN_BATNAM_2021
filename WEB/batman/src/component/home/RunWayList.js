import { useState } from "react";
import SelectList from "../common/Input/SelectList";

const list = [{ value: 0, label: "RunWay" }];

for (let i = 0; i < 5; i++) {
  list.push({ value: i + 1, label: "RunWay " + (i + 1) });
}

const RunWayList = () => {
  const [value, setValue] = useState(0);

  return (
    <SelectList
      width={250}
      label={"활주로"}
      value={value}
      setValue={setValue}
      list={list}
    />
  );
};

export default RunWayList;
