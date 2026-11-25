class LoginPage{

    elements = {
        email :()=>cy.get('#email'),
        mdp :()=>cy.get('#password'),
        BtnLogin:()=>cy.get('[data-testid="login-submit"]'),
        
    }

    setEmail(s){
        this.elements.email().type(s)
    }

    setMpd(m){
        this.elements.mdp().type(m)
    }

    clickLogin(){
        this.elements.BtnLogin().click()
    }

}
export default new LoginPage()