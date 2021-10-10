import { useDispatch, useSelector } from "react-redux";

import RunwayList from "../../../component/home/Runway/RunwayList";

import { add_current } from "../../../module/runway";

const RunwayListCntr = () => {
  const dispatch = useDispatch();
  const { curr, runwayList } = useSelector((state) => ({
    curr: state.runway.curr,
    runwayList: state.runway.runwayList,
  }));

  const handleChange = (e) => {
    dispatch(add_current(e.target.value));
  };

  return (
    <RunwayList
      value={curr._id}
      handleChange={handleChange}
      list={runwayList}
    />
  );
};

export default RunwayListCntr;
