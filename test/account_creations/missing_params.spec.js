import request from "supertest";
import { app } from "../../src";
import { expect } from "chai";
import { v4 } from "node-uuid";

describe("accountController", () => {
  it("validates input correctly", (done) => {
    //
    // Arrange
    //
    const accountCreationRequest = {
      accountId: "1234",
      commitId: "1234",
      username: "john.doe",
      password: "Qwerty!234",
      email: "john.doe@nowhere.com",
      profile: {
        name: "John Doe",
        location: "Los Angeles",
        age: 20
      }
    };

    //
    // Act
    //
    request(app)
      .post("/api/v1/account_creations")
      .send(accountCreationRequest)
      .end(accountCreationResponse);

    //
    // Assert
    //
    function accountCreationResponse(error, response) {
      const resource = response.body;
      expect(resource['invalid-params']).to.deep.equal([
        {
          name: "accountId",
          reason: "accountId is not a uuid"
        },
        {
          name: "commitId",
          reason: "commitId is not a uuid"
        }
      ])
      
      done();
    }
  })
})
