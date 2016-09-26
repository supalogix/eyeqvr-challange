import { validateInput } from "./validators";
import { createErrorResource } from "./factories";

export class InputErrorStrategy {
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

      self.db.errors.push(errorResource);
      
      resolve(errorResource);
    });
  }
}
