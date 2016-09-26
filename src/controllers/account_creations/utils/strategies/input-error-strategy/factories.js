import {v4} from "node-uuid";

export function createErrorResource(validationResult) {
  const guid = v4();
  return {
    _links: {
      self: {
        href: `/api/v1/errors/${guid}`
      }
    },
    "type": "https://eyeqvr.com/problems/validation-error",
    "title": "your request parameters did not validate",
    "invalid-params": validationResult
  }
}