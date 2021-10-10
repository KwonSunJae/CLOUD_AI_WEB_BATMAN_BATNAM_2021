import { createAction, handleActions } from "redux-actions";
import * as data from "../public/data";

const ADD_LOG = "log/ADD_LOG";

export const addLog = createAction(ADD_LOG, (log) => log);

const initState = {
  logList: data.logList,
};

export default handleActions(
  {
    [ADD_LOG]: (state, { payload: log }) => ({
      ...state,
      logList: state.logList.concat(log),
    }),
  },
  initState
);

// 서버에도 저장하고
// redux에서도 저장
