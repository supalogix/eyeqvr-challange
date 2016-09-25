import { validateInput } from "./input-validation";
import { validateBusinessRules } from "./business-rule-validation";
import {
  accountCreationResource,
  createAccountResource,
  createErrorResource
} from "./resource-factory";

export const createAccountCreationResource = (db) => (request, response) => {
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
  db.accountCreations.push(accountCreationResource);

  response.json(resource);
};

export default createAccountCreationResource;
