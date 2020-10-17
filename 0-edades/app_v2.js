//----------------"boilerplate code"-------------------
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
//--------------- END "boilerplate code"----------------

const notas = [];
const error = new Error("Error. Ingrese una nota válida")

async function pedirNotas() {
  console.log("Ingrese 10 (diez) notas")
  let ingresado;
  for (let index = 0; index < 10; index++) {
    ingresado = await ask("Nota ?... ")
    ingresado = parseInt(ingresado);
    if (!esNotaInvalida(ingresado)) {
      let nota = ingresado
      notas.push(nota)
    }
  }
  evaluarNotas();
}

function esNotaInvalida(ingresado) {
  if (isNaN(ingresado) || ingresado == "") {
    console.log(error.message);
    process.exit();
  } else if (ingresado > 10 || ingresado < 1) {
    console.log(error.message);
    process.exit();
  }
  return false;
}

function evaluarNotas() {
  let aplazado = 0,
    aprobado = 0,
    promocdo = 0;
    
  for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    if (element >= 1 && element <= 3) {
      aplazado++;
    }
    if (element >= 4 && element <= 7) {
      aprobado++;
    }
    if (element >= 8 && element <= 10) {
      promocdo++;
    }
  }
  imprimirResultados(aplazado, aprobado, promocdo);
}

function imprimirResultados(aplaz, aprob, promo) {
    console.log("Notas: ", notas);
    console.log(`---------------Resultados:---------------
    ♦ Cantidad de alumnos aprobados:     ${aprob}
    ♦ Cantidad de alumnos promocionados: ${promo}
    ♦ Cantidad de alumnos aplazados:     ${aplaz}`);
  process.exit();
}

pedirNotas();
