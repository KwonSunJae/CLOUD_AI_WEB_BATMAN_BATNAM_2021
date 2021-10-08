import { useDispatch, useSelector } from "react-redux";

import RunwayList from "../../../component/home/Runway/RunwayList";

import { add_current } from "../../../module/runway";

const RunwayListCntr = () => {
  const dispatch = useDispatch();
  const { curr, runwayList } = useSelector((state) => ({
    curr: state.runway.curr,
    runwayList: state.runway.runwayList,
  }));

  let runwayList_added_default = [
    {
      name: "활주로 선택",
      _id: "0",
    },
  ];

  runwayList_added_default = runwayList_added_default.concat(runwayList);

  console.log(runwayList_added_default);

  const handleChange = (e) => {
    dispatch(add_current(e.target.value));
  };

  return (
    <RunwayList
      value={curr._id}
      handleChange={handleChange}
      list={runwayList_added_default}
    />
  );
};

export default RunwayListCntr;
