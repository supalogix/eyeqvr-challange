import {
  createAccountResource,
  createAccountCreationResource
} from "./factories";

export class CreateAccountStrategy {
  constructor(db, params) {
    this.db = db;
    this.params = params;
  }

  test() {
    return true;
  }

  execute() {
    const self = this;

    return new Promise((resolve, reject) => {
      const now = new Date().toISOString();
      const accountResource = createAccountResource(Object.assign({},this.params, {
        modificationDate: now,
        creationDate: now
      }));
      self.db.accounts.push(accountResource);

      const resource = createAccountCreationResource(accountResource);
      self.db.accountCreations.push(resource);
      resolve(resource);
    });
  }
}