import Router from "koa-router";

// import log from "./log";
// import runway from "./runway";
import sector from "./sector";

const api = new Router();

// api.use("/log", log.routes());
// api.use("/runway", log.routes());
api.use("/sector", sector.routes());

export default api;
