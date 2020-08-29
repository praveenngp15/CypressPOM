import CreateLeadPage from "./CreateLeadPage";
import MergeLead from "./MergeLeadPage";
import FindLead from "./FindLeadPage";

class MyLeadsPage{

    /* Click Create Lead Link on Left Menu */
    clickCreateLeadLink(){
        cy.clickIt('Create Lead');
        //cy.contains('Create Lead').click();
        return new CreateLeadPage();
    }

    /* Click Merge Lead Link on Left Menu */
    clickMergeLeadLink(){
        cy.clickIt('Merge Leads');
        //cy.contains('Create Lead').click();
        return new MergeLead();
    }


    /* Click Find Lead Link on Left Menu */
    clickFindLeadLink(){
        cy.clickIt('Find Leads');
        return new FindLead();
    }


}

export default MyLeadsPage;