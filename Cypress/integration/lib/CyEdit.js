// type, clear, typeAndTab, typeAndChoose, typeAndEnter, verifyEnteredText



Cypress.Commands.add('sendKeys', ($selector, $text) => {
    try{
        cy.findElement($selector).clear().type($text);
        cy.log('The text box '+$selector+' is typed with text : '+$text)
    }catch(e){
        cy.log('The text box could not be typed with the value : '+$text);
    } finally{
        cy.getScreenshot();
    }
})