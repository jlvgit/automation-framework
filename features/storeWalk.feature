@storeWalk
Feature: Store Walk

Background: Login to the app
    Given the Login page has loaded
    And a valid user id is entered
    And a valid password is entered
    And the Login button is tapped
    And the "Store Walk" app tile should be visible
    When a user taps the "Store Walk" app tile
    Then Store Walk has loaded

Scenario: Scan an item
    Given a user scans the upc "0049000009781"
    Then store walk title should display the text "Dasani Water 6Pk 6 PK"

Scenario: Swipe through store walk tabs
    Given the user swipes to the "left" on the tabs bar
    And the user swipes to the "right" on the tabs bar
    When the user swipes to the "next" tab
    Then the current tab should be the "ORDER HISTORY" tab
    And the user swipes to the "next" tab
    Then the current tab should be the "ON HAND HISTORY" tab
    And the user swipes to the "next" tab
    Then the current tab should be the "COMPARE" tab
    And the user swipes to the "next" tab
    Then the current tab should be the "LINE PRICE" tab
    And the user swipes to the "next" tab
    Then the current tab should be the "LINE PRICE" tab
    And the user swipes to the "previous" tab
    Then the current tab should be the "COMPARE" tab
    And the user swipes to the "previous" tab
    Then the current tab should be the "ON HAND HISTORY" tab
    And the user swipes to the "previous" tab
    Then the current tab should be the "ORDER HISTORY" tab
    And the user swipes to the "previous" tab
    Then the current tab should be the "PRICE HISTORY" tab
    And the user swipes to the "previous" tab
    Then the current tab should be the "PRICE HISTORY" tab

Scenario: Scroll through history
    Given a user scans the upc "0049000009781"
    And store walk title should display the text "Dasani Water 6Pk 6 PK"
    When the user expands the Show History area
    And scroll the Show History area until the text "Reversing 0120Weekly Ad" is visible
    And the user collapses the Show History area

Scenario: Go to each tab by tapping on the tab bar
    Given the user goes to the "ORDER HISTORY" tab
    And the user goes to the "ON HAND HISTORY" tab
    And the user goes to the "COMPARE" tab
    And the user goes to the "LINE PRICE" tab
    When the user swipes to the "right" on the tabs bar
    And the user goes to the "PRICE HISTORY" tab

Scenario: Enter an On Hand Value
    Given a user taps the "Store Walk" app tile
    And Store Walk has loaded
    When the user enters "6" for the On Hand value
    Then the On hand should have a value of "6"

Scenario: Enter a Retail Value
    Given a user taps the "Store Walk" app tile
    And Store Walk has loaded
    When the user enters "6" for the Retail Multiple value
    And the user enters "6" for the Retail Price value
    Then the Retail Multiple should have a value of "6"
    And the Retail Price should have a value of "6"

Scenario: Select from Fuel Saver Dropdown
    Given a user scans the upc "0049000009781"
    When the user selects "0.03" from the Fuel Saver Dropdown
    Then the Fuel Saver input should have a value of "0.03"

@test @waitForIdleTimeout500
Scenario: Item is retained when Pricing IM option is tapped
    Given a user scans the upc "0049000009781"
    And store walk title should display the text "Dasani Water 6Pk 6 PK"
    And the options icon is tapped
    And the "Pricing IM" option is tapped
    Then the current UPC should be "00-49000-009780"
    And the retail price in the Pricing IM cost tab should be "2.99"
    And the base price in the Pricing IM cost tab should be "2.99"
    And the POS Description in the Pricing IM cost tab should be "DASANI WATER 6PK"
    And the Description in the Pricing IM cost tab should be "Dasani Water 6Pk"
