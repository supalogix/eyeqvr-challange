import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import getAccountResource from "./get-account-resource";
import getAccountsCollection from "./get-accounts-collection";

export const accountController = (db) => {
  const app = express();

  app.get("/api/v1/accounts", getAccountsCollection(db));
  app.get("/api/v1/accounts/:id", getAccountResource(db));

  return app;
};
