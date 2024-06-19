import { removeProduto } from "./conectaApi.js";

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", async (event) => {
        const elementoClicado = event.target;
        if (elementoClicado.classList.contains("product__delete")) {
            const idProduto = elementoClicado.dataset.id;
            await removeProduto(idProduto);
            
            /* Remova o produto da interface após a exclusão */
            elementoClicado.closest('.product').remove();
        }
    });
});


      
