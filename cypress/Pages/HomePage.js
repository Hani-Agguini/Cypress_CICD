class HomePage{

    elements = {
        ProjetSauceDemo :()=>cy.contains(".truncate", "Projet Sauce Demo"),
        hamburger:()=>cy.get('[data-testid="menu-open"]')
    }

    clickProjetSauceDemo(){
        this.elements.ProjetSauceDemo().click()
    }
    clickburger(){
        this.elements.hamburger().click()
    }


}
export default new HomePage()