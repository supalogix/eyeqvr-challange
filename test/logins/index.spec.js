import request from "supertest";
import {app} from "../../src";
import {loginController} from "../../src";
/*
const {
  resourceFactory
} = loginController;

describe("Successful Login", (done) => {

  it("create", () => {
    console.log(loginController);
    //
    // Arrange
    //
    const loginRequest = {
      commitId: "cd249a8c-f14c-47b4-9941-9b14d374aa13",
      username: "john.doe",
      password: "Qwerty!234"
    };
    
    //
    // Act
    //
    request(app)
      .post("/api/v1/logins")
      .send(loginRequest)
      .end(onLogin);

    //
    // Assert
    //
    function onLogin(error, request) {
      const resource = request.body;
      expect(resource._links.token).to.be.defined;
      expect(resource._links.self).to.be.defined;
      done();
    }
  });
  
  it("create token", () => {
    //
    // Arrange
    //
    const props = {
      username: "john.doe",
      tokenId: "88476f8e-9981-4650-93a0-c115d48fc6cb",
      commitId: "cf3a3573-99eb-409c-9008-20cbf9520685",
      creationDate: "2016-09-25T23:53:54Z",
      modificationDate: "2016-09-25T23:53:54Z"
      
    };
    
    //
    // Act
    //
    const tokenResource = resourceFactory
      .createTokenResource(props);
    
    //
    // Assert
    //
    expect(tokenResource).to.deep.equal({
      _links: {
        self: {
          href: "/api/v1/logins/cf3a3573-99eb-409c-9008-20cbf9520685"
        },
        token: {
          href: "/api/v1/tokens/88476f8e-9981-4650-93a0-c115d48fc6cb?commitId=cf3a3573-99eb-409c-9008-20cbf9520685"
        }
      },
      commitId: "cf3a3573-99eb-409c-9008-20cbf9520685",
      username: "john.doe",
      creationDate: "2016-09-25T23:53:54Z",
      modificationDate: "2016-09-25T23:53:54Z"
    })
  })
})
*/