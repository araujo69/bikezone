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

// ✅ Função de ordenação dos produtos
function ordenarProdutos() {
    const criterio = document.getElementById("ordenar").value;
    const container = document.querySelector(".produtos-container");
    const produtos = Array.from(container.children);

    produtos.sort((a, b) => {
        const nomeA = a.dataset.nome || "";
        const nomeB = b.dataset.nome || "";
        const modeloA = a.dataset.modelo || "";
        const modeloB = b.dataset.modelo || "";
        const precoA = parseFloat(a.dataset.preco) || 0;
        const precoB = parseFloat(b.dataset.preco) || 0;

        switch (criterio) {
            case "nomeAZ":
                return nomeA.localeCompare(nomeB);
            case "nomeZA":
                return nomeB.localeCompare(nomeA);
            case "modeloAZ":
                return modeloA.localeCompare(modeloB);
            case "modeloZA":
                return modeloB.localeCompare(modeloA);
            case "precoMenor":
                return precoA - precoB;
            case "precoMaior":
                return precoB - precoA;
            default:
                return 0;
        }
    });

    produtos.forEach(produto => container.appendChild(produto));
}
