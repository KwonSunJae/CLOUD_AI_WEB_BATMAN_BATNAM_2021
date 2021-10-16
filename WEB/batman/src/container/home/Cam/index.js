import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CamBlock from "../../../component/home/Cam/CamBlock";

import {
  sizeChange,
  fullSizeCam,
  backSizeCam,
} from "../../../module/fullscreen";

const Cam = () => {
  const [page, setPage] = useState(0);
  const { currRunway, isFull, isCamFull, idOfCam, isLogin } = useSelector(
    (state) => ({
      currRunway: state.runway.curr,
      isFull: state.fullscreen.isFull,
      isCamFull: state.fullscreen.isCamFull,
      idOfCam: state.fullscreen.idOfCam,
      isLogin: state.login.isLogin,
    })
  );

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(sizeChange());
  };

  const onCamFullSize = (_id) => {
    dispatch(fullSizeCam(_id));
  };

  const onCamBackSize = () => {
    dispatch(backSizeCam());
  };

  const onPageClick = (diff) => {
    setPage(page + diff);
  };

  useEffect(() => {
    setPage(0);
  }, [currRunway]);

  const camSizeAttr = {
    isCamFull,
    idOfCam,
    onCamFullSize,
    onCamBackSize,
  };

  return (
    <CamBlock
      isFull={isFull}
      isLogin={isLogin}
      camSizeAttr={camSizeAttr}
      onClick={onClick}
      runway={currRunway}
      page={page}
      onPageClick={onPageClick}
    />
  );
};

export default Cam;
