let assentos;


function inicio() {
    assentos = JSON.parse(localStorage.getItem("assentos")) || Array(68).fill(null);

  updateMapaDeAssentos(assentos);

  document.getElementById("mapaDeAssentos").addEventListener("click", reservarAssento);
}

function updateMapaDeAssentos(assentos) {
  const mapaDeAssentos = document.getElementById("mapaDeAssentos");
  mapaDeAssentos.innerHTML = "";

  assentos.forEach((passageiro, i) => {
    const fila = document.createElement("tr");
    const numeroAssento = i + 1;

    const celulaAssento = document.createElement("td");
    celulaAssento.textContent = numeroAssento;
    fila.appendChild(celulaAssento);

    const celulaPassageiro = document.createElement("td");
    celulaPassageiro.textContent = passageiro || "Disponível";
    fila.appendChild(celulaPassageiro);
    celulaAssento.className = assentos[i] ? 'ocupado' : '';
    celulaPassageiro.className = assentos[i] ? 'ocupado' : '';
    mapaDeAssentos.appendChild(fila);
  });
}
function reservarAssento(event) {
  if (
    event.target.tagName === "TD" &&
    event.target.textContent === "Disponível"
  ) {
    const numeroAssento = parseInt(
      event.target.parentNode.firstElementChild.textContent
    );
    const nomePassageiro = prompt("Digite o nome do passageiro:");

    if (nomePassageiro) {
      assentos[numeroAssento - 1] = nomePassageiro;
      localStorage.setItem("assentos", JSON.stringify(assentos));
      updateMapaDeAssentos(assentos);
    }
  } else {
    alert("Este assento já está ocupado. Escolha outro.");
  }
}
window.addEventListener("load", inicio);
