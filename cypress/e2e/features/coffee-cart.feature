Feature: Compra de cafés no Coffee Cart

  Scenario: Comprar cafés, aceitar oferta e finalizar pedido com sucesso
    Given que acesso a página inicial do Coffee Cart
    When seleciono três cafés diferentes
    And aceito a oferta promocional
    Then devo ver itens no carrinho
    When removo um item do carrinho
    And realizo o checkout
    Then devo ver a mensagem de sucesso da compra
