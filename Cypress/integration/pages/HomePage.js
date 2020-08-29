import LoginPage from "./LoginPage";
import MyHomePage from "./MyHomePage";

class HomePage{

    /* Click Logout */
    clickLogout(){
        cy.clickIt('.decorativeSubmit');
        //cy.get('.decorativeSubmit').click();
        return new LoginPage();
    }

    /* Click CRMSFA */
    clickCRMSFA(){
        cy.clickIt('CRM');
        //cy.contains('CRM/SFA').click();
        return new MyHomePage();
    }
    
}

export default HomePage;