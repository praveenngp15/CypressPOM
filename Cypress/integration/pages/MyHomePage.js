import MyLeadsPage from "./MyLeadsPage";
import HomePage from "./HomePage";

class MyHomePage{

    /* Click Leads Tab */
    clickLeadsTab(){
        cy.clickIt('Leads');
        //cy.contains('Leads').click();
        return new MyLeadsPage();
    }

    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

}

export default MyHomePage;