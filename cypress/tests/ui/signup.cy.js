import BasePage from "../../src/BasePage";
import HomePage from "../../src/HomePage";

describe("SignUp Tests", () => {
  const basePage = new BasePage();

  beforeEach(() => {
    basePage.visit();
  });

it("1 - Check signUp with valid data", ()=> {
    const homePage = new HomePage();
    homePage.clickSignupLoginButton();
});
});