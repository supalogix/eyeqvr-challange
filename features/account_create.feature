Feature: Create Account

  Ruben wants to create an account
  So that she can use exclusive features of the platform

  Scenario: Account Created

    Given Ruben will not have an account
    When Ruben submits a valid account creation request
    Then the platform shall create an account for Ruben

  Scenario: Username Already Exists

    Given Ruben will not have an account
    When Ruben submits an account creation request
    Then the platform shall reject the request for a new account
      And the platform shall provide an error report

  Scenario: Weak Password

    Given Ruben will not have an account
    When Ruben uses a weak password for a new account
    Then the platform shall reject the request for a new account
      And the platform shall provide an error report
