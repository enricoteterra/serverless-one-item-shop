class AuthorizePaymentButton extends HTMLElement {
    handleClick = (e) => {
        this.dispatchEvent(new CustomEvent('payment-authorized', {bubbles: true, composed: true}))
    }
    connectedCallback() {
        const button = document.createElement('button');
        button.onclick = this.handleClick
        button.innerHTML = "authorize payment"
        this.appendChild(button);
    }
}
customElements.define('authorize-payment-button', AuthorizePaymentButton)