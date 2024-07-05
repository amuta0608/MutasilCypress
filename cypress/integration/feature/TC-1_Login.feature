@regression
Feature: Login

@tc1 @loginonly
Scenario: "Login Success"
User success login with correct username and correct password
    Given I already on swaglab page
    When I click the username
    And insert the username
    And I click the password
    And insert the password
    Then click the login button
    And Directly to the dashboard page
@tc1
Scenario: "Login Gagal Karena Username Salah"
User insert incorrect username
    Given I already on swaglab page
    When I click the username
    And insert incorrect username
    And I click the password
    And insert correct password
    Then click the login button
    And Show error message
@tc1
Scenario: "Login Gagal Karena Password Salah"
User insert incorrect password
    Given I already on swaglab page
    When I click the username
    And insert correct username
    And I click the password
    And insert incorrect password
    Then click the login button
    And Show error message
@tc1
Scenario: "Login Gagal Karena kolom kosong"
User insert incorrect password
    Given I already on swaglab page
    When click the login button
    And Show error message empty

    