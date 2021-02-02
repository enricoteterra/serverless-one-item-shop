describe("order product feature", () => {
    describe("order failed scenario", () => {
        it.skip("does not show any notification initially", () => {
            cy.visit('public/index.html')
            cy.get('order-notification').should('not.be.visible')
        })
        it("notifies user when something goes wrong", () => {
            cy.visit('public/index.html')
            cy.get('order-button').click()
            cy.get('order-notification').should('be.visible')
        })
    })
})