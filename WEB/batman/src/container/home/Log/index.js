import { useSelector } from "react-redux";

import SearchedList from "../../../component/home/Log/SearchedList";

const Log = () => {
  const { logList } = useSelector((state) => ({
    logList: state.log.logList,
  }));
  console.log(logList);
  return <SearchedList list={logList} />;
};

export default Log;
