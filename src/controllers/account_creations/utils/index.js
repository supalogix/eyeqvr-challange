
import {
  EmptyStrategy,
  InputErrorStrategy,
  CreateAccountStrategy,
  BusinessRulesErrorStrategy
} from "./strategies";

export function createAccountCreationStrategy(db, request) {
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
