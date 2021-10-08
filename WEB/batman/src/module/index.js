import { combineReducers } from "redux";

import fullscreen from "./fullscreen";
import runway from "./runway";

const rootReducer = combineReducers({
  fullscreen,
  runway,
});

export default rootReducer;
