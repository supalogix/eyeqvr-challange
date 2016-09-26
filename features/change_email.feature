Feature: Change Email

  Scenario: Email Changed
  
    When Ruben changes his email
    Then the system shall update his email
  
  Scenario: Duplicate Email
  
    When Ruben changes is email
    Then the system shall reject his email