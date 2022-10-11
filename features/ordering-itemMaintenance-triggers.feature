@triggers
Feature: Ordering Item Maintenance < Triggers

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
    When the user goes to the "TRIGGERS" tab
    Then the current tab should be the "TRIGGERS" tab
    And the user sets the Minimum Stock to "3"
    And the user sets the Service Goal to "100"
    And the user sets the Case Multiple to "2"
    And the user sets the Case Minimum to "2"
    And the Minimum Stock should be "3"
    And the Service Goal should be "100"
    And the Actual Trigger should be "2"
    And the Suggested Trigger should be "0.0"
    And the Safety Stock should be "0.0"
    And the UPCs should be "1"
    And the Case Multiple should be "2"
    And the Case Minimum should be "2"
    And the Last Week Movement should be "0"
    And the Week to Date should be "0"
    And the Order Cycle should be "0.0 - 0.0 days"
    And the Lead Time should be "0.0"
    And the On Hand should be "0.0"
    And the On Order should be "0"
    And the Week Forecast should be "6.00647354"
