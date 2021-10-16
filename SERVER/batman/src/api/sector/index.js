import Router from "koa-router";

import * as sectorCtrl from "./sector.ctrl";

const sector = new Router();

sector.post("/", sectorCtrl.save);

sector.get("/",sectorCtrl.list);
sector.get("/:_id",sectorCtrl.read);

sector.patch("/:_id",sectorCtrl.update);
sector.delete("/:_id",sectorCtrl.remove);

export default sector;
