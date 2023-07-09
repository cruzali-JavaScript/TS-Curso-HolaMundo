var mensaje = "Hola Mundo...";
mensaje = "Nuevo string";
console.log(mensaje);
mensaje = "chao mundo";
var extincionDinosaurios = 76000000;
var dinosaurioFavorito = "T-Rex";
var extinto = true;
// extinto = 44 // Ya se especifico como boolean
var otraVariable = 33;
// otraVariable = "mas" // Ya se inicializo como int
var variableAny;
variableAny = "hola";
variableAny = 33;
function funcion_ali(conf) {
    return conf;
}
var animales = ['animal1', 'animal2', 'animal3'];
var nums = [1, 2, 3];
var checks = [];
var nums2 = [];
// animales.map(X => X.) // El autocompletado sugiere métodos del tipo de dato.
// Tuplas
var tupla1 = [1, ['nombre1', 'otro']];
tupla1.push(5, ['ss']);
var chica = 's';
var mediana = 'm';
var grande = 'l';
var extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 6] = "Chica";
    Talla[Talla["Mediana"] = 7] = "Mediana";
    Talla[Talla["Grande"] = 8] = "Grande";
    Talla[Talla["ExtraGrande"] = 9] = "ExtraGrande";
})(Talla || (Talla = {}));
var variableTalla = Talla.Grande;
console.log(variableTalla);
var estado = 2 /* LoadingState.Success */;
var objeto = {
    id: 1,
    nombre: 'Ali',
    talla: Talla.Chica
};
objeto.nombre = 'Hola Mundo';
// objeto.id = 42 // Da error, la propiedad es de solo lectura
/*
tipos de JS
number
string
boolean
null
undefined
object - Arreglo
function

Tipos TS
any - No usar
unknown
never
arrays
tuplas
Enums

Tipos Inferidos

*/
