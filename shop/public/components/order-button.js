class OrderButton extends HTMLElement {
    constructor() {
        super()
        this.handleClick = (e) => {
            e.preventDefault()
            this.dispatchEvent(new CustomEvent('order-placed', {bubbles: true}))
        }
    }
    connectedCallback() {
        const button = document.createElement('button');
        button.onclick = this.handleClick
        button.innerHTML = "order now"
        this.appendChild(button);
    }
}
customElements.define('order-button', OrderButton)