# use web components

## Context 
The one-item shop is a one page shop with a simple functionality.

## Decision
We want to keep the served filesize as small as possible, loading 70kb for a client-side components library is not necessary at this point.

## Benefits
- supported in the browser without loading additional code
- web components api is simple to understand

## Consequences
- unit testing of web components might be tricky, need to look into it
- web components are quite verbose