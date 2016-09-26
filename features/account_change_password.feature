Feature: Change Account Password

  Ruben wants to change his account
  because he forgot it

  Scenario Outline: Strong Password

    Given Ruben will have an account
    When Ruben attempts to change his password with the strong password <password>
    Then the platform shall change Ruben's password to <password>

  Scenario Outline: Weak Password

    Given Ruben will have an account
    When Ruben attempts to change his password with the weak password <password>
    Then the platform shall reject his password
