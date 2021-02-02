describe("order product feature", () => {
    describe("order failed scenario", () => {
        it.skip("should not show any notification initially", () => {
            cy.visit('public/index.html')
            cy.element('order-notification').should('not.exist')
        })
        it("should notify user that order could not be processed at this time", () => {
            cy.visit('public/index.html')
            cy.element('order-now').click()
            cy.element('order-notification').contains('order could not be placed')
        })
    })
})