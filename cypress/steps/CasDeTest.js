///<reference types = "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import ProjetPage from '../Pages/ProjetPage'

Given('je suis sur le site {string}', (s) => {
  cy.visit(s)
})

When('je saisi l email {string}', (s) => {
    LoginPage.setEmail(s)        
})

When('je saisi le password {string}', (s) => {
    LoginPage.setMpd(s)
})

When('je click sur se connecter', () => {
    LoginPage.clickLogin()         
})

Then('je suis redirege vers la page principale {string}', (s) => {
    cy.url().should('include',s)
})

When('je click sur projet sauce demo', () => {
    HomePage.clickburger()
    HomePage.clickProjetSauceDemo()
})

Then('je suis redirege vers page projet sauce demo {string}', (s) => {
  cy.url().should('include',s)
  ProjetPage.getprojet().should("be.visible")

})

When('je click sur + cas de test', () => {
  ProjetPage.clickajoutcasdetest()

})

Then('je suis redirege vers Nouveau cas de test {string}', (s) => {
  cy.url().should('include',s)
})

When('je saisi titre {string}', (s) => {
  ProjetPage.settitre(s)
})

When('je selectionne Statut {string}', (s) => {
  ProjetPage.choseStatus(s)
})

When('je saisi Données de test {string}{string}&quot;', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie Préconditions {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie l objectif {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je coche la Plateformes {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je selectionne Type {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je selectionne Priorite {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisi Regle de gestion {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je click sur ajouter une etape', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je saisie dans etape3 Action:{string} Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je saisie dans etape2 Action:{string} Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je vois {int} dans etapes', (int) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie dans etape1 Action:{string} le site&quot; Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie Postconditions {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie dans etape1 Action:{string} le site&quot; Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisi Données de test {string}{string}&quot;', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisi Données de test {string}{string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisie dans etape1 Action:{string} Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je saisie dans etape4 Action:{string} Donnees:{string} Resultat:{string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je selectionne Module {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisi User Story {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je selectionne Module \&#x2F; Fonctionnalité {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je saisi User Story \&#x2F; Exigence {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})



