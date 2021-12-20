//Mostrar dos formas de crear un objeto
var persona = {} //forma 1
var persona = new Object(); //forma 2
//Mostrar las 2 formas de crear un objeto
var Persona = {} //Forma 1
var Persona = new Object(); //Forma 2

//Mostrar las 2 formas de agregar atributos a un objeto
//FORMA 1
Persona.nombre = "priscila";
Persona.apellido = "taipicuri";
Persona.edad = 16;
Persona.genero = "femenino";

//FORMA 2
Persona["nombre"] = "priscila";
Persona["apellido"] = "Taipicuri";
Persona["edad"] = 16;
Persona["genero"] = "femenino";

//Mostrar las 2 formas para acceder a los datos del objeto
//FORMA 1
console.log(Persona.nombre); // priscila
//FORMA 2
console.log(Persona["nombre"]); // priscila
console.log(Persona)
//Mostrar las 2 formas de modificar los valores de un objeto
//FORMA 1
Persona.nombre = "Priss";
console.log(Persona)
//FORMA 2
Persona["apellido"] = "Sanchez";

console.log(Persona)


