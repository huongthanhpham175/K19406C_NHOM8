Feature: Create, edit, delete Api Key

    Scenario: Verify Create, edit, delete Api Key successfully
        Given User login successfully
        When User open api keys page
        Then Verify show api keys page
        When Create api key
        Then Verify create api successfully

        When Edit api key
        Then Verify edit api successfully

        When Delete api key
        Then Verify delete api successfully