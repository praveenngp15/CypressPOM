// Click , VerifyText


Cypress.Commands.add('clickIt', ($selector) => {
    try{
        cy.findElement($selector).click();
        cy.log('The element '+$selector+' is clicked successfully');
    }catch(e){
        cy.log('The element '+$selector+' could not be clicked');
    }finally{
        cy.getScreenshot();
    }
})