import {Given, When, Then , Before, BeforeStep, After, AfterStep} from "@badeball/cypress-cucumber-preprocessor";

Before(() =>{
    cy.log("this is the before hook")
})

BeforeStep(() =>{
    cy.log("this is the beforestep hook")
})

After(() => {
    cy.log("this is for the after hook")
})

AfterStep(() =>{
    cy.log("this is the afterstep hook")
})
Given("User opens the webpage",()=>{
    cy.visit("https://www.google.com")
})

When("User verify the title of the page", ()=>{
    cy.title().should('contains', 'Google')
    cy.screenshot("from title of page")
})