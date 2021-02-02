import './components/order-button.js'
import './components/order-notification.js'

document.addEventListener("order-placed", 
    () => document.querySelector('order-notification').visible = true);