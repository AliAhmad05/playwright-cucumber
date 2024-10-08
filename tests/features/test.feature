Feature: Bldrtest Package Listing

  Background: Navigation
    Given The user is on the Bldrtest home page

  Scenario: Verify the website
    Then The user should see Query Generator button

  Scenario: List all the nodes
    When Click on the field and type "list node all"
    Then Verify that all the data is displayed
