import { v4 } from "node-uuid";

export const createTokenResource = (props) => {
  const {
    username,
    commitId,
    creationDate,
    modificationDate,
    tokenId
  } = props;
  
  return {
    _links: {
      self: {
        href: `/api/v1/logins/${commitId}`
      },
      token: {
        href: `/api/v1/tokens/${tokenId}`
      }
    },
    username,
    commitId,
    version: 1,
    creationDate,
    modificationDate
  }
};