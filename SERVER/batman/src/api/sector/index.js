import Router from "koa-router";

import * as sectorCtrl from "./sector.ctrl";

const sector = new Router();

sector.post("/load", sectorCtrl.save);
sector.get("/test", sectorCtrl.test);

export default sector;
