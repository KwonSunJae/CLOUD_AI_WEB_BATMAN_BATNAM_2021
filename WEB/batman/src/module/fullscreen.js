import { createAction, handleActions } from "redux-actions";

const SIZE_CHANGE = "fullscreen/SIZE_CHANGE";
const FULL_SIZE_CAM = "fullscreen/FULL_SIZE_CAM";
const BACK_SIZE_CAM = "fullscreen/BACK_SIZE_CAM";

export const sizeChange = createAction(SIZE_CHANGE);
export const fullSizeCam = createAction(FULL_SIZE_CAM, (_id) => _id);
export const backSizeCam = createAction(BACK_SIZE_CAM);

const initState = {
  isFull: false,
  isCamFull: false,
  idOfCam: null,
};

export default handleActions(
  {
    [SIZE_CHANGE]: (state) => ({
      ...state,
      isFull: !state.isFull,
    }),
    [FULL_SIZE_CAM]: (state, { payload: _id }) => ({
      ...state,
      isCamFull: true,
      idOfCam: _id,
    }),
    [BACK_SIZE_CAM]: (state) => ({
      ...state,
      isCamFull: false,
      idOfCam: null,
    }),
  },
  initState
);
