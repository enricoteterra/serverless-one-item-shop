# one repository over many repositories

## Context 
The one-item shop consists of a frontend and multiple backend components, which are deployed separately.

## Decision
Keep all the code in one repository. I believe that github actions allows you to trigger deployments selectively based on changes in certain folders. If the app grows in size it may be worth to rethink this decision.

## Benefits
- do not need to create a new repository everytime we add a new component to order processing
- all the code is in one place
- easy to run end to end tests across components

## Consequences
- we check out code that we don't need in pipelines
- temptation to share code or types etc is large when everything is in the same repository