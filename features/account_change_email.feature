Feature: Change Account Email

  Ruben wants to change his email
  because he has a new one

  Scenario: Email Changed
  
    Given Ruben will have an account
    When Ruben changes his email
    Then the platform shall update Ruben's email
  
  Scenario Outline: Invalid Email Provided
  
    Given Ruben will have an account
    When Ruben attempts to change his email with the invalid format <email>
    Then the system shall reject Ruben's change request
    
    Examples:
    
    | email        |
    | ruben@.com   |
    | ruben        |
