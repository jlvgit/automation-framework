@onHandHistory
Feature: Ordering Item Maintenance < On Hand History

Background: Login to the app
    Given the Login page has loaded
    And a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the "Ordering" app tile should be visible
    When a user taps the "Ordering" app tile
    And the "Item Maintenance" app tile should be visible
    When a user taps the "Item Maintenance" app tile
    Given a user scans the upc "0028400000240"

Scenario: Scrolling the On Hand History
    Given a user scans the upc "0028400000240"
    And the comm code should be "1009"
    And the user goes to the "ON HAND HISTORY" tab
    And the user chooses "September" for the month in On Hand History
    And the user chooses "2020" for the year in On Hand History
    And the user scrolls the On Hand History until "05/17/21" is visible
