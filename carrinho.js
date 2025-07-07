// Inicializa carrinho
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualiza contador no menu
function atualizarContadorCarrinho() {
  const contador = document.getElementById("contador-carrinho");
  if (contador) contador.textContent = carrinho.length;
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(nome, preco, imagemSrc) {
  carrinho.push({ nome, preco, imagem: imagemSrc });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  mostrarProdutoNoTopo(nome, preco, imagemSrc);
  mostrarAvisoProdutoAdicionado();
}

// Mostra produto no topo da página
function mostrarProdutoNoTopo(nome, preco, imagemSrc) {
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

// Aviso visual
function mostrarAvisoProdutoAdicionado() {
  const aviso = document.getElementById("aviso-produto");
  if (!aviso) return;
  aviso.classList.add("mostrar");
  setTimeout(() => aviso.classList.remove("mostrar"), 2000);
}

// Ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();
});
