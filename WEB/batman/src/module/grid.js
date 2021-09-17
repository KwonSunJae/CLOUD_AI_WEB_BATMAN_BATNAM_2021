import { createAction, handleActions } from "redux-actions";

const SIZE_UP = "grid/SIZE_UP";
const SIZE_DOWN = "grid/SIZE_DOWN";

export const sizeUp = createAction(SIZE_UP, (id) => id);
export const sizeDown = createAction(SIZE_DOWN, (id) => id);

const initState = {
  fullSize: -1,
};

export default handleActions(
  {
    [SIZE_UP]: (state, { payload: id }) => ({
      ...state,
      fullSize: id,
    }),
    [SIZE_DOWN]: (state, action) => ({
      ...state,
      fullSize: -1,
    }),
  },
  initState
);
