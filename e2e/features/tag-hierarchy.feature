Feature: Manage Tag hierarchies
  In order to manage tag hierarchies
  As an administrator
  I want to list, add, view, edit and delete them

  Scenario: List all tag hierarchies
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    When I click submenu option "Tag Hierarchy" in menu "Administration"
    Then I see 0 tag hierarchies

  Scenario: Create tag hierarchy
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    When I click submenu option "Tag Hierarchy" in menu "Administration"
    And I create a tag hierarchy with name "name"
    And I click the submit button
    Then I see 1 tag hierarchies
    And a tag hierarchy with name "name" is present


  Scenario: Delete tag hierarchy
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    When I click submenu option "Tag Hierarchy" in menu "Administration"
    And I delete the tag hierarchy with name "name"
    And I confirm the deletion
    Then I see 0 tag hierarchies


