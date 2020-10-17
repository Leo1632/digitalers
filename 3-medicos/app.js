const guille = {
    nombre: "Guillermo",
    matricula: 435466,
    sexo: 'M',
    especialidad: "cardiologia",
    precioConsulta: 800
}
const beatriz = {
    nombre: "Beatriz",
    matricula: 348545,
    sexo: 'F',
    especialidad: "pediatria",
    precioConsulta: 1200
}
const ruben = {
    nombre: "Ruben",
    matricula: 987561,
    sexo: 'M',
    especialidad: "odontologia",
    precioConsulta: 900
}
const jorge = {
    nombre: "Jorge",
    matricula: 261568,
    sexo: 'M',
    especialidad: "pediatria",
    precioConsulta: 1500
}
const luis = {
    nombre: "Luis",
    matricula: 642553,
    sexo: 'M',
    especialidad: "cardiologia",
    precioConsulta: 500
}
const manu = {
    nombre: "Emanuel",
    matricula: 892341,
    sexo: 'M',
    especialidad: "odontologia",
    precioConsulta: 600
}

const medicos = new Array(guille, beatriz, ruben, jorge, luis, manu)

let cardiologos = 0,
    odontologos = 0,
    pediatras = 0;

let precioCardi = 0,
    precioOdont = 0,
    precioPedia = 0;

medicos.forEach(value => {

    switch (value["especialidad"]) {
        case 'cardiologia':
            cardiologos++
            precioCardi += value["precioConsulta"]
            break;

        case 'pediatria':
            pediatras++
            precioPedia += value["precioConsulta"]
            break;

        case 'odontologia':
            odontologos++
            precioOdont += value["precioConsulta"]
            break;
    }
})

console.log(`---------------Resultados:---------------
    ♦ Cantidad de cardiólogos:   ${cardiologos}
    ♦ Cantidad de odontólogos:   ${odontologos}
    ♦ Cantidad de pediatras  :   ${pediatras}

    ♦ Precio promedio para consulta de cardiología:  $${precioCardi / cardiologos}
    ♦ Precio promedio para consulta de odontología:  $${precioOdont / odontologos}
    ♦ Precio promedio para consulta de pediatría  :  $${precioPedia / pediatras}`);