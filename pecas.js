function irParaFinalizar() {
    window.location.href = "finalizar.html";
}

function adicionarAoCarrinho(nomeDoProduto, preco) {
    const lista = document.getElementById("lista-carrinho");
    const item = document.createElement("li");
    item.textContent = nomeDoProduto;
    lista.appendChild(item);

    // Salvar no sessionStorage
    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
    carrinho.push({ nome: nomeDoProduto, preco: preco });
    sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
}

document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.querySelector('h2').innerText;
        const precoTexto = produto.querySelectorAll('p')[1].innerText;
        const preco = parseFloat(precoTexto.replace(/[^\d,]/g, "").replace(",", "."));
        adicionarAoCarrinho(nome, preco);
    });
});
