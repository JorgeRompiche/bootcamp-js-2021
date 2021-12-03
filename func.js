/*
function mensaje(prefijo,  formateador) //funciones de primer nivel
{
    return function(texto)//funciones anonimas
    {
        return formateador(prefijo, texto);
    }
}
*/

//const formatoBienvenida = function(prefijo, texto)//funciones como constantes (o variables [let])
//{
//    return "¡" + prefijo + " " + texto + "!";
//}

//const formatoDespedida = (prefijo, texto) => prefijo + " " + texto + "... :("; //arrow functions

const mensaje = (prefijo, format) => texto => format(prefijo, texto);

const bienvenida = mensaje("hola", (a, b) => `¡${a} ${b}!`);//interpolación
const despedida = mensaje("adios", (prefijo, texto) => `${prefijo} ${texto}... :(`);

console.log(bienvenida("mundo"));
console.log(despedida("mundo"));