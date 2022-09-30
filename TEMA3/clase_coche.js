//Crear una clase coche
class Coche{

    constructor(puertas, marca){
        //Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene
        this.puertas = puertas;
        this.marca = marca;
        //Una función que incremente el número de puertas que tiene el coche.
        this.agregarPuertas = function(x){
            return this.puertas = this.puertas + x
        }
    }  
}

//Crear un objeto miCoche en el main
let miChoche = new Coche(4, "Dodge");
// añadirle una puerta
miChoche.agregarPuertas(1)

//Mostrar el número de puertas que tiene el objeto.
console.log(miChoche.puertas);

