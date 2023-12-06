let participantesArr = [];
const localParticipantes = JSON.parse(localStorage.getItem("participantes"));

if(localParticipantes.length == 0){
  for (let i = 0; i < 100; i++) {
    participantesArr[i] = "Criadores do Sorteio";
  }
  
  localStorage.setItem("participantes", JSON.stringify(participantesArr));
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
  if (participantesArr[inNum] != "Criadores do Sorteio") {
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

// function start() {
//   const numerochecado = getNumber();
//   const nomechecado = getName();
//   console.log(nomechecado);
  // if ((numerochecado == null)) {
  //   if ((nomechecado == null)) {
  //     return null;
  //   }
  // } else {
  //   participantesArr[inNum] = inName;
  //   localStorage.setItem("participantes", JSON.stringify(participantesArr));
  // }
// }


function start() {
  const numerochecado = getNumber();
  const nomechecado = getName();
  console.log(nomechecado);
  if (nomechecado == null) {
    alert("NOME INVALIDO");
  } else {
    participantesArr[inNum] = inName;
    localStorage.setItem("participantes", JSON.stringify(participantesArr));
  }
}

document.getElementById("butaoCadastro").addEventListener("click", start);
