import BasePage from "./BasePage";

class HomePage extends BasePage {
    constructor() {
        super();
        //this.SignupLoginButton = 'a[href="/login"]';
        this.SignupLoginButton = '.fa.fa-lock';
    }

clickSignupLoginButton() {
    cy.get(this.SignupLoginButton).click();
  }
}

export default HomePage;