describe("order product feature", () => {
    describe("order failed scenario", () => {
        it("should not show any notification initially", () => {
            cy.visit('public/index.html')
            cy.get('form')
              .findElements('order-notification')
              .should('have.length', 0)
        })
        it("should notify user that order could not be processed at this time", () => {
            cy.visit('public/index.html')
            cy.getElement('order-now').click()
            cy.getElement('order-notification')
              .contains('order could not be placed')
        })
    })
})