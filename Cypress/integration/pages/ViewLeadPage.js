import HomePage from "./HomePage";
import DuplicateLead from "./DuplicateLeadPage";
import CreateLeadPage from "./CreateLeadPage";
import FindLeadPage from "./FindLeadPage";


class ViewLeadPage{

    /* Click Create Lead Link on Left Menu */
    verifyCompanyName(company){
       cy.get('#viewLead_companyName_sp').invoke('text').then($txt => {
           if($txt.includes(company)){
               cy.log("matches the company name")
           }
       })
    }


    /* Click DuplicateLead*/
    clickDuplicateLead(){
        cy.clickIt('Duplicate Lead')
        return new CreateLeadPage()
    }


    /* click Open Taps for LogOut*/
    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

    /* click Open Taps for LogOut*/
    clickFindLead(){
        cy.clickIt('Find Leads')
        return new FindLeadPage()
    }

}

export default ViewLeadPage;