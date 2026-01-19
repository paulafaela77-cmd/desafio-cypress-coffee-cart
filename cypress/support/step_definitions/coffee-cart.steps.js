import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CoffeeCartPage from '../pages/CoffeeCartPage';

Given('que acesso a página inicial do Coffee Cart', () => {
  CoffeeCartPage.acessar();
});

When('seleciono três cafés diferentes', () => {
  CoffeeCartPage.selecionarCafe('Espresso');
  CoffeeCartPage.selecionarCafe('Mocha');
  CoffeeCartPage.selecionarCafe('Flat White');
});

When('aceito a oferta promocional', () => {
  CoffeeCartPage.aceitarOferta();
});

Then('devo ver itens no carrinho', () => {
  CoffeeCartPage.validarItensNoCarrinho(3);
});

When('removo um item do carrinho', () => {
  CoffeeCartPage.removerItem('Mocha');
  CoffeeCartPage.validarItemRemovido('Mocha');
});

When('realizo o checkout', () => {
  CoffeeCartPage.finalizarCheckout();
});

Then('devo ver a mensagem de sucesso da compra', () => {
  CoffeeCartPage.validarMensagemSucesso();
});
