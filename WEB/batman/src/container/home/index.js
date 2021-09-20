import { useDispatch, useSelector } from "react-redux";

import { sizeChange } from "../../module/fullscreen";
import Home from "../../component/home";

const HomeContainer = () => {
  console.log(sizeChange);
  const dispatch = useDispatch();
  const { isFull } = useSelector((state) => ({
    isFull: state.fullscreen.isFull,
  }));

  const onClick = () => {
    dispatch(sizeChange());
  };

  return <Home isFull={isFull} onClick={onClick} />;
};

export default HomeContainer;
