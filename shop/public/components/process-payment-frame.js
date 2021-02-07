const style = document.createElement('style')
style.textContent = `
section {
    text-align: center;
    margin: 20px auto;
    padding: 20px;
    width: 200px;
    border: 1px solid #ccc;
}`

class ProcessPaymentFrame extends HTMLElement {
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
         `<section data-cy="process-payment-frame">
            <p>Mock Payment Provider</p>
            <authorize-payment-button></authorize-payment-button>
          </section>`: null
        this.shadowRoot.appendChild(style)
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('process-payment-frame', ProcessPaymentFrame)