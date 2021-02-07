describe("order product feature", () => {
    describe("order successful scenario", () => {
        it("tells user that order was placed successfully", () => {
            cy.visit('public/index.html')
            cy.get('order-button').click()
            cy.get('authorize-payment-button').click()
            cy.element('order-successful-message')
        })
    })
})