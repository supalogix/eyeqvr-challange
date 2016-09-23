Feature: Change Password

  As a registered member
  I want to change my password
  So that can change my mind in the futurece

  Background: Existing Account
    Given Alex has an account
    | username | password   | email                | profile__name | profile__dob  | profile__sex |
    | john.doe | Qwerty!234 | john.doe@nowhere.com | John Doe      | June 30, 2000 | Male         |

  Scenario: Strong Password

    Given Alex will have an account

    When Alex submits a change password request
    Then the platform will

  Scenario: Weak Password

    Given Alex will have an account
    When Alex submits a change password request

  Scenario: Bad Authentication Token
