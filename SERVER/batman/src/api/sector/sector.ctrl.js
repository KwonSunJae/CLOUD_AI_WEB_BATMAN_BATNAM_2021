import Sector from "../../model/Sector";

export const save = async (ctx) => {
  const req = ctx.request;
  const body = req.body;
  const _sector = new Sector({
    ...body,
    log: [],
  });
  await _sector.save();
  ctx.body = _sector;
};

export const test = ctx => {
    ctx.body = "It's a test";
}
