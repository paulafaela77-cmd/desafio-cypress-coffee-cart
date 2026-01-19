class CoffeeCartPage {

  acessar() {
    cy.visit('/');
  }

  selecionarCafe(nome) {
    cy.contains(nome).click();
  }

  aceitarOferta() {
    // modal às vezes vem oculto
    cy.contains('Yes').click({ force: true });
  }

  validarItensNoCarrinho(quantidadeMinima) {
    // valida pelo HTML REAL da página
    cy.get('ul')
      .find('li')
      .should('have.length.at.least', quantidadeMinima);
  }

  removerItem(nome) {
    cy.contains(nome)
      .parents('li')
      .find('button')
      .click();
  }

  validarItemRemovido(nome) {
    cy.contains(nome).should('not.exist');
  }

  finalizarCheckout() {
    cy.contains('Pay').click();
  }

  validarMensagemSucesso() {
    cy.contains('Thanks for your purchase')
      .should('be.visible');
  }
}

export default new CoffeeCartPage();
