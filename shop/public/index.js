"use strict";

import './components/order-button.js'
import './components/process-payment-frame.js'

document.addEventListener("order-placed", 
    () => document.querySelector('process-payment-frame').visible = true)