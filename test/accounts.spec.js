import request from "supertest";
import { app } from "../src";
import { expect } from "chai";

describe("accountController", () => {
  it("creates a new account", (done) => {
    //
    // Arrange
    //
    const accountCreationRequest = {
      username: "john.doe",
      password: "Qwerty!234",
      email: "john.doe@nowhere.com"
    };

    //
    // Act
    //
    request(app)
      .post("/api/v1/accounts")
      .send(accountCreationRequest)
      .end(accountCreationResponse);

    //
    // Assert
    //
    function accountCreationResponse(error, response) {
      const resource = response.body;
      const {
        username,
        password,
        email
      } = accountCreationRequest;

      expect(resource.username).to.equal(username);
      expect(resource.email).to.equal(email);
      done();
    }
  })
})
