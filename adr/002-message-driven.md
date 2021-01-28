# Message Driven Architecture

## Context 
This is an online shop, the customer expects to pay and to see an 'order placed' confirmation.

## Decision
Everything that happens after the order is placed can happen asynchronously. 

## Benefits
- can scale to process many orders at the same time
- better fault tolerance, when something goes wrong can just retry
- it should be easier to add features to the order process eg reporting later

## Consequences
- if something goes wrong during order processing we probably have to email the customer
- a message driven architecture can be harder to debug and observe