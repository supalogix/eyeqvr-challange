export const validateBusinessRules = (db, props)  => ({
  errors: [],
  hasErrors() {
    return this.errors.length > 0;
  }
});

export class BusinessRulesErrorStrategy {
  constructor(db, params) {
    this.db = db;
    this.params = params;
    this.businessRuleViolations =
      validateBusinessRules(db, params);
  }

  test() {
    return this.businessRuleViolations.hasErrors();
  }

  execute() {
    return new Promise((resolve,reject) => {
      resolve({});
    })
  }
}