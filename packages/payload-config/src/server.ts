import path from "path";
import dotenv from "dotenv";
import express from "express";
import payload from "payload";

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

const app = express();

app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000);
};

start();
