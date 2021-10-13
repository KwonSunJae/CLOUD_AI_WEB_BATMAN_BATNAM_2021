import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";

import RunwayGraphic from "../../../component/home/Runway/RunwayGraphic";

import { add_current } from "../../../module/runway";

const RunwayGraphicCntr = () => {
  const dispatch = useDispatch();
  const { curr,isDetect,runway } = useSelector((state) => ({
    curr: state.runway.curr,
    isDetect:state.detect.isDetect,
    runway:state.detect.runway
  }));

  useEffect(()=>{
    if(runway)
    dispatch(add_current(runway._id))
  },[runway,dispatch])
	// 감시중이면 current에 추가해줌

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
