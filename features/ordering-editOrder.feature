@editOrder
Feature: Edit Order

Background: Login to app
    Given a user is logged in

Scenario: When the first item is scanned on an empty screen the keyboard should not appear
    Given a new order for vendor ID 2 is created
    And then goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the "C-Store" department is selected
    When a user scans the upc "0665290002030"
    Then the description text should be "Raspberries"
    And the keyboard input should not be visible

Scenario: When an item is scanned after on a filled screen the keyboard should not appear
    Given a new order for vendor ID 2 is created
    And then goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the "C-Store" department is selected
    When a user scans the upc "0665290002030"
    Then the description text should be "Raspberries"
    And the keyboard input should not be visible
    When a user scans the upc "0649632001140"
    Then the description text should be "Dippin Stix Swt Gala & Caramel"
    And the keyboard input should not be visible

Scenario: When an item is retrieved by entering on order code the keyboard should not appear
    Given a new order for vendor ID 2 is created
    And then goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the "C-Store" department is selected
    When order code "60981" is retrieved
    And the keyboard input should be visible
    And the description text should be "Dippin Stix Swt Gala & Caramel"
    Then the keyboard input should not be visible

Scenario: The keyboard appears when SOQ is focused
    Given a new order for vendor ID 2 is created
    And then goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the "C-Store" department is selected
    And a user scans the upc "0665290002030"
    And the description text should be "Raspberries"
    And the keyboard input should not be visible
    When the SOQ input is focused
    Then the keyboard input should be visible

Scenario: SOQ for IABD are able to be saved
    Given a new order for vendor ID 1100 is created
    And goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the "Asian" department is selected
    When a user scans the upc "8245800"
    And the user inputs "1" for the SOQ
    And a user taps the save button
    And a user scans the upc "8733800"
    And I sleep for 1 seconds
    And a user scans the upc "8245800"
    Then the SOQ should be "1"

Scenario: SOQ for vendors with an & are able to be saved
    Given a new order for vendor ID 13034 is created
    And goes to Edit Order
    And app bar should display "Edit Order"
    And the new order is selected
    And the Wine & Spirit department is tapped
    When a user scans the upc "0020106504850"
    And the user inputs "5" for the SOQ
    And a user taps the save button
    And the text "Chat De Sablet Bordeaux" should be displayed
    And a user scans the upc "0020106506040"
    And the text "Trozzi Dry Vermouth" should be displayed
    And a user scans the upc "0020106504850"
    And the text "Chat De Sablet Bordeaux" should be displayed
    Then the SOQ should be "5"
