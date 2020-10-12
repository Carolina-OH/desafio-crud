describe('Login', () => {
    it('valida autentificacion correcta y salida del home', () => {
      cy.visit('/')
      cy.get('#email').type('user1@user.cl')
      cy.get('#password').type('123456')
      cy.get('button').click()
      cy.get('#logout').click()

    })
  })
  