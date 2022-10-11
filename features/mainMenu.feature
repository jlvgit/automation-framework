@mainMenu
Feature: Main Menu

Background: Login to app
    Given the Login page has loaded
    When a valid user id is entered
    And a valid password is entered
    And the Login button is tapped

@main-menu-tiles
Scenario: Menu tiles display
    Given the Main Menu page has loaded
    And the "Ordering" app tile should be visible
    Then the "Pricing" app tile should be visible
    And the "Receiving" app tile should be visible
    And the "Department Transfers" app tile should be visible
    And the "Store Walk" app tile should be visible
    And the "Inventory" app tile should be visible
    And the "Item Rank" app tile should be visible
    And the "Settings" app tile should be visible
    And the "Logout" app tile should be visible
