//your JS code here. If required.
cy.get('.card img').should('have.length', 6);
cy.get('.card h6').should('have.length', 6);
cy.get('.card p').should('have.length', 6);