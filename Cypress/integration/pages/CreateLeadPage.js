import ViewLeadPage from "./ViewLeadPage";
import HomePage from "./HomePage";

class CreateLeadPage{

    /* Clear and Type the company */
    typeCompanyname(company){
        cy.sendKeys('#createLeadForm_companyName',company)

        //cy.get('#createLeadForm_companyName').clear().type(company);
        return this;
    }

    /* Clear and Type the first name */
    typeFirstname(fname){
        cy.sendKeys('#createLeadForm_firstName',fname)

        //cy.get('#createLeadForm_firstName').clear().type(fname);
        return this;
    }



    /* Clear and Type the first name */
    verifyFirstName(){
        cy.get('#createLeadForm_firstName').invoke('val').then($val => {
                cy.log('Value is' + $val)
        })
        return this;
    }



     /* Clear and Type the last name */
     typeLastname(lname){
        cy.sendKeys('#createLeadForm_lastName',lname)

        //cy.get('#createLeadForm_lastName').clear().type(lname);
        return this;
    }

    /* Click on the Create Lead Button */
    clickCreateLeadButton(){
        cy.clickIt('.smallSubmit');
        //cy.get('.smallSubmit').click();
        return new ViewLeadPage();
    }
  
    /* Click on the Create Lead Button */
    selectSource(source){
        cy.selectByValue('#createLeadForm_dataSourceId',source);
        //cy.get('.smallSubmit').click();
        return this;
    }

    clickOpenTaps(){
        cy.clickIt('opentaps')
        return new HomePage()
    }

    createLead(comapnyname,firstname,lastname,source){
        this.typeCompanyname(comapnyname).typeFirstname(firstname).typeLastname(lastname).selectSource(source).clickCreateLeadButton()
    }

}

export default CreateLeadPage;