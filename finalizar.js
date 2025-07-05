let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = 0;
let desconto = 0;

function atualizarListaCarrinho() {
  const lista = document.getElementById("lista-finalizar");
  const totalSpan = document.getElementById("total");
  lista.innerHTML = "";
  total = 0;

  carrinho.forEach((produto, index) => {
    const item = document.createElement("li");

    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" style="width:50px; vertical-align:middle; margin-right:10px; border-radius:4px;">
      <strong>${produto.nome}</strong> - €${produto.preco.toFixed(2)}
      <button class="remover-item" data-index="${index}">❌</button>
    `;

    lista.appendChild(item);
    total += produto.preco;
  });

  atualizarTotal();
  ativarBotoesRemover();
}

function ativarBotoesRemover() {
  document.querySelectorAll(".remover-item").forEach(botao => {
    botao.addEventListener("click", () => {
      const index = parseInt(botao.dataset.index);
      carrinho.splice(index, 1);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      atualizarListaCarrinho();
    });
  });
}

function atualizarTotal() {
  const totalSpan = document.getElementById("total");
  const totalComDesconto = total - desconto;
  totalSpan.textContent = `Total: €${totalComDesconto.toFixed(2)}`;
}

function aplicarCupom() {
  const input = document.getElementById("cupom");
  const valor = input.value.trim().toUpperCase();

  if (valor === "BIKE10") {
    desconto = total * 0.10;
    alert("Cupom aplicado: 10% de desconto!");
  } else {
    desconto = 0;
    alert("Cupom inválido.");
  }

  atualizarTotal();
}

document.getElementById("form-finalizar").addEventListener("submit", e => {
  e.preventDefault();
  localStorage.removeItem("carrinho");
  document.getElementById("mensagem-confirmacao").classList.remove("oculto");
  document.getElementById("form-finalizar").reset();
  document.getElementById("lista-finalizar").innerHTML = "";
  document.getElementById("total").textContent = "Total: €0,00";
});

document.getElementById("esvaziar-carrinho").addEventListener("click", () => {
  carrinho = [];
  localStorage.removeItem("carrinho");
  atualizarListaCarrinho();
});

document.addEventListener("DOMContentLoaded", atualizarListaCarrinho);
