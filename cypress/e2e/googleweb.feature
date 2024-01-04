@Feature1
Feature: Verify the google web

    verify the title of google web
Background: 
    Given User opens the webpage
    
    @smoke 
    Scenario: Verify title of google1
    And User verify the title of the page

    @regression
    Scenario: Verify title of google2
    Then User verify the title of the page

    @regression @smoke
    Scenario: Verify title of google3
    Then User verify the title of the page