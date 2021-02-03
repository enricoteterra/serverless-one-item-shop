describe("order product feature", () => {
    describe("order failed due to network error scenario", () => {
        it("tells user that order process could not continue", () => {
            cy.visit('public/index.html')
            cy.get('network-error-message').should('not.be.visible')
            cy.get('order-button').click()
            cy.get('network-error-message').should('be.visible')
        })
    })
    describe.skip("order successful scenario", () => {
        it("tells user that order was placed successfully", () => {
            cy.visit('public/index.html')
            cy.get('order-button').click()
            cy.get('payment-provider-frame').should('be.visible')
            cy.get('authorise-payment-button').click()
            cy.get('order-successful').should('be.visible')
        })
    })
})