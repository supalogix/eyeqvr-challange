import express from "express";
import * as resourceFactory from "./resource-factory";

const loginsController = (db) => {
  const app = express();

  app.post("/api/v1/logins", createTokenResource(db));

  return app;
}

export default loginsController;
export {
  resourceFactory
};
