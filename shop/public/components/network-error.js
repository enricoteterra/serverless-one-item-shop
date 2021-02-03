class NetworkError extends HTMLElement {
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
            seems like you might be offline
          </div>`: null
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('network-error', NetworkError)