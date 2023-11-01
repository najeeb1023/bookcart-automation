@LoginUser
Feature: User Autentication tests

    Background:
        Given User navigates to the application
        And User clicks on the login link
    
    Scenario: Login should be success
        And User enter the username as "<USERNAME>"
        And User enter the password as "<PASSWORD>"
        When User click on the login button
        Then Login should be success

        Examples:
            | USERNAME | PASSWORD |
            | ortoni   | Pass1234 |

    Scenario: Login should not be success
        Given User enter the username as "<USERNAME>"
        Given User enter the password as "<PASSWORD>"
        When User click on the login button
        But Login should fail

        Examples:
            | USERNAME | PASSWORD |
            | wrongID   | wrongPass1234 |