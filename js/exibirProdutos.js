// Mostra os produtos na listaimport { listaProdutos } from "./conectaApi.js";
const produtosElement = document.querySelector('[data-lista-produtos]');
function exibeProduto(produto) {
    const produtoElement = document.createElement('div'); produtoElement.classList.add('product');
    produtoElement.innerHTML = `
  <div class="product__image">
   <img src="${produto.imagem}" alt="${produto.nome}">
    </div>
     <div class="product__info">
      <h3 class="product__name">${produto.nome}</h3>
       <p class="product__price">R$ ${produto.preco}</p>
        <button class="product__delete" data-id="${produto.id}">
         <i class="fas fa-trash"></i>
          </button>
           </div> `;
    return produtoElement;
}
export async function exibeProdutos() {
    const listaDeProdutos = await listaProdutos();
    produtosElement.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        const produtoElement = exibeProduto(produto); produtosElement.appendChild(produtoElement);
    });
}