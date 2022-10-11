@pricingIM @pricingIMCostTab
Feature: Pricing Item Maintenance

Background: Login to app
    Given a user is logged in
    And user navigates to Pricing Item Maintenance
    Then app bar should display "Item Maintenance"

@waitForIdleTimeout500 @deactivateTestItem
Scenario: When an item has an expired allowance, the item can still be reactivated
    Given a user scans the upc "0678286888880"
    And the Yes button is tapped
    And the Pricing Item Maintenance label should display the text "Activating:"
    And the options icon is tapped
    When the "Activate" option is tapped
    Then a dialog should appear with the text "There are expired Temporary Allowances tied to this item. End Date 1, End Date 3 cannot be before today."
    When the Ok button is tapped
    Then the upc "0678286888880" should be reactivated
