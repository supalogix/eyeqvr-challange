import {v4} from "node-uuid";
import validator from "validator";

export const validateInput = (props) => ({
  errors: []
    .concat(accountIdIsMissing(props))
    .concat(accountIdIsInvalid(props))
    .concat(commitIdIsInvalid(props)),
  hasErrors() {
    return this.errors.length > 0;
  }
});

function accountIdIsMissing(props) {
  if (!props.accountId)
    return [{
      name: "accountId",
      reason: "accountId is missing"
    }];
  
  return [];
}

function accountIdIsInvalid(props) {
  if( !validator.isUUID(props.accountId) )
    return [{
      name: "accountId",
      reason: "accountId is not a uuid"
    }];
  
  return [];
}
  
function commitIdIsInvalid(props) {
  if( !validator.isUUID(props.commitId) )
    return [{
      name: "commitId",
      reason: "commitId is not a uuid"
    }];
  
  return [];
}
