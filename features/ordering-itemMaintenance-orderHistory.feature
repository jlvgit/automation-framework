@orderHistory
Feature: Ordering Item Maintenance < Order History

Background: Login to the app
    Given the Login page has loaded
    And a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the "Ordering" app tile should be visible
    When a user taps the "Ordering" app tile
    And the "Item Maintenance" app tile should be visible
    When a user taps the "Item Maintenance" app tile

Scenario: Scrolling the Order History
    Given I sleep for 5 seconds
    Given a user scans the upc "0028400000240"
    And the comm code should be "1009"
    And the user goes to the "ORDER HISTORY" tab
    And the Ok button is tapped
    And the user chooses "September" for the month in Order History
    And the Ok button is tapped
    And the user chooses "2020" for the year in Order History
    And the user scrolls the Order History until "09/11/20" is visible
