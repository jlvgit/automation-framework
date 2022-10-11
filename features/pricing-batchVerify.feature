@batchVerify
Feature: Batch Verify

@retailInvalidMessage
Scenario Outline: The invalid message will appear when entering a decimal point
    Given a user is logged in
    And the "Pricing" app tile should be visible
    And a user taps the "Pricing" app tile
    And the "Batch Verify" app tile should be visible
    And a user taps the "Batch Verify" app tile
    Given the Batch Verify Entry page has loaded
    And I sleep for 3 seconds to let the batch list load
    And the "Verify Applied Batch" radio button is tapped
    And the batch "2482640 - Temp Batch for Testing" is selected
    And hide the keyboard
    And the Add Selected button is tapped
    And the Verify button is tapped
    When the Batch Verify Scanning page has loaded
    And a user scans the upc "0049000009781"
    And the user inputs "." for the <priceField>
    And I sleep for 2 seconds
    And the user taps the Batch Verify Save button
    Then a dialog should appear with the text "<dialogText> must be valid."

    Examples:
        | priceField           | dialogText     |
        | future retail price  | Future Retail  |
        | future base price    | Future Base    |
        | current retail price | Current Retail |
        | current base price   | Current Base   |

@deleteTempBatch
Scenario: Applied temporary batch has future price fields
    Given a new temporary batch is created
    And a user is logged in
    And in Batch Verify
    And the Batch Verify Entry page has loaded
    And I sleep for 3 seconds to let the batch list load
    Given the new batch is selected
    And the Add Selected button is tapped
    And the count should have a value of "1"
    And the Apply button is tapped
    When the Batch Verify Scanning page has loaded
    Then the Future Retail fields should be visible
    And the Future Base fields should be visible
    And the Future Date fields should be visible
    When a user scans the upc "0678286888880"
    And the Yes button is tapped
    And the user inputs a random future retail price with a max value of 3.99
    And hide the keyboard
    And the user taps the Batch Verify Save button
    Then the future retail price of upc "0678286888880" should match the random price
