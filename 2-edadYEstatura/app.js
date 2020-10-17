const edades = new Array(12, 13, 10, 8, 9, 7, 14, 12, 8, 9);
const estaturas = new Array(1.65, 1.62, 1.55, 1.48, 1.46, 1.44, 1.69, 1.64, 1.53, 1.56);


function calcularEdadPromedio() {
    let suma = 0;
    edades.forEach(function(element) {
        suma += element
    });
    return (suma / 10)
}

function calcularEstaturaPromedio() {
    let suma = 0;
    estaturas.forEach(function(element) {
        suma += element
    });
    return (suma / 10)
}

function contarMayorQueDiez() {
    let mayor = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > 10) {
            mayor++;
        }
    }
    return mayor;
}

function contarPetizos() {
    let petizo = 0;
    for (let i = 0; i < estaturas.length; i++) {
        if (estaturas[i] < 1.50) {
            petizo++;
        }
    }
    return petizo;
}

function imprimirResultados(edad, estat, mayor, petizo) {
    console.log(`------------------------ Resultados: ------------------------
    ♦ Edad Promedio                                    : ${edad}
    ♦ Estatura Promedio                                : ${estat.toFixed(2)} mts.
    ♦ Cantidad de estudiantes mayores de 10 años       : ${mayor}
    ♦ Cantidad de estudiantes que miden menos de 1,50 m: ${petizo}`);
    process.exit();
}


async function iniciar() {
    let edadPromedio = await calcularEdadPromedio();
    let estaturaPromedio = await calcularEstaturaPromedio();
    let mayoresDeDiez = await contarMayorQueDiez();
    let petizos = await contarPetizos();
    await imprimirResultados(edadPromedio, estaturaPromedio, mayoresDeDiez, petizos);
}

iniciar()