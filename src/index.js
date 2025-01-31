// importa todos os métodos exportados do módulo cart.js
import * as cartService from "./services/cart.js";
// importa a função createItem do módulo item.js
import createItem from "./services/item.js";

// Cria um array vazio
const myCart = [];

// Exibe uma mensagem de boas-vindas.
console.log("Welcome to the your Shopee Cart!");
console.log("");

// Cria  item
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborguine", 39.99, 3);

// Adiciona item ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remover item por nome
// await cartService.removeItem(myCart, item1);

// Remover item por index
// await cartService.removeItem(myCart, 1);

// Exibir item
await cartService.displayCart(myCart);

// Excluir item
// await cartService.deleteItem(myCart,item1.name);

// Calcula o valor total do carrinho somando o preço de cada item multiplicado pela quantidade.
await cartService.calculateTotal(myCart);