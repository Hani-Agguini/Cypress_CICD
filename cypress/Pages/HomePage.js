class HomePage{

    elements = {
        ProjetSauceDemo :()=>cy.contains(".truncate", "Projet Sauce Demo"),
    }

    clickProjetSauceDemo(){
        this.elements.ProjetSauceDemo().click()
    }


}