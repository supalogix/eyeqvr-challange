Feature: Login to Account

  Ruben wants to login to the platform
  because he wants to use exlusive features of the platform
  
  Scenario: Username and Password Accepted
  
    Given Ruben will have an account
    When Ruben logs-in
    Then the platform will authenticate him

  Scenario: Username and Password Rejected
  
    Given Ruben will have an account
    When Ruben provides an incorrect username and password
    Then the platform will reject his authentication
      And the platform will log Ruben's error