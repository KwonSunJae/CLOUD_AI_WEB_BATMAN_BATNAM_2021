import Router from "koa-router";

import sector from "./sector";
import runway from "./runway";
import log from "./log";
import auth from "./auth";

import checkLoggedIn from "../lib/checkLoggedIn";

const api = new Router();

api.use("/sector", checkLoggedIn, sector.routes());
api.use("/runway",  checkLoggedIn, runway.routes());
api.use("/log",  checkLoggedIn, log.routes());

api.use("/auth",auth.routes());

api.get("/test",ctx=>{
	console.log("test");
	ctx.body = "test";
})

export default api;
