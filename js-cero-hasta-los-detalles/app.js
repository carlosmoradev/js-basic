// //metodos y THIS

// var nombre = "Peter"

// var persona = {
//     nombre: "El Brayan",
//     apellido: "Stevenzon",
//     imprimirNombre: function(){
//         console.log(nombre);  //lo toma del scope global
//         console.log(this.nombre); //el this hace que lo tome desde el scope de la funcion
//     },
//     direccion:{
//         pais: "Colombia",
//         obtenerPais: function(){
//             var self = this;    //!self es un nombre de variable muy usado para referirse a this

//             var nuevaDireccion = function(){
//                 console.log(self);
//                 console.log(`La direccion es en ${self.pais}`); //la variable self permite que js realice la busqueda en el objeto inmediatament anterior
//             }
//             nuevaDireccion();
//         }
//     }
// }

// persona.direccion.obtenerPais();




function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 39;

    this.imprimirPersona = function(){
        return `${this.nombre} ${this.apellido} "(${this.edad})"`;
    }
}


var persona = new Persona("Isaac", "Asimov");
console.log(persona);

console.log(persona.nombre);
console.log(persona.imprimirPersona());

persona.nombre = "Carlos";
persona.edad = 40;

console.log(persona.imprimirPersona());
