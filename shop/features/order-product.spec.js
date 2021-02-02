describe("order product feature", () => {
    describe("order failed because of server error scenario", () => {
        it("tells user that order could not be placed", () => {
            cy.visit('public/index.html')
            cy.get('order-notification').should('not.be.visible')
            cy.get('order-button').click()
            cy.get('order-notification').should('be.visible')
        })
    })
    // describe("order accepted scenario", () => {
    //     it("tells user that order was placed successfully", () => {
    //         cy.visit('public/index.html')
    //         cy.get('order-notification').should('not.be.visible')
    //         cy.get('order-button').click()
    //         cy.get('order-notification').should('be.visible')
    //     })
    // })
})