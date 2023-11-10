function pegarValor() {
  console.log("aaaaaaaaaa");
  let parImpar = document.getElementById("numero").value;
  lerParImpar(parImpar);
}
function lerParImpar(numero) {
  if (numero % 2 == 0) {
  numero=document.createElement("p")
  numero.innerText = "é par"
  document.body.appendChild(numero);
  } else {
    numero=document.createElement("p")
    numero.innerText = "é impar"
    document.body.appendChild(numero);
  }
}

document.getElementById("botao").addEventListener("click", pegarValor);
