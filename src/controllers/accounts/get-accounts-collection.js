export const getAccountsCollection = (db) => (request, response) => {
  response.json(db.accounts);
};

export default getAccountsCollection;
