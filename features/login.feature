@login
Feature: Login Page

Background: Go to Login Page
    Given the Login page has loaded

@basic-login
Scenario: Login as a basic user
    When a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the Main Menu page has loaded
    And the "Ordering" app tile should be visible
    When a user taps the "Logout" app tile
    And the "Yes" button to log out is tapped
    Then the Login page should have loaded

@login-version-text
Scenario: Confirm the app version is displayed and validate the text
    And hide the keyboard
    Given the app version is displayed
    Then the app version should match the properties file
    And the store number should be "8718"
