Feature: Create Account

  Alice wants to create an account
  So that she can use exclusive features of the platform

  Scenario: Account Created

    Given Alice will not have an account
    When Alice submits a valid account creation request
    Then the platform shall create an account for alice

  Scenario: Username Already Exists

    Given Alice will not have an account
      And the username "alice" will exist
    When Alice submits an account creation request with "alice" as the username
    Then the platform shall reject the request for a new account
      And the platform shall provide an error report

  Scenario: Weak Password

    Given Alice will not have an account
    When Alice submits an account creation request
    Then the platform shall reject the request for a new account
      And the platform shall provide an error report
