import { combineReducers } from "redux";

import fullscreen from "./fullscreen";
import runway from "./runway";
import log from "./log";
import start_property from "./start_property";

const rootReducer = combineReducers({
  fullscreen,
  runway,
  log,
  start_property,
});

export default rootReducer;
