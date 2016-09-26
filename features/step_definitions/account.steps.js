import request from "supertest";
import { app } from "../../src";
import { expect } from "chai";

export default function() {

  this.Given(/^Ruben will not have an account$/, function (done) {
    // Write code here that turns the phrase above into concrete actions
    done();
  });
  
  this.When(/^Ruben submits a valid account creation request$/, function (done) {
    const params = {};
    
    request(app)
      .post("/api/v1/account_creations")
      .send(params)
      .end(callback);
    
    function callback(error, response) {
      done();
    }
  });
  
  this.Then(/^the platform shall create an account for Ruben$/, function (done) {
    request(app)
      .get("/api/v1/accounts")
      .end(callback);
    
    function callback(error, response) {
      done();
    }
  });
}