import { createAction, handleActions } from "redux-actions";

const SIZE_CHANGE = "fullscreen/SIZE_CHANGE";

export const sizeChange = createAction(SIZE_CHANGE);

const initState = {
  isFull: false,
};

export default handleActions(
  {
    [SIZE_CHANGE]: (state) => ({
      ...state,
      isFull: !state.isFull,
    }),
  },
  initState
);
