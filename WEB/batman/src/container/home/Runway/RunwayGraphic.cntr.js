import { useSelector } from "react-redux";

import RunwayGraphic from "../../../component/home/Runway/RunwayGraphic";

const RunwayGraphicCntr = () => {
  const { curr } = useSelector((state) => ({
    curr: state.runway.curr,
  }));

  // const form = {
  //   name: curr.name,
  //   angle_start: curr.angles[0],
  //   angle_end: curr.angles[1],
  //   top: curr.sectors.top,
  //   bottom: curr.sectors.bottom,
  // };

  return <RunwayGraphic form={curr} />;
};

export default RunwayGraphicCntr;
