
// Locate Element, Take Snap
// . # > ~ h3

// XPath, CSS , Contains
Cypress.Commands.add('findElement', ($selector) => {
    try {
        cy.document().then(doc => {
            if ($selector.indexOf('/') === 0) {
                return cy.xpath($selector);
            } else if (doc.querySelector($selector) != null) {
                return cy.get($selector);
            } else {
                return cy.contains($selector);
            }
        })
    } catch (e) {
        cy.log('The given selector ' + $selector + ' do not have any matches in the document');
    }
});

Cypress.Commands.add('getScreenshot', ()=> {
    cy.screenshot();
})