const getAccountResource = (db) => (request, response) => {
  const id = request.params.id;
  const filteredAccounts = db.accounts.filter(
    accountResource => accountResource.accountId === id );
  return filteredAccounts[0];
};

export default getAccountResource;
