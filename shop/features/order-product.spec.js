describe("order product feature", () => {
    describe.skip("order successful scenario", () => {
        it("tells user that order was placed successfully", () => {
            cy.visit('public/index.html')
            cy.get('order-button').click()
            cy.get('authorise-payment-button').click()
            cy.get('order-successful').should('be.visible')
        })
    })
})