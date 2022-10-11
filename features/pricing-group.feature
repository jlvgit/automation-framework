@pricingGroup
Feature: Pricing Group

  Background: Login to app
    Given a user is logged in
    And the "Pricing" app tile should be visible
    And a user taps the "Pricing" app tile
    And the "Group" app tile should be visible
    And a user taps the "Group" app tile

  @mixMatchCode
  Scenario: Mix Match Code Loads
    Given the Group dropdown is visible
    When a user selects the "0106Weekly Ad" Group
    And the Mix Match label is visible
    And a user scans the upc "0049000009781"
    Then the Mix Match value is "8002 - FS Item .02"
