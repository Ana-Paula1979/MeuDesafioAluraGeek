import { criaProduto } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");
async function criarProduto(evento) {
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const preco = document.querySelector("[data-preco]").value;
    await criaProduto(nome, imagem, preco);

    // pode adicionar lógica adicional aqui, como atualizar a lista de produtos após a criação de um novo produto.}
    formulario.addEventListener("submit", criarProduto);
}