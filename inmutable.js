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

console.log("juan:", juan);
console.log("juan2: ",juan2);