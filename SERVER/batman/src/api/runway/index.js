import Router from "koa-router";

import * as ruwnayCtrl from "./runway.ctrl";

const runway = new Router();

runway.post("/load", ruwnayCtrl.save);

export default runway;
