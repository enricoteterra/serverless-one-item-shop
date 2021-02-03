"use strict";

import './components/order-button.js'
import './components/network-error-message.js'

document.addEventListener("order-placed", 
    () => document.querySelector('network-error-message').visible = true)