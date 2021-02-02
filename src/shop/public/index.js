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
         `<div>sorry, your order cannot be processed at this time</div>`: null
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('order-notification', OrderNotification);

class OrderButton extends HTMLElement {
    handleClick = (e) => {
        e.preventDefault()
        this.dispatchEvent(new CustomEvent('order-placed', {bubbles: true}))
    }
    connectedCallback() {
        const button = document.createElement('button');
        button.onclick = this.handleClick
        button.innerHTML = "order now"
        this.appendChild(button);
    }
}
customElements.define('order-button', OrderButton);