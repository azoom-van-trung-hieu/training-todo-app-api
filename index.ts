import express from "express";
import nnnRouter from "@azoom/nnn-router";
import requestLogger from "@middleware/request-logger";

const app = express();

app.use(requestLogger);
app.use(express.json());

const options = {
  routeDir: "/dist/routes",
};

app.use(nnnRouter(options));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
