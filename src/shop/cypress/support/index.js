Cypress.Commands.add('getElement', 
    (name) => cy.get(`[data-cy=${name}]`))

Cypress.Commands.add('findElements', 
{prevSubject: true},
(subject, name) => subject.find(`[data-cy=${name}]`))