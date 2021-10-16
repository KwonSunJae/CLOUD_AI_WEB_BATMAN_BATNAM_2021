import Router from "koa-router";

import * as logCtrl from "./log.ctrl";

const log = new Router();

log.post("/", logCtrl.save);

log.get("/",logCtrl.list);
log.get("/:_id",logCtrl.read);

log.patch("/:_id",logCtrl.update);
log.delete("/:_id",logCtrl.remove);

export default log;
