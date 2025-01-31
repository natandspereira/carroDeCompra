### carroDeCompra 
## Este código implementa funcionalidades básicas para gerenciar um carrinho de compras, utilizando módulos separados para organizar e reutilizar o código. Ele simula o processo de adição de itens ao carrinho, cálculo do total e exibição do conteúdo do carrinho.

## Funcionalidades
* Criação de Itens: Utiliza a função createItem do módulo item.js para criar novos itens com nome, preço e quantidade.
  
* Adição ao Carrinho: Os itens são adicionados ao carrinho utilizando a função addItem do módulo cart.js.
  
* Exibição do Carrinho: A função displayCart exibe o conteúdo do carrinho no console, listando todos os itens presentes.
  
* Cálculo do Total: A função calculateTotal calcula o valor total do carrinho, multiplicando o preço de cada item pela quantidade e somando os resultados.
  
* Remoção de Itens: O código inclui opções para remover itens do carrinho tanto por nome como por índice.
  
* Exclusão de Itens: há uma função para excluir itens do carrinho por nome.

## Dependências
* cart.js: Responsável por gerenciar as operações no carrinho (adicionar, remover, exibir, calcular total).
* item.js: Utilizado para criar novos itens com propriedades como nome, preço e quantidade.

## Como Usar
1. Importe os métodos de cart.js e item.js no seu projeto.
2. Crie itens utilizando a função createItem e adicione-os ao carrinho com addItem.
3. Use displayCart para visualizar o carrinho e calculateTotal para obter o total dos itens.

4. ## Tecnologias usadas
5. * JavaScript
   * NodeJS
