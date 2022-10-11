@item
Feature: Ordering Item Maintenance < Item

Background: Login to the app
    Given the Login page has loaded
    And a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the "Ordering" app tile should be visible
    When a user taps the "Ordering" app tile
    And the "Item Maintenance" app tile should be visible
    When a user taps the "Item Maintenance" app tile

Scenario: Basics
    Given a user scans the upc "0000000030400"
    And the UPC should be "0000000030400"
    And the description should be "Dragonfruit 1.000 EA"
    And the order code should be "000000061098"
    And the vendor should be "FRITO"
    And the warehouse should be "PRODUCE"
    And the comm code should be ""
    Then the user toggles the DNO
    Then the user toggles the DNO until INV = 0
    Then the user taps the Save button
    Then the Ok button is tapped
