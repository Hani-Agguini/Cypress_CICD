class ProjetPage{

    elements = {
        ProjetSauceDemo:()=>cy.get('[data-testid="page-title"]'),
        ajoutcasdetest:()=>cy.contains("＋ Cas de test"),
        titre:()=>cy.get("#test-case-form-title"),
        status:()=>cy.get("#test-case-form-status")
    }

    getprojet(){
        return this.elements.ProjetSauceDemo()
    }
    clickajoutcasdetest(){
        this.elements.ajoutcasdetest().click()
    }
    settitre(s){
        this.elements.titre().type(s)
    }
    choseStatus(s){
        this.elements.status().select(s)
    }


}
export default new ProjetPage()
