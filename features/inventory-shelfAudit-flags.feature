@shelfAudit
Feature: Batch Verify

Background: Go to Login Page
    Given the inventory date is current
    And the zero return code row exists in the database

@zeroReturnCode @waitForIdleTimeout500
Scenario Outline: User should not be able to save with a Return Code of 0
    Given a user is logged in
    And the "Inventory" app tile should be visible
    And a user taps the "Inventory" app tile
    And the "Shelf Audit" app tile should be visible
    And a user taps the "Shelf Audit" app tile
    And app bar should display "Shelf Audit"
    When the Backroom radio button is selected
    And the Next button is tapped
    And the current tab should be the "Shelf Audit" tab
    And the "FLAGS" tab is tapped
    Then the current tab should be the "FLAGS" tab
    Given a user scans the upc "0028400000240"
    And the user scrolls to the bottom flags
    When the user selects "Zero Return Code for Test" for the link-return code
    And taps the Save button on the flags tab
    Then a dialog should appear with the text "Return code cannot be blank or zero."

