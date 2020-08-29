import ViewLeadPage from "./ViewLeadPage";
import HomePage from "./HomePage";
import LeadListPage from "./LeadListPage";

class FindLeadPage{

    /* Clear and Type the LeadId */
    typeLeadId(leadid){
        cy.sendKeys('input[name="id"]',leadid)
        return this;
    }

    /* Clear and Type the firstName */
    typeFirstName(fname){
        cy.sendKeys('[name="firstName"]',fname)
        return this;
    }

    /* Clear and Type the Last Name */
    typeLastName(leadid){
        cy.sendKeys('input[name="lastName"]',lastName)
        return this;
    }

    /* Clear and Type the Company Name */
    typeCompanyName(companyname){
        cy.sendKeys('input[name="companyName"]',companyname)
        return this;
    }
    
    /* Clear and Type the Email Address */
    typeEmailId(email){
        cy.sendKeys('input[name="emailAddress"]',email)
        return this;
    }
    
    /* click Find Leads Button */
    clickFindLeads(){
        cy.clickIt('//button[text()="Find Leads"]')
        return this
    }

    verifyErrormsg(){
        cy.findElement('.x-paging-info').should('have.text','No records to display')
    }

    clickFirstResult(){
        cy.get('#findLeads .x-grid3-row-table .x-grid3-td-partyId a').eq(0).click()
        return new ViewLeadPage()
    }

   getFirstResultName(){
        return cy.get('#findLeads .x-grid3-row-table .x-grid3-td-partyId a').eq(0).text()
        
    }


    /* click Find Leads Button */
    clickEmailTab(){
        cy.clickIt('//*[text()="Email"]')
        return this
    }

    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

}

export default FindLeadPage;