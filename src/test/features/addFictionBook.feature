@Admin
Feature: Navigates to Ficition Category

Background:
    Given navigates to the application
    And   clicks on the login link

Scenario: Navigate to fiction category
    And Enter the username as "ortoni"
    And Enter the password as "Pass1234"
    When Click on the login button
    Then User click to fiction category book
    And User is able to select Wicked and the Wallflower Sarah MacLean bookcart