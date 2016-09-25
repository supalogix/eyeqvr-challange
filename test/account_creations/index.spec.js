import request from "supertest";
import { app } from "../../src";
import { expect } from "chai";
import { v4 } from "node-uuid";

describe("accountController", () => {
  it("creates a new account", (done) => {
    //
    // Arrange
    //
    const accountCreationRequest = {
      accountId: v4(),
      commitId: v4(),
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
      const {
        accountId,
        commitId,
        username,
        password,
        email,
        profile
      } = accountCreationRequest;
      
      const account = resource._embedded.account;
      
      expect(resource.commitId).to.equal(commitId);
      expect(resource._links).to.deep.equal({
        self: {
          href: `/api/v1/account_creations/${commitId}`
        },
        account: {
          href: `/api/v1/accounts/${accountId}`
        }
      });
      expect(account.username).to.equal(username);
      expect(account.email).to.equal(email);
      expect(account.password).to.equal(password);
      expect(account.profile).to.deep.equal(profile);
      
      done();
    }
  })
})
