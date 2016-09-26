Feature: Logout of an Account

  Ruben wants to logout of his account
  because he does not want people to use his account while he is away

  Scenario: Logged Out Successfully

    Given Ruben will login
    When Ruben logs out
    Then the platform logs him out
