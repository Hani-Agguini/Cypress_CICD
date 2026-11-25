///<reference types = "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../Pages/HomePage.page'

Given('je suis sur le site {string}', (s) => {
  cy.visit(s)
})

When('je saisi l email {string}', (s) => {
    cy.get('#email').type(s)         
})


When('je saisi le password {string}', (s) => {
    cy.get('#password').type(s)  
})

When('je click sur se connecter', () => {
    cy.get('[data-test="login-submit"]').click()          
})

Then('je suis redirege vers la page principale {string}', (s) => {
    cy.url().should('include',s)
})

When('je click sur projet sauce demo', () => {
  HomePage.clickProjetSauceDemo()
})

Then('je suis redirege vers page projet sauce demo {string}', (s) => {
    cy.url().should('include',s)
})
