describe("order product feature", () => {
    describe("order failed scenario", () => {
        it("tells user that order could not be placed", () => {
            cy.visit('public/index.html')
            cy.get('order-notification').should('not.be.visible')
            cy.get('order-button').click()
            cy.get('order-notification').should('be.visible')
        })
    })
})