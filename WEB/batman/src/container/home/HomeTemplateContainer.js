import { useDispatch, useSelector } from "react-redux";

import HomeTemplate from "../../component/home/HomeTemplate";
import { sizeUp, sizeDown } from "../../module/grid";

const HomeTemplateContainer = () => {
  const dispatch = useDispatch();
  const { fullSize } = useSelector((state) => ({
    fullSize: state.grid.fullSize,
  }));

  const onUpSize = (id) => {
    dispatch(sizeUp(id));
  };

  const onDownSize = (id) => {
    dispatch(sizeDown(id));
  };

  return (
    <HomeTemplate fullSize={fullSize} onClick={{ onUpSize, onDownSize }} />
  );
};

export default HomeTemplateContainer;
