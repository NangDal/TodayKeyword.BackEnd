import "./db.js";
import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter.js";
import path from "path";

const app = express();
const logger = morgan("dev");
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

app.use(logger);
app.use(express.json());
app.use(express.static("./views"));
app.use("/assets", express.static("assets"));
app.get("/", (req, res) => {
  return res.send("hi");
});
app.get("/map", (req, res) => {
  res.sendFile(process.cwd() + "/src/views/naver_map.html");
});
app.use("/api", apiRouter);

app.listen(PORT, function () {
  console.log(`✅ 서버 열림 port:${PORT}`);
});
