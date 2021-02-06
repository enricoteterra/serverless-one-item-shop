describe("order product feature", () => {
    describe("order failed due to network error scenario", () => {
        it("tells user that order process could not continue", () => {
            cy.visit('public/index.html')
            cy.get('process-payment-frame').should('not.be.visible')
            cy.get('order-button').click()
            cy.get('process-payment-frame').should('be.visible')
        })
    })
    describe.skip("order successful scenario", () => {
        it("tells user that order was placed successfully", () => {
            cy.visit('public/index.html')
            cy.get('order-button').click()
            cy.get('authorise-payment-button').click()
            cy.get('order-successful').should('be.visible')
        })
    })
})