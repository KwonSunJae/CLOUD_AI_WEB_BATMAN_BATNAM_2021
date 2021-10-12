import { createAction, handleActions } from "redux-actions";
import * as data from "../public/data";

const CHANGE_ATTR = "start_property/CHANGE_ATTR";

export const changeAttr = createAction(CHANGE_ATTR, (attr) => attr);

const initState = {
  runwayList: data.runwayList,
  runwaySelected: 0,
  startTime: null,
  endTime: null,
  isNow: false,
};

// 1. Using Saga to Connect each Action -- !

export default handleActions(
  {
    [CHANGE_ATTR]: (state, { payload: attr }) => ({
      ...state,
      [attr.name]: [attr.value],
    }),
  },
  initState
);
