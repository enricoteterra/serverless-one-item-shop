# Use github actions for cd pipeline

## Context 
The shop's static homepage should have a continuous deployment pipeline.

## Decision
Github actions should be good a good fit for a simple two step, one track pipeline.

## Benefits
- free
- easy to setup
- supports configuration as code
- pipeline configuration is updated automatically on change & commit
- built-in github integration to get repository

## Consequences
- deploying to prod environment will need extra configuration for permissions etc