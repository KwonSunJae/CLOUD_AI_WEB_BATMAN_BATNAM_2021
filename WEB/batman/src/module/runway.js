import { createAction, handleActions } from "redux-actions";

const ADD_RUNWAY = "runway/ADD_RUNWAY";
const REMOVE_RUNWAY = "runway/REMOVE_RUNWAY";
const UPDATE_RUNWAY = "runway/UPDATE_RUNWAY";
const ADD_CURRENT = "runway/ADD_CURRENT";

export const add_runway = createAction(ADD_RUNWAY, (r) => r);
export const remove_runway = createAction(REMOVE_RUNWAY, (id) => id);
export const update_runway = createAction(UPDATE_RUNWAY, (id, r) => ({
  id,
  r,
}));
export const add_current = createAction(ADD_CURRENT, (id) => id);

const initState = {
  runwayList: [
    {
      name: "활주로 1",
      _id: "1",
      angles: [10, 10],
      sectors: {
        top: ["섹터 1", "섹터 1", "섹터 1"],
        bottom: ["섹터 1", "섹터 1", "섹터 1"],
      },
    },
    {
      name: "활주로 2",
      _id: "2",
      angles: [20, 20],
      sectors: {
        top: ["섹터 2", "섹터 2", "섹터 2"],
        bottom: ["섹터 2", "섹터 2", "섹터 2"],
      },
    },
  ],
  curr: {
    name: "활주로",
    _id: "0",
    angles: [0, 0],
    sectors: {
      top: ["섹터 0", "섹터 0", "섹터 0"],
      bottom: ["섹터 0", "섹터 0", "섹터 0"],
    },
  },
  default: {
    name: "활주로",
    _id: "0",
    angles: [0, 0],
    sectors: {
      top: ["섹터 0", "섹터 0", "섹터 0"],
      bottom: ["섹터 0", "섹터 0", "섹터 0"],
    },
  },
};

export default handleActions(
  {
    [ADD_RUNWAY]: (state, { payload: newRunway }) => ({
      ...state,
      runway: state.runwayList.concat(newRunway),
    }),
    [REMOVE_RUNWAY]: (state, { payload: id }) => ({
      ...state,
      runway: state.runwayList.filter((r) => r._id !== id),
    }),
    [UPDATE_RUNWAY]: (state, { payload: { id, _r } }) => ({
      ...state,
      runway: state.runwayList.map((r) => (r._id !== id ? r : _r)),
    }),
    [ADD_CURRENT]: (state, { payload: id }) => ({
      ...state,
      curr: state.runwayList.find((r) => r._id === id) || state.default,
    }),
  },
  initState
);
