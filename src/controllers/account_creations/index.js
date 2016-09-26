import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import createAccountCreationResource from "./create-account-resource";

export const accountCreationController = (db) => {
  const app = express();
  app.use(bodyParser.json());

  app.post("/api/v1/account_creations", createAccountCreationResource(db));

  return app;
};
