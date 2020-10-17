const notas = [];
const error = new Error("Error. Ingrese una nota válida (del 1 al 10)")

process.stdout.write("Dame 10 (diez) notas:\n")

process.stdin.on("data", function (ingresado) {
  ingresado = parseInt(ingresado);
  if (!esNotaInvalida(ingresado)) {
    let nota = ingresado
    notas.push(nota)
  }
  if (notas.length == 10) {
    evaluarNotas()
  }
});

function esNotaInvalida(ingresado) {
  if (isNaN(ingresado) || ingresado == "") {
    console.log(error.message)
    process.exit()
  } else if (ingresado > 10 || ingresado < 1) {
    console.log(error.message)
    process.exit()
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
