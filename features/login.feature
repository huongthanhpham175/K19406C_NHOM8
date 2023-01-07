# Feature: Business rules for login
#   In order to achieve my goals
#   As a persona
#   I want to be able to login step

#   Scenario: Check login flow
#     Given I login to Casso page

Feature: Login feature

  Scenario: Verify that the user can login successfully
    Given User navigate to Casso login page
    When Input User name and password and click on login button
    Then User is able to login to the Casso page successfully