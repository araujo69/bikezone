const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
let total = 0;
let desconto = 0;

function atualizarListaCarrinho() {
    const lista = document.getElementById("lista-finalizar");
    const totalSpan = document.getElementById("total");
    lista.innerHTML = "";
    total = 0;

    carrinho.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - €${produto.preco.toFixed(2)}`;
        lista.appendChild(item);
        total += produto.preco;
    });

    atualizarTotal();
}

function atualizarTotal() {
    const totalSpan = document.getElementById("total");
    const totalComDesconto = total - desconto;
    totalSpan.textContent = `Total: €${totalComDesconto.toFixed(2)}`;
}

function aplicarCupom() {
    const inputCupom = document.getElementById("cupom");
    const cupom = inputCupom.value.trim().toUpperCase();

    if (cupom === "BIKE10") {
        desconto = total * 0.10;
        alert("Cupom aplicado: 10% de desconto!");
    } else {
        desconto = 0;
        alert("Cupom inválido.");
    }

    atualizarTotal();
}

document.getElementById("form-finalizar").addEventListener("submit", function(e) {
    e.preventDefault();

    const mensagem = document.getElementById("mensagem-confirmacao");
    mensagem.classList.remove("oculto");

    setTimeout(() => {
        sessionStorage.removeItem("carrinho");
        window.location.href = "home.html";
    }, 3000);
});

atualizarListaCarrinho();
