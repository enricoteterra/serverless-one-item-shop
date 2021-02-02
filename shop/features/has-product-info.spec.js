describe("product info feature", () => {
    describe("inform customer about product scenario", () => {
        it("should have relevant product information", () => {
            cy.visit('public/index.html')
            cy.get('[data-cy=product-info] [data-cy=title]')
            cy.get('[data-cy=product-info] [data-cy=description]')
            cy.get('[data-cy=product-info] [data-cy=image]')
        })
    })
})