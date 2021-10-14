import Router from "koa-router";

// import log from "./log";
// import runway from "./runway";
import sector from "./sector";
import runway from "./runway";

const api = new Router();

// api.use("/log", log.routes());
// api.use("/runway", log.routes());
api.use("/sector", sector.routes());
api.use("/runway", runway.routes());

export default api;
