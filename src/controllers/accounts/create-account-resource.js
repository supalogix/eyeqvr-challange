import {v4} from "node-uuid";

export const createAccountResource = (db) => (request, response) => {
  const {
    username,
    password,
    email
  } = request.body;

  const guid = v4();
  const now = new Date().toISOString();

  const resource = {
    _links: {
      self: {
        href: `/api/v1/${guid}`
      }
    },
    account_id: guid,
    username,
    password,
    email,
    creation_datetime: now,
    modification_datetime: now
  };

  //db.accounts.insert(resource);

  response.json(resource);
};

export default createAccountResource;
