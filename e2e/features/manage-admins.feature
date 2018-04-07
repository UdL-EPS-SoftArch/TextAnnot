Feature: Manage Administrators
  In order to manage the registered administrators
  As an administrator
  I want to list, register, view, edit and delete them

  Scenario: List all administrators logged as admin when just default one
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    When I click submenu option "Admins" in menu "Administration"
    Then I see 1 users

  Scenario: No listed administrators when logged as user
    Given I'm on the home page and logged out
    And I sign in as "user" with password "password"
    When I click submenu option "Admins" in menu "Administration"
    Then I see 0 users

  Scenario: No listed administrators when not logged in
    Given I'm on the home page and logged out
    When I click submenu option "Admins" in menu "Administration"
    Then I see 0 users

  Scenario: Register new administrator and view details
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    And I click submenu option "Admins" in menu "Administration"
    And I see 1 users
    When I click the "Add Administrator" button
    And I fill the user form with username "admin2", e-mail "admin2@textannot.org" and password "password"
    Then I see a user with name "admin2"
    And I see a user with e-mail "admin2@textannot.org"
    And I click the "Back to List" button
    And I see 2 users

  Scenario: Delete an existing administrator
    Given I'm on the home page and logged out
    And I sign in as "admin" with password "password"
    And I click submenu option "Admins" in menu "Administration"
    And I see 2 users
    And I click the user with name "admin2"
    And I see a user with name "admin2"
    When I click the "Delete" button
    And I confirm the deletion
    Then I see 1 users
