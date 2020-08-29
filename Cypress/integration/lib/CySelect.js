// SelectByText, SelectByIndex, CountOfOptions


Cypress.Commands.add('selectByIndex', ($selector, $index)=> {
    try{
        cy.findElement($selector).children().eq($index).invoke('val').then($val => {
            cy.findElement($selector).select(val);
        })

    }catch(e){

    }
})


Cypress.Commands.add('selectByValue', ($selector, $value)=> {
    try{
        cy.findElement($selector).select($value)
    }catch(e){

    }
})