# Automatically deploy components separately

## Context 
The shop will consist of a static frontend and a message driven backend, consisting of multiple components and queues. 

## Decision
The frontend will be deployed separately from the components and the components will be deployed separately from each other.

## Benefits
- changes are deployed really fast
- if one component cannot be deployed because it's pipeline is red, we are not blocked from redeploying other components
- components remain loosely coupled. We make no assumptions about another component being available or having been deployed already

## Consequences
- we need to take care that components are built accordingly. Feature toggles must be used and failover logic needs to be built into each component
- need to maintain and watch multiple deployment pipelines