describe("order product feature", () => {
    describe("order failed scenario", () => {
        it("should notify user that order could not be processed at this time", () => {
            cy.visit('public/index.html')
            cy.get('[data-cy=order-now]').click()
            cy.get('[data-cy=order-notification]')
              .contains('order could not be placed')
        })
    })
})