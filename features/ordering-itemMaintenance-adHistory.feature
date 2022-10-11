@adHistory
Feature: Ordering Item Maintenance < Ad History

Background: Login to the app
    Given the Login page has loaded
    And a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the "Ordering" app tile should be visible
    When a user taps the "Ordering" app tile
    And the "Item Maintenance" app tile should be visible
    When a user taps the "Item Maintenance" app tile

@disabled
Scenario: Scrolling the On Hand History
    Given a user scans the upc "0000000030930"
    And the comm code should be "1009"
    And the user goes to the "TRIGGERS" tab
    And the user goes to the "ON HAND HISTORY" tab
    And the user clicks on the pop-up dialog
    And the user goes to the "ORDER HISTORY" tab
    And the user clicks on the pop-up dialog
    And the user goes to the "AD HISTORY" tab
    And the user scrolls the Ad History until "8" is visible
