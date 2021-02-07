"use strict";

import './components/order-button.js'
import './components/authorize-payment-button.js'
import './components/process-payment-frame.js'
import './components/order-placed-message.js'

document.addEventListener("order-placed", 
    () => document.querySelector('process-payment-frame').visible = true)

document.addEventListener("payment-authorized", 
    () => document.querySelector('order-placed-message').visible = true)