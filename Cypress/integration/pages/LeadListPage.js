import ViewLeadPage from "./ViewLeadPage";
import HomePage from "./HomePage";
import DuplicateLead from "./DuplicateLeadPage"

class LeadListPage{

    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

    clickFirstResult(){
        cy.get('#findLeads .x-grid3-row-table .x-grid3-td-partyId').eq(0).click()
        return new ViewLeadPage()
    }


    /* Get first NAme and store it in json */
    getFirstName(){
        cy.get('.x-grid3-row-table .x-grid3-td-firstName').invoke('text').then($txt => {
            cy.writeFile('DuplicateLead.json', { firstname: $txt})
        })
        return this
    }

    printFirstName(){
        cy.fixture('DuplicateLead.json').then((logo) => {
            cy.log(logo)
          })    
          return this
    }


}

export default LeadListPage;