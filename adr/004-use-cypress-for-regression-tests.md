# Use Cypress for regression tests

## Context 
The shop will have a static homepage. 

## Decision
The behaviour of the shop homepage should be automatically tested to prevent regressions.

## Benefits
- we will have confidence that the shop homepage works as expected
- no need to test covered scenarios manually after every change

## Consequences
- e2e tests need to be maintained and adjusted as functionality changes / is added