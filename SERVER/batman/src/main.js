import dotenv from "dotenv";
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";

import api from "./api";

dotenv.config();

const URI = process.env.URI;

mongoose.connect(URI, () => {
  console.log("db connect!");
});

const app = new Koa();

app.use(bodyParser());

const router = new Router();

router.use("/api", api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server on");
});
