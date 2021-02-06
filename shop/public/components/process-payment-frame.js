class ProcessPaymentFrame extends HTMLElement {
    static observedAttributes = ['visible']
    get visible() { 
        return this.hasAttribute('visible') 
    }
    set visible(value) {
        value ? this.setAttribute('visible', value)
              : this.removeAttribute('visible')
    }
    render() {
        this.innerHTML = this.visible ?
         `<section data-cy="process-payment-frame" class="process-payment-frame">
            loading..
          </section>`: null
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('process-payment-frame', ProcessPaymentFrame)