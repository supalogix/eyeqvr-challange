import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  accountController,
  accountCreationController,
  loginsController
} from "./controllers";
import db from "./persistence";

export const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(accountCreationController(db));
app.use(accountController(db));
//app.use(authenticationController(db));
//app.use(authenticationRevocationController(db));
//app.use(errorController(db));
//app.use(passwordChangeController(db));
//app.use(profileChangeController(db));
export {
  loginsController as loginController
}
