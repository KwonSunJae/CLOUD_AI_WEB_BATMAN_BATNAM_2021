import Router from "koa-router";

import * as runwayCtrl from "./runway.ctrl";

const runway = new Router();

runway.post("/", runwayCtrl.save);
runway.get("/:_id",runwayCtrl.read);
runway.patch("/:_id",runwayCtrl.update);
runway.delete("/:_id",runwayCtrl.remove);
export default runway;
