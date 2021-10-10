import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CamBlock from "../../../component/home/Cam/CamBlock";

import { sizeChange } from "../../../module/fullscreen";

const Cam = () => {
  const [page, setPage] = useState(0);
  const { currRunway, isFull } = useSelector((state) => ({
    currRunway: state.runway.curr,
    isFull: state.fullscreen.isFull,
  }));

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(sizeChange());
  };

  const onPageClick = (diff) => {
    setPage(page + diff);
  };

  useEffect(() => {
    setPage(0);
  }, [currRunway]);

  return (
    <CamBlock
      isFull={isFull}
      onClick={onClick}
      runway={currRunway}
      page={page}
      onPageClick={onPageClick}
    />
  );
};

export default Cam;
