const style = document.createElement('style')
style.textContent = `
.message {
    text-align: center;
    margin: 20px auto;
    padding: 1px;
    width: 200px;
    background: green;
    color: white;
    font-weight: bold;
}`

class OrderPlacedMessage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }
    static observedAttributes = ['visible']
    get visible() { 
        return this.hasAttribute('visible') 
    }
    set visible(value) {
        value ? this.setAttribute('visible', value)
              : this.removeAttribute('visible')
    }
    render() {
        this.shadowRoot.innerHTML = this.visible ?
         `<div data-cy="order-successful-message" class="message">
            <p>Order successful!</p>
          </div>`: null
        this.shadowRoot.appendChild(style)
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('order-placed-message', OrderPlacedMessage)