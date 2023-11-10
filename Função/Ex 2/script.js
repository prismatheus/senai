function pegarValor() {
  let num = [];
  num[0] = document.getElementById("numero").value;
  num[1] = document.getElementById("numero").value;

  return num
}

let resultado

document.getElementById("adicao").addEventListener("click", pegarValor);
document.getElementById("subtracao").addEventListener("click", pegarValor);
document.getElementById("multiplicacao").addEventListener("click", pegarValor);
document.getElementById("divisao").addEventListener("click", pegarValor);

function somar(){
  let numeros = pegarValor()
  resultado = numeros[0]+numeros[1]
  document.createElement("p").
  innerHTML = resultado

}