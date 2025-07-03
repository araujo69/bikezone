function irParaFinalizar() {
    window.location.href = "finalizar.html";
}

function adicionarAoCarrinho(nomeDoProduto, preco, imagemSrc) {
    const lista = document.getElementById("lista-carrinho");

    const item = document.createElement("li");
    item.classList.add("item-carrinho");

    item.innerHTML = `
        <img src="${imagemSrc}" alt="${nomeDoProduto}" class="miniatura-carrinho">
        <span class="nome-produto">${nomeDoProduto}</span>
        <span class="preco-produto">€${preco.toFixed(2)}</span>
    `;

    lista.appendChild(item);
}

function mostrarAvisoProdutoAdicionado() {
    const aviso = document.getElementById("aviso-produto");
    aviso.classList.add("mostrar");

    setTimeout(() => {
        aviso.classList.remove("mostrar");
    }, 2000); // desaparece após 2 segundos
}


document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.closest('.produto');
        const nome = produto.querySelector('h2').innerText;
        const precoTexto = produto.querySelector('p:nth-of-type(2)').innerText;
        const preco = parseFloat(precoTexto.replace(/[^\d,]/g, '').replace(',', '.'));
        const imagemSrc = produto.querySelector('img').src;

        adicionarAoCarrinho(nome, preco, imagemSrc);
        mostrarAvisoProdutoAdicionado(); // ✅ chamar o aviso aqui
    });
});

