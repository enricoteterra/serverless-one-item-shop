class OrderNotification extends HTMLElement {
    static get observedAttributes() { return ["isVisible"] }
    connectedCallback() {
        this.innerHTML = this.hasAttribute('isVisible') ?
         `<div data-cy="order-failed-notification">
           sorry, your order cannot be processed at this time
          </div>`: null
    }
}

customElements.define('order-notification', OrderNotification);