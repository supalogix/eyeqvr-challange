Feature: Change Password

  As a registered member
  I want to change my password
  So that can change my mind in the futurece

  Background: Existing Account
    Given Alex has an account
    | username | password   | email                |
    | john.doe | Qwerty!234 | john.doe@nowhere.com |

  Scenario: Strong Password

    Given Alex will have an account
    When Alex submits a change password request with a strong password
    Then the platform will change his password

  Scenario: Weak Password

    Given Alex will have an account
    When Alex submits a change password request with a weak password
    Then the platform will reject his password

  Scenario: Bad Authentication Token

    Given Alex will have
    When alex submits a change password request
      And Alex does not have an authentication token
    Then the platform will reject his password
