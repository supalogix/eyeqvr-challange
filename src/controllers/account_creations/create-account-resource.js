import { createAccountCreationStrategy } from "./utils";

export const createAccountCreationResource = (db) =>
  (request, response) =>
  createAccountCreationStrategy(db, request)
    .execute()
    .then( resource => response.json(resource) );

export default createAccountCreationResource;
