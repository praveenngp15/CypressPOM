import HomePage from "./HomePage";

class LoginPage{

    /* Clear and Type the username */
    typeUsername(username){
        //cy.get('#username').clear().type(username);
        cy.sendKeys('#username',username);
        return this;
    }

    /* Clear and Type the password */
    typePassword(password){
        //cy.get('#password').clear().type(password);
        cy.sendKeys('#password',password);
        return this;
    }

    /* Click on the Login Button */
    clickLogin(){
        cy.clickIt('.decorativeSubmit')
        //cy.get('.decorativeSubmit').click();
        return new HomePage();
    }

    /* Perform Login */
    doLogin(username,password){
        return this.typeUsername(username).typePassword(password).clickLogin();
    }



}

export default LoginPage;

