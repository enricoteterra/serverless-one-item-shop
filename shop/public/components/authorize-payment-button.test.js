require('./authorize-payment-button.js')

describe("Authorize Payment Button", function() {
    afterEach(() => document.body.innerHTML = "")

    it("dispatches `payment-authorized` event", async function() {
        expect.assertions(1)
        const button = document.createElement('authorize-payment-button')
        document.body.appendChild(button)

        const element = button.querySelector('button');
        document.addEventListener("payment-authorized", 
            (event) => expect(event).toBeDefined())

        element.click()
    })
})