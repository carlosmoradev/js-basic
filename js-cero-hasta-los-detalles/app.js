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




function Persona(){

}


var carlos = new Persona();
console.log(carlos);

