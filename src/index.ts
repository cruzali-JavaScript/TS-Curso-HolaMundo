let mensaje: string = "Hola Mundo..."

mensaje = "Nuevo string"
console.log(mensaje)

mensaje = "chao mundo"

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extinto: boolean = true

// extinto = 44 // Ya se especifico como boolean

let otraVariable = 33

// otraVariable = "mas" // Ya se inicializo como int


let variableAny
variableAny = "hola"
variableAny = 33


function funcion_ali(conf: any)
{
    return conf
}


let animales: string[] = ['animal1', 'animal2', 'animal3']
let nums: number[] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

// animales.map(X => X.) // El autocompletado sugiere métodos del tipo de dato.

// Tuplas

let tupla1: [number, string[]] = [1, ['nombre1','otro']]
tupla1.push(5, ['ss'])


const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla {Chica = 6, Mediana, Grande, ExtraGrande}

const variableTalla = Talla.Grande
console.log(variableTalla)


const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

type Persona = {
    readonly id: number,
    nombre?: string,
    talla: Talla
    }

const objeto: Persona = {
    id: 1,
    nombre: 'Ali',
    talla: Talla.Chica
}

objeto.nombre = 'Hola Mundo'
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

