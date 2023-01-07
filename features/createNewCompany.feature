Feature: Create new company feature

    Scenario: Verify create new company successfully
        Given User navigate to Casso login page
        When Input User name and password and click on login button
        Then User is able to login to the Casso page successfully

        When User click on create new company button
        Then Verify open create company form
        When Input website and company name, select random option and click submit
        Then Verify create company successfully
