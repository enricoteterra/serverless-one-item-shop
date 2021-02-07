const style = document.createElement('style')
style.textContent = `
.frame {
    text-align: center;
    margin-top: 20px;
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
         `<section data-cy="process-payment-frame" class="frame">
            loading..
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