function irParaFinalizar() {
  window.location.href = "finalizar.html";
}

function mostrarAvisoProdutoAdicionado() {
  const aviso = document.getElementById("aviso-produto");
  if (!aviso) return;

  aviso.classList.remove("oculto");
  aviso.classList.add("mostrar");

  setTimeout(() => {
    aviso.classList.remove("mostrar");
    aviso.classList.add("oculto");
  }, 2000);
}

function guardarNoLocalStorage(nome, preco, imagemSrc) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome, preco, imagem: imagemSrc });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinhoVisual(nome, preco, imagemSrc) {
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  const item = document.createElement("li");
  item.classList.add("item-carrinho");

  item.innerHTML = `
    <img src="${imagemSrc}" alt="${nome}" class="miniatura-carrinho">
    <span class="nome-produto">${nome}</span>
    <span class="preco-produto">€${preco.toFixed(2)}</span>
  `;

  lista.appendChild(item);
}

document.querySelectorAll('.produto button').forEach(button => {
  button.addEventListener('click', () => {
    const produto = button.closest('.produto');
    const nome = produto.querySelector('h2').innerText;
    const precoTexto = produto.querySelectorAll('p')[1].innerText;
    const preco = parseFloat(precoTexto.replace(/[^\d,]/g, "").replace(",", "."));
    const imagemSrc = produto.querySelector('img').src;

    adicionarAoCarrinhoVisual(nome, preco, imagemSrc);
    guardarNoLocalStorage(nome, preco, imagemSrc);
    mostrarAvisoProdutoAdicionado();
  });
});

// Ordenação dos produtos
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
      case "nomeAZ": return nomeA.localeCompare(nomeB);
      case "nomeZA": return nomeB.localeCompare(nomeA);
      case "modeloAZ": return modeloA.localeCompare(modeloB);
      case "modeloZA": return modeloB.localeCompare(modeloA);
      case "precoMenor": return precoA - precoB;
      case "precoMaior": return precoB - precoA;
      default: return 0;
    }
  });

  produtos.forEach(produto => container.appendChild(produto));
}
