class OrderNotification extends HTMLElement {
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
         `<div style="color: red; margin-top: 20px;">
            sorry, your order cannot be processed at this time
          </div>`: null
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('order-notification', OrderNotification)