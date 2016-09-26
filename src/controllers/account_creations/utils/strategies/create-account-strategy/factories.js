import {v4} from "node-uuid";

export const createAccountCreationResource = (accountResource) => {
  const {
    commitId,
    creationDate,
    modificationDate,
  } = accountResource;
  
  return {
    _links: {
      self: {
        href: `/api/v1/account_creations/${commitId}`
      },
      account: {
        href: accountResource._links.self.href
      }
    },
    commitId,
    creationDate,
    modificationDate,
    _embedded: {
      account: accountResource
    }
  };
};

export const createAccountResource = (props) => {
  const {
    accountId,
    commitId,
    username,
    password,
    email,
    profile,
    creationDate,
    modificationDate
  } = props;
  
  const now = new Date().toISOString();
  
  return {
    _links: {
      self: {
        href: `/api/v1/accounts/${accountId}`
      }
    },
    accountId,
    commitId,
    username,
    password,
    email,
    profile,
    creationDate,
    modificationDate
  };
};