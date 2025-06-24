class BasePage {
    constructor() {
        this.url = 'https://automationexercise.com/';
    }

visit(){
    cy.visit(this.url)
}
}
export default BasePage;