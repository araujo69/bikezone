// motas.js

// Ordenar produtos
function ordenarProdutos() {
  const select = document.getElementById("ordenar");
  const criterio = select.value;
  const container = document.querySelector(".produtos-container");
  const produtos = Array.from(container.querySelectorAll(".produto"));

  produtos.sort((a, b) => {
    const get = (el, attr) => el.dataset[attr].toLowerCase();
    const getNum = (el, attr) => parseFloat(el.dataset[attr]);

    switch (criterio) {
      case "nomeAZ":
        return get(a, "nome").localeCompare(get(b, "nome"));
      case "nomeZA":
        return get(b, "nome").localeCompare(get(a, "nome"));
      case "modeloAZ":
        return get(a, "modelo").localeCompare(get(b, "modelo"));
      case "modeloZA":
        return get(b, "modelo").localeCompare(get(a, "modelo"));
      case "precoMenor":
        return getNum(a, "preco") - getNum(b, "preco");
      case "precoMaior":
        return getNum(b, "preco") - getNum(a, "preco");
      default:
        return 0;
    }
  });

  produtos.forEach(produto => container.appendChild(produto));
}

// Carrinho (simples com localStorage)
function irParaFinalizar() {
  const gaveta = document.getElementById("carrinho-gaveta");
  gaveta.classList.toggle("aberto");
}

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".produto button");
  const listaCarrinho = document.getElementById("lista-carrinho");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const produto = botao.closest(".produto");
      const nome = produto.dataset.nome;
      const preco = produto.dataset.preco;

      const item = document.createElement("li");
      item.textContent = `${nome} - €${preco}`;
      listaCarrinho.appendChild(item);
    });
  });
});
