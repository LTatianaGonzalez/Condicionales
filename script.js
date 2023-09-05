

/*** Ejercicio #1 ***/
function ejercicio1() {
    const respuesta = prompt("¿Eres bellisimo/a?");
    if (respuesta.toLowerCase() === "si") {
        alert("Ciertamente");
    } else {
        alert("No te creo");
    }    
}

/*** Ejercicio #2 ***/
function ejercicio2() {
let preguntanumero = prompt("Ingresa un número:");
   let evaluarnumero = parseInt(preguntanumero);
if (evaluarnumero % 2 === 0) {
   alert("numero" + evaluarnumero + " Es divisible entre 2");
} else {
   alert("numero" + evaluarnumero + "No es divisible entre 2");
}
}

/*** Ejercicio #3 ***/
function ejercicio3() {
const numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número no es par");
    }
      
}

/*** Ejercicio #4 ***/
function ejercicio4() {
const numeroCliente = parseInt(prompt("Ingresa un número de cliente:"));
    if (numeroCliente === 1000) {
        alert("Ganaste un premio");
    } else {
        alert(`Número de cliente: ${numeroCliente}\nLo sentimos, sigue participando`);
    }
}

/*** Ejercicio #5 ***/
function ejercicio5() {
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (numero1 < numero2) {
        alert(`${numero1} es menor que ${numero2}`);
    } else {
        alert(`${numero2} es menor que ${numero1}`);
    }
}

 /*** Ejercicio #6 ***/
 function ejercicio6() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    const numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    
    if (numero1 >= numero2 && numero1 >= numero3) {
        alert(`${numero1} es el número mayor`);
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        alert(`${numero2} es el número mayor`);
    } else {
        alert(`${numero3} es el número mayor`);
    }    
 
 if (numero1 == numero2 && numero3 >= numero2) {
     alert(`${numero3} es el número mayor`);
 } else if (numero2 == numero3 && numero1 >= numero3) {
     alert(`${numero1} es el número mayor`);
 } else if (numero1 == numero3 && numero2 >= numero3){
     alert(`${numero2} es el número mayor`);
 }
}

 /*** Ejercicio #7 ***/
function ejercicio7() {
 const diaSemana = prompt("Ingresa un día de la semana:").toLowerCase();

if (diaSemana === "lunes") {
    alert("Empezo la semana");
} else if (diaSemana === "viernes") {
    alert("Termino la semana");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
    alert("Es fin de semana!");
} else {
    alert("No es un día especial");
}
}

/*** Ejercicio #8 ***/
function ejercicio8() {
const calificacion = parseFloat(prompt("Ingresa una calificación (entre 1 y 10):"));
if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion < 6) {
        alert("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert("Regular");
    } else if (calificacion === 9) {
        alert("Bien");
    } else if (calificacion === 10){
        alert("Excelente");
    }
} else {
    alert("La calificación ingresada no está en el rango válido.");
}
}

/*** Ejercicio #9 ***/
function ejercicio9() {
const topping = prompt("Selecciona un topping (oreo, KitKat, brownie):").toLowerCase();
let precioTotal = 50; // Precio base

switch (topping) {
    case "oreo":
        precioTotal += 10;
        break;
    case "kitkat":
        precioTotal += 15;
        break;
    case "brownie":
        precioTotal += 20;
        break;
    default:
        alert("No tenemos este topping, lo sentimos.");
}

alert(`El precio total es de ${precioTotal} MXN.`);
}

/*** Ejercicio #10 ***/
function ejercicio10() {
    const nivel = prompt("Selecciona un nivel (Course, Carrera, Master):");
    const precioMensual = {
        "Course": 4999,
        "Carrera": 3999,
        "Master": 2999
    };
    
    const beca = prompt("¿Tienes beca? (Facebook, Google, Jesua)").toLowerCase();
    const descuentos = {
        "facebook": 0.2,
        "google": 0.15,
        "jesua": 0.5
    };
    
    if (nivel in precioMensual) {
        let precioFinal = precioMensual[nivel];
        if (beca in descuentos) {
            precioFinal *= (1 - descuentos[beca]);
        }
        const duracion = {
            "Course": 2,
            "Carrera": 6,
            "Master": 12
        };
        const precioTotal = precioFinal * duracion[nivel];
        alert(`Precio mensual con descuento: ${precioFinal} MXN\nPrecio total del curso: ${precioTotal} MXN`);
    } else {
        alert("Nivel no válido");
    }    
}

/*** Ejercicio #11 ***/
function ejercicio11() {
const vehiculo = prompt("Selecciona un vehículo (coche, moto, autobús):").toLowerCase();
const precioKilometro = {
    "coche": 0.20,
    "moto": 0.10,
    "autobús": 0.5
};

const litrosConsumidos = parseFloat(prompt("Ingresa la cantidad de litros consumidos:"));

let costoTotal = precioKilometro[vehiculo] * litrosConsumidos;

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    costoTotal += 5;
} else if (litrosConsumidos > 100) {
    costoTotal += 10;
}

alert(`Total a pagar: ${costoTotal}`);
}