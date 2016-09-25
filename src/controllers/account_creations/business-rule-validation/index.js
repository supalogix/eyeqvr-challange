export const validateBusinessRules = (db, props)  => ({
  errors: [],
  hasErrors() {
    return this.errors.length > 0;
  }
});