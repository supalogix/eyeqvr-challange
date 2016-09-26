import { validateInput } from "./input-validation";
import { validateBusinessRules } from "./business-rule-validation";
import {
  accountCreationResource,
  createAccountResource,
  createErrorResource
} from "./resource-factory";

export const createAccountCreationResource = (db) =>
  (request, response) =>
  accountCreationStrategyFactory(db, request)
    .execute()
    .then( resource => response.json(resource) );
  /*
  const inputValidation = validateInput(request.body);
  if(inputValidation.hasErrors()) {
    const errorResource =
      createErrorResource(inputValidation.errors);
    db.errors.push(errorResource);
    response.json(errorResource);
    
    return;
  }
  
  const businessRuleViolations = validateBusinessRules(db, request.body);
  if(businessRuleViolations.hasErrors()) {
    const businessRuleErrorResource =
      createBusinessRuleErrorResource(
        businessRuleViolations.errors);
    db.errors.push(errorResource);
    
    return;
  }
  const now = new Date().toISOString();
  const accountResource = createAccountResource(Object.assign({},request.body, {
    modificationDate: now,
    creationDate: now
  }));
  db.accounts.push(accountResource);
  
  const resource = accountCreationResource(accountResource);
  db.accountCreations.push(resource);

  response.json(resource);
  */

function accountCreationStrategyFactory(db, request) {
  const strategies = [
    new InputErrorStrategy(db, request.body),
    new BusinessRulesErrorStrategy(db, request.body),
    new CreateAccountStrategy(db, request.body)
  ];

  for(var i = 0; i < strategies.length; i++) {
    if( strategies[i].test() )
      return strategies[i];
  }

  return new EmptyStrategy();
}

class EmptyStrategy {
  execute() {
    return new Promise((resolve,reject) => {
      throw "could not find a strategy";
    });
  }
}

class InputErrorStrategy {
  constructor(db, params) {
    this.db = db;
    this.params = params;
    this.inputValidation = validateInput(params);
  }

  test() {
    return this.inputValidation.hasErrors();
  }

  execute() {
    const self = this;
    return new Promise((resolve,reject) => {
      const errorResource = createErrorResource(
        self.inputValidation.errors);
      self.errors.push(errorResource);
      resolve(errorResource);
    });
  }
}

class BusinessRulesErrorStrategy {
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

class CreateAccountStrategy {
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

      const resource = accountCreationResource(accountResource);
      self.db.accountCreations.push(resource);
      resolve(resource);
    });
  }
}

export default createAccountCreationResource;
