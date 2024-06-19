async function listaProdutos() {
    const response = await fetch("http://sua-api.com/produtos");
    return response.json();
}

async function criaProduto(nome, imagem, preco) {
    const response = await fetch("http://sua-api.com/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            imagem: imagem,
            preco: preco,
        })
    });
    return response.json();
}

async function removeProduto(idProduto) {
    const response = await fetch(`http://sua-api.com/produtos/${idProduto}`, { method: "DELETE" }); return response.json();
}
export { listaProdutos, criaProduto, removeProduto };