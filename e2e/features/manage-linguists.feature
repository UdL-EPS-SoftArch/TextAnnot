Feature: Manage Linguists
  In order to manage the registered linguists
  As an administrator
  I want to list, register, view, edit and delete them

  Scenario: List all linguists logged as admin when just default one
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    When I click submenu option "Linguists" in menu "Administration"
    Then I see 1 users

  Scenario: Linguist can also list all linguists
    Given I'm on the home page and logged out
    And I sign in as "user" with password "password"
    When I click submenu option "Linguists" in menu "Administration"
    Then I see 1 users

  Scenario: No listed linguists when not logged in
    Given I'm on the home page and logged out
    When I click submenu option "Linguists" in menu "Administration"
    Then I see error alert "You should be logged in to perform this action" and close it
    And I see 0 users

  Scenario: Register new linguist and view details
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    And I click submenu option "Linguists" in menu "Administration"
    And I see 1 users
    When I click the "Add Linguist" button
    And I fill the user form with username "user2", e-mail "user2@textannot.org" and password "password"
    Then I see a user with name "user2"
    And I see a user with e-mail "user2@textannot.org"
    And I click the "Back to List" button
    And I see 2 users

  Scenario: Linguists cannot register other linguists
    Given I'm on the home page and logged out
    And I sign in as "user" with password "password"
    And I click submenu option "Linguists" in menu "Administration"
    And I see 2 users
    When I click the "Add Linguist" button
    Then I see error alert "You should be an administrator to perform this action" and close it
    And I see 2 users

  Scenario: Delete an existing linguist
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    And I click submenu option "Linguists" in menu "Administration"
    And I see 2 users
    And I click the user with name "user2"
    And I see a user with name "user2"
    When I click the "Delete" button
    And I confirm the deletion
    Then I see 1 users


  Scenario: Linguists cannot delete other linguists
    Given I'm on the home page and logged out
    And I sign in as "user" with password "password"
    And I click submenu option "Linguists" in menu "Administration"
    And I see 1 users
    And I click the user with name "user"
    And I see a user with name "user"
    When I click the "Delete" button
    And I confirm the deletion
    Then I see error alert "Forbidden" and close it
    And I see 1 users
