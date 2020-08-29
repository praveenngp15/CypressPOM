import ViewLeadPage from "./ViewLeadPage";
import HomePage from "./HomePage";

class DuplicateLead{
    
    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

    

    

}

export default DuplicateLead;