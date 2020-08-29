import ViewLeadPage from "./ViewLeadPage";
import HomePage from "./HomePage";

class MergeLeadPage{

    
    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

    /* Clear and Type the Merge Lead From */
    typeIDFrom(idfrom){
        cy.sendKeys('#ComboBox_partyIdFrom',idfrom)
        return this;
    }

    /* Clear and Type the Merge Lead To */
    typeIDTo(idto){
        cy.sendKeys('#ComboBox_partyIdTo',idto)
        return this;
    }

    /* Click Merge Lead Button*/
    clickMergeLead(){
        cy.clickIt('.buttonDangerous')
        return new ViewLeadPage();
    }




}

export default MergeLeadPage;