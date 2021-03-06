require('./order-button.js')

describe("Order Button", function() {
    afterEach(() => document.body.innerHTML = "")

    it("dispatches `order-placed` event", async function() {
        expect.assertions(1)
        const button = document.createElement('order-button')
        document.body.appendChild(button)

        const element = button.querySelector('order-button button');
        document.addEventListener("order-placed", 
            (event) => expect(event).toBeDefined())

        element.click()
    })
})