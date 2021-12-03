//inmutabilidad: no modificar el objeto original


const juan = {
    nombre: "Juan",
    apellido: "Rodriguez",
    edad: 30,
    direccion: {
        departamento: "Guatemala",
        municipio: "Guatemala"
    }
};
//const juan2 = Object.assign({}, juan);//crear un objeto nuevo copiando los atributos de un objeto original
//const juan2 = Object.assign({}, juan, {apellido: "Perez"});//modificar atributo
//const juan2 = {...juan, apellido: "Perez"};//spread operator (...)
//const juan2 = {...juan, apellido: "Perez", telefono: "12345678"};//agregar atributo
const juan2 = {
    ...juan, 
    apellido: "Perez", 
    telefono: "12345678",
    direccion: {
        ...juan.direccion,
        municipio: "Santa Catarina Pinula",
        aldea: "Aldea1"
    }
};

//juan2.direccion.municipio = "Santa Catarina Pinula"

//console.log("juan:", juan);
//console.log("juan2: ",juan2);


//Arreglos inmutables

const numeros = [1, 2, 3];

//const numeros2 = numeros;// copia la referencia al arreglo original
//const numeros2 = [...numeros, 4];
//numeros2.push(5);
//const numeros2 = [0,...numeros, 4];//agregar elemento al inicio
const numeros2 = [0, ...numeros, 4, ...numeros];//agregar dos arreglos

const index = numeros.indexOf(2);   //agregar elementos intermedios
const numeros3 = [                  
    ...numeros.slice(0, index),
    1.5,
    ...numeros.slice(index,)
]

const numeros4 = numeros.filter(x => x != 2);   //eliminar un valor

const numeros5 = numeros.map(x => x == 2 ? 100 : x);

console.log("numeros:", numeros);
console.log("numeros2:", numeros2);
console.log("numeros3:", numeros3);
console.log("numeros4:", numeros4);
console.log("numeros5:", numeros5);