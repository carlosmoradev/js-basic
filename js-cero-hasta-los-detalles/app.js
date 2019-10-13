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

console.log(persona.direccion)