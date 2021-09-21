import dotenv from "dotenv";
import Koa from "koa";
import Router from "koa-router";
import mongoose from "mongoose";

dotenv.config();

const URI = process.env.URI;

mongoose.connect(URI,()=>{
  console.log('db connect!');
});

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Router Example";
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server on");
});
