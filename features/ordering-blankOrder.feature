@blankOrdering
Feature: Blank Ordering

Background: Login to app
    Given a user is logged in

@blankOrderingAddingItemScanning
Scenario: The quantity of an item added to a new blank order should continually add together
    Given the "Ordering" app tile should be visible
    And a user taps the "Ordering" app tile
    Then the "Blank Order" app tile should be visible
    When a user taps the "Blank Order" app tile
    And a user chooses "HV GROCERY" warehouse
    And a user chooses "Dairy" department 
    And a user selects Today for delivery date
    And a user selects Today for an AFS date
    When a user taps Create Order button
    Then the Ok button is tapped
    And a user scans the upc "0049000009781"
    And a user enters a "40" for a quantity
    Then a user taps Add Item To Order
    And a user scans the upc "088810905004"
    And a user scans the upc "0049000009781"
    Then quantity equals "40"

@blankOrderingAddingItem
Scenario: After a new order has been created add an item to it
    Given the "Ordering" app tile should be visible
    And a user taps the "Ordering" app tile
    Then the "Blank Order" app tile should be visible
    When a user taps the "Blank Order" app tile
    And a user chooses "HV GROCERY" warehouse
    And a user chooses "Dairy" department 
    And a user selects Today for delivery date
    And a user selects Today for an AFS date
    When a user taps Create Order button
    Then the Ok button is tapped
    When a user enters a "1234" for a warehouse code
    And a user enters a 1 for a quantity
    Then a user taps Add Item To Order

@blankOrderingScanningItemToEmptyOrder
Scenario: After a new order has been created add an item to it by scanning item
    Given the "Ordering" app tile should be visible
    And a user taps the "Ordering" app tile
    Then the "Blank Order" app tile should be visible
    When a user taps the "Blank Order" app tile
    And a user chooses "HV GROCERY" warehouse
    And a user chooses "Dairy" department 
    And a user selects Today for delivery date
    And a user selects Today for an AFS date
    When a user taps Create Order button
    Then the Ok button is tapped
    And a user scans the upc "088810905002"
    Then a user taps Add Item To Order

