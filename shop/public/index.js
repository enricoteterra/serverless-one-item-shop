"use strict";

import './components/order-button.js'
import './components/network-error.js'

document.addEventListener("order-placed", 
    () => document.querySelector('network-error').visible = true)