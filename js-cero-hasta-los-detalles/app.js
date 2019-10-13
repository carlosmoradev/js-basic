var persona = {
    nombre: "Juana",
    apellido: "Lopez",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San Jose"
    }
}

console.log( persona.direccion.pais );
console.log( persona.direccion );

persona.direccion.zipCode = 224455;

console.log(persona.direccion);

var campo = "edad";

console.log(persona[campo]);

console.log( persona["direccion"]["pais"] );

//Funciones

function primeraFuncion(){
    // var a = 20;
    // console.log(a);
}
primeraFuncion();


a = primeraFuncion();
console.log(a);


function imprimirNombre(nombre, apellido){
    //Opcion para parametros alternativos
    nombre = nombre || "Jhon";
    apellido = apellido || "Doe";
 
    // console.log(nombre + " " + apellido);
    //misma opcion con backticks
    console.log(`${nombre} ${apellido}`);
}
imprimirNombre("Carlos", "Mora");
imprimirNombre("Pedro");
imprimirNombre("", "smith");


function imprimirObjeto(persona){
    console.log(`${persona.nombre} ${persona.apellido}`);
}

imprimirObjeto({
    nombre: "Jose",
    apellido: "Perea"
});


var otraPersona = {nombre: "Pablo", apellido: "Palacio"};

imprimirObjeto(otraPersona);

//retorno de funciones

function obtenerAleatorio(){
    return Math.random();
}

console.log(obtenerAleatorio() + 11);