const localParticipantes = JSON.parse(localStorage.getItem("participantes"));

if(localParticipantes.length == 0){
  for (let i = 0; i < 100; i++) {
    localParticipantes[i] = "Criadores do Sorteio";
  }
  
  localStorage.setItem("participantes", JSON.stringify(localParticipantes));
}

function sortear() {
  numeroSorteado = Math.random() * 100;
  return numeroSorteado.toFixed(0);
}

let inNum, inName;

function checkNum() {
  if (inNum > 99 || inNum < 0) {
    alert("NUMERO INVALIDO");
    return null;
  }
  return inNum;
}

function checkName() {
  if (localParticipantes[inNum] != "Criadores do Sorteio") {
    return null;
  }
  return inName;
}

function getNumber() {
  inNum = Number(document.getElementById("inNum").value);
  checkNum();
  console.log(inNum);
  return inNum;
}

function getName() {
  inName = document.getElementById("inName").value;
  return checkName();
}

function start() {
  getNumber();
  const nomechecado = getName();
  console.log(nomechecado);
  if (nomechecado == null) {
    alert("NOME INVALIDO");
  } else {
    localParticipantes[inNum] = inName;
    localStorage.setItem("participantes", JSON.stringify(localParticipantes));
  }
}

document.getElementById("butaoCadastro").addEventListener("click", start);
