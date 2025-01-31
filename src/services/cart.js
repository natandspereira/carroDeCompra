// adiciona um item ao carrinho do usuário
async function addItem(userCart, item){
    userCart.push(item);
}

// calcula o total do carrinho de compras, somando os subtotais de cada item
async function calculateTotal(userCart){
  console.log("Shopee Cart TOTAL IS!");
  const result = await userCart.reduce((total, item) => 
        total+item.subtotal(), 0) 
  console.log(`🎁 Total: ${result}`);
}

// remove um item do carrinho baseado no nome do item.
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// Remover item por index
// async function removeItem(userCart, index){
//     const deleteIndex = index - 1;

//     if(index >= 0 && index < userCart.length){
//         userCart.splice(deleteIndex, 1);
//     }
// } 

// remover um item do carrinho
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(indexFound === -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound,1);
        return;
    }
}

// exibe a lista do carrinho no console, mostrando nome, preço, quantidade e subtotal de cada item.
async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    });
    console.log(" ");
}

// exportando as funções
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}